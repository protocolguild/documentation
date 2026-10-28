import { FC } from 'react'
import { Link } from 'react-router-dom'
import Section from './Section'
import Grid from './Grid'
import PGLockup from './PGLockup'
import DuneLogo from '../assets/images/Dune.png'
import TwitterLogo from '../assets/images/Twitter.png'
import WarpcastLogo from '../assets/images/Warpcast.png'
import DiscordLogo from '../assets/images/Discord.png'
import GithubLogo from '../assets/images/Github.png'
import HoldersVoteLogo from '../assets/images/holders-vote.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--brand-primary)] pt-16 pb-8">
      <Section background="brand-primary">
        <Section.Row>
          <Grid>
            <Grid.Item span={12}>
              <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-between w-full">
                <Link to="/">
                  <PGLockup fill="var(--gray-dark)" className="h-8 w-auto max-w-[200px]" />
                </Link>
                <nav className="flex flex-row items-center gap-6 flex-wrap">
                  <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer">
                    <img src={DuneLogo} alt="Dune" className="h-6 w-auto" />
                  </a>
                  <a href="https://x.com/ProtocolGuild" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterLogo} alt="Twitter" className="h-6 w-auto" />
                  </a>
                  <a href="https://github.com/protocolguild/protocol-guild-site" target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt="Github" className="h-6 w-auto" />
                  </a>
                  <a href="https://holders.vote/h/protocolguild.curated.hns" target="_blank" rel="noopener noreferrer">
                    <img src={HoldersVoteLogo} alt="holders.vote" className="h-6 w-auto" />
                  </a>
                </nav>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </footer>
  )
}

export default Footer
