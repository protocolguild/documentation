import { FC } from 'react'
import Section from './Section'
import Grid from './Grid'
import Navbar from './Navbar'

interface StandaloneNavbarProps {
  theme?: 'light' | 'brand' | 'dark'
}

const StandaloneNavbar: FC<StandaloneNavbarProps> = ({ theme = 'light' }) => {
  return (
    <Section background="white">
      <Section.Row>
        <Grid>
          <Grid.Item span={12} className="w-full md:w-[65%]">
            <Navbar theme={theme} />
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
  )
}

export default StandaloneNavbar
