import type { FC } from 'react'
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Prism from 'prismjs'
import 'prismjs/components/prism-solidity'

const TYPING_SPEED = 1000

enum Field {
    TEXT1 = 'text1',
    TEXT2 = 'text2',
    TEXT3 = 'text3',
    TEXT4 = 'text4',
}

enum Step {
    VERIFIER = 0,
    RELAYER = 1,
    VERIFIER_RPC = 2,
    RELAYER_RPC = 3,
    COMPLETE = 4,
}

type Props = {
    base: string
    verifier: string
    relayer: string
    verifierRPC?: string
    relayerRPC?: string
    end: string
}

type State = {
    [Field.TEXT1]: string
    [Field.TEXT2]: string
    [Field.TEXT3]: string
    [Field.TEXT4]: string
    step: Step
}

type CodeParts = {
    base: string
    t1: string
    t2: string
    t3: string
    t4: string
    end: string
    hasExtra: boolean
}

type TypingItem = {
    value: string
    field: Field
    next: Step
}

const synthesizeCode = ({ base, t1, t2, t3, t4, end, hasExtra }: CodeParts): string => {
    return hasExtra
        ? `${base}
      verifiers: [${t1}],
      relayers: [${t2}],
      verifierRPCs: [${t3}],
      relayerRPCs: [${t4}]${end}`
        : `${base}
      verifiers: [${t1}],
      relayers: [${t2}]${end}`
}

const highlightCode = (html: string, word: string): string => {
    if (!word) return html

    const words = word.includes(',') ? word.split(',').map(w => w.trim()) : [word]

    words.forEach(w => {
        if (w) {
            const safe = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            html = html.replace(new RegExp(`\\b${safe}\\b`, 'g'), `<span class="typed-text-accent">${w}</span>`)
        }
    })

    return html
}

const INITIAL_STATE: State = {
    [Field.TEXT1]: '',
    [Field.TEXT2]: '',
    [Field.TEXT3]: '',
    [Field.TEXT4]: '',
    step: Step.VERIFIER,
}

export const BaseCodeBlock: FC<Props> = ({ base, verifier, relayer, verifierRPC, relayerRPC, end }) => {
    const hasExtra = !!verifierRPC && !!relayerRPC
    const [state, setState] = useState<State>(INITIAL_STATE)
    const [blockKey, setBlockKey] = useState(0)

    useEffect(() => {
        setState(INITIAL_STATE)
        setBlockKey(prev => prev + 1)

        const items: TypingItem[] = [
            { value: verifier, field: Field.TEXT1, next: Step.RELAYER },
            { value: relayer, field: Field.TEXT2, next: hasExtra ? Step.VERIFIER_RPC : Step.COMPLETE },
            { value: verifierRPC || '', field: Field.TEXT3, next: Step.RELAYER_RPC },
            { value: relayerRPC || '', field: Field.TEXT4, next: Step.COMPLETE },
        ]

        const timers: ReturnType<typeof setInterval>[] = []
        const maxStep = hasExtra ? Step.COMPLETE : Step.VERIFIER_RPC

        const typeStep = (currentStep: Step) => {
            if (currentStep >= maxStep) return

            const item = items[currentStep]
            if (!item.value) {
                typeStep(item.next)
                return
            }

            let charIndex = 0
            const charSpeed = TYPING_SPEED / item.value.length

            const timer = setInterval(() => {
                if (charIndex <= item.value.length) {
                    setState(prev => ({
                        ...prev,
                        [item.field]: item.value.slice(0, charIndex),
                    }))
                    charIndex++
                } else {
                    clearInterval(timer)
                    setState(prev => ({ ...prev, step: item.next }))
                    typeStep(item.next)
                }
            }, charSpeed)

            timers.push(timer)
        }

        typeStep(Step.VERIFIER)

        return () => timers.forEach(clearInterval)
    }, [verifier, relayer, verifierRPC, relayerRPC, hasExtra])

    const coloredHTML = useMemo(() => {
        const code = synthesizeCode({
            base,
            t1: state[Field.TEXT1],
            t2: state[Field.TEXT2],
            t3: state[Field.TEXT3],
            t4: state[Field.TEXT4],
            end,
            hasExtra,
        })

        let html = Prism.highlight(code, Prism.languages.solidity, 'solidity')

        html = highlightCode(html, state[Field.TEXT1])
        html = highlightCode(html, state[Field.TEXT2])
        if (hasExtra) {
            html = highlightCode(html, state[Field.TEXT3])
            html = highlightCode(html, state[Field.TEXT4])
        }

        return html
    }, [base, end, state, hasExtra])

    return (
        <AnimatePresence mode="wait">
            <motion.pre
                key={blockKey}
                className="code_block_pre"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                }}
            >
                <code className="language-solidity" dangerouslySetInnerHTML={{ __html: coloredHTML }} />
            </motion.pre>
        </AnimatePresence>
    )
}
