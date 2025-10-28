import type { FC } from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import "./CodeBlock.pcss";

import Prism from "prismjs";
import "prismjs/components/prism-solidity";

const CONFIGS = {
    speed: {
        base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";


contract YourContract {
    function yourFunction() external payable {


        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
        verifier: `fastVerifier`,
        relayer: `fastRelayer`,
        end: `
        );
    }
}`
    },
    cost: {
        base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";


contract YourContract {
    function yourFunction() external payable {


        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
        verifier: `cheapVerifier`,
        relayer: `cheapRelayer`,
        end: `
        );
    }
}`
    },
    compliance: {
        base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";


contract YourContract {
    function yourFunction() external payable {


        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
        verifier: `compliantVerifier`,
        relayer: `anyRelayer`,
        verifierRPC: `compliantRPC`,
        relayerRPC: `compliantRPC`,
        end: `
        );
    }
}`
    },
    deliverability: {
        base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";


contract YourContract {
    function yourFunction() external payable {


        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
        verifier: `compliantVerifier`,
        relayer: `relayerA, relayerB, relayerC`,
        verifierRPC: `reliableRPC`,
        relayerRPC: `reliableRPC`,
        end: `
        );
    }
}`
    },
    sovereignty: {
        base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";


contract YourContract {
    function yourFunction() external payable {


        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
        verifier: `privateValidator`,
        relayer: `privateRelayer`,
        end: `
        );
    }
}`
    }
} as const;

interface CodeBlockProps {
    currentIndex: number;
}

export const CodeBlock: FC<CodeBlockProps> = ({ currentIndex }) => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [stage, setStage] = useState(0);

    const config = currentIndex === 0 ? CONFIGS.speed
        : currentIndex === 2 ? CONFIGS.cost 
        : currentIndex === 3 ? CONFIGS.compliance 
        : currentIndex === 4 ? CONFIGS.deliverability 
        : currentIndex === 5 ? CONFIGS.sovereignty 
        : null;
    
    const show = [0, 2, 3, 4, 5].includes(currentIndex);
    const hasRPCs = currentIndex === 3 || currentIndex === 4;

    useEffect(() => {
        setText1("");
        setText2("");
        setText3("");
        setText4("");
        setStage(0);

        if (!config) return;

        let i = 0;
        const timer = setInterval(() => {
            if (i <= config.verifier.length) {
                setText1(config.verifier.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                setStage(1);
            }
        }, 1000 / config.verifier.length);

        return () => clearInterval(timer);
    }, [currentIndex, config]);

    useEffect(() => {
        if (stage !== 1 || !config) return;

        let i = 0;
        const timer = setInterval(() => {
            if (i <= config.relayer.length) {
                setText2(config.relayer.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                setStage(hasRPCs ? 2 : 4);
            }
        }, 1000 / config.relayer.length);

        return () => clearInterval(timer);
    }, [stage, config, hasRPCs]);

    useEffect(() => {
        if (stage !== 2 || !hasRPCs || !config) return;
        const rpcConfig = config as typeof CONFIGS.compliance | typeof CONFIGS.deliverability;

        let i = 0;
        const timer = setInterval(() => {
            if (i <= rpcConfig.verifierRPC.length) {
                setText3(rpcConfig.verifierRPC.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                setStage(3);
            }
        }, 1000 / rpcConfig.verifierRPC.length);

        return () => clearInterval(timer);
    }, [stage, config, hasRPCs]);

    useEffect(() => {
        if (stage !== 3 || !hasRPCs || !config) return;
        const rpcConfig = config as typeof CONFIGS.compliance | typeof CONFIGS.deliverability;

        let i = 0;
        const timer = setInterval(() => {
            if (i <= rpcConfig.relayerRPC.length) {
                setText4(rpcConfig.relayerRPC.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                setStage(4);
            }
        }, 1000 / rpcConfig.relayerRPC.length);

        return () => clearInterval(timer);
    }, [stage, config, hasRPCs]);

    const highlightedHTML = useMemo(() => {
        if (!config) return '';

        const fullCode = hasRPCs
            ? `${config.base}
            verifiers: [${text1}],
            relayers: [${text2}],
            verifierRPCs: [${text3}],
            relayerRPCs: [${text4}]${config.end}`
            : `${config.base}
            verifiers: [${text1}],
            relayers: [${text2}]${config.end}`;

        // Highlight with Prism
        let html = Prism.highlight(fullCode, Prism.languages.solidity, 'solidity');
        
        if (text1) {
            const escaped = text1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            html = html.replace(new RegExp(`\\b${escaped}\\b`, 'g'), `<span class="typed-text-accent">${text1}</span>`);
        }
        if (text2) {
            // Handle comma-separated values
            const parts = text2.includes(',') ? text2.split(',').map(s => s.trim()) : [text2];
            parts.forEach(part => {
                if (part) {
                    const escaped = part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    html = html.replace(new RegExp(`\\b${escaped}\\b`, 'g'), `<span class="typed-text-accent">${part}</span>`);
                }
            });
        }
        if (text3 && hasRPCs) {
            const escaped = text3.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            html = html.replace(new RegExp(`\\b${escaped}\\b`, 'g'), `<span class="typed-text-accent">${text3}</span>`);
        }
        if (text4 && hasRPCs) {
            const escaped = text4.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            html = html.replace(new RegExp(`\\b${escaped}\\b`, 'g'), `<span class="typed-text-accent">${text4}</span>`);
        }

        return html;
    }, [config, text1, text2, text3, text4, hasRPCs]);

    if (!show || !config) return null;

    return (
        <motion.div 
            className="code_block"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <pre className="code_block_pre">
                <code 
                    className="language-solidity"
                    dangerouslySetInnerHTML={{ __html: highlightedHTML }}
                />
            </pre>
        </motion.div>
    );
};
