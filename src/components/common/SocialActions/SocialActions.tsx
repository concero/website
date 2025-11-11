import type { FC, ReactElement } from 'react'
import { TwitterDarkIcon } from '@/assets/icons/twitterDark'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { MediumDarkIcon } from '@/assets/icons/mediumDark'
import { GithubIcon } from '@/assets/icons/github'
import { LinkedinIcon } from '@/assets/icons/linkedin'
import { links } from '@/configuration/links'
import './SocialActions.pcss'

type SocialLink = {
  href: string
  label: string
  Icon: FC
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: links.twitter, label: 'Twitter', Icon: TwitterDarkIcon },
  { href: links.discord, label: 'Discord', Icon: DiscordDarkIcon },
  { href: links.medium, label: 'Medium', Icon: MediumDarkIcon },
  { href: links.github, label: 'Github', Icon: GithubIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
]

type SocialActionsProps = {
  centered?: boolean
}

export const SocialActions: FC<SocialActionsProps> = ({
  centered = true,
}): ReactElement => (
  <div className="social_actions">
    <div className="social_actions_divider" />
    <div
      className={`social_actions_content ${
        centered ? 'social_actions_centered' : 'social_actions_start'
      }`}
    >
      {SOCIAL_LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social_action"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
)
