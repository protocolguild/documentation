import { FC, useState } from 'react'
import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import DonorSectionDark2 from '../components/DonorSectionDark2'
import DonorSectionDark3 from '../components/DonorSectionDark3'
import DonorSectionDark4 from '../components/DonorSectionDark4'
import Grid from '../components/Grid'
import medallionSvg from '../assets/images/medallion.svg'
import HeroHeader from '../components/HeroHeader'
import DuneTable from '../components/DuneTable'
import { donateContent } from '../content/donate'
import chainsImage from '../assets/images/chains.png'
import DuneStat from '../components/DuneStat'
import authorImage from '../assets/images/EigenLayer.png'
import InAppContributions from '../components/InAppContributions'

const Donate: FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % donateContent.quotes.length)
  }

  const previousQuote = () => {
    setCurrentQuote(
      (prev) =>
        (prev - 1 + donateContent.quotes.length) % donateContent.quotes.length
    )
  }

  const goToQuote = (index: number) => {
    setCurrentQuote(index)
  }

  return (
    <main>
      <HeroHeader
        imageSrc={chainsImage}
        theme="light"
        paddingBottomClassName="pb-[70px] lg:pb-[217px]"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)] mb-4">
          {donateContent.hero.title}
        </h1>
        <p className="text-lg leading-[23px] text-[var(--gray-mid)] mb-4">
          {donateContent.hero.subtitle1}
        </p>
      </HeroHeader>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                {donateContent.value.title}
              </h2>
            </Grid.Item>
            <Grid.Item
              span={12}
              className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6"
            >
              {donateContent.value.features.map((feature, index) => (
                <div className="flex justify-center" key={index}>
                  <div className="w-full">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      color="var(--gray-dark)"
                    />
                  </div>
                </div>
              ))}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-4">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">
                {donateContent.pledge.title}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.pledge.subtitle1}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.pledge.subtitle2}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)] flex items-center">
                <a
                  href="https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {donateContent.pledge.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    {/* Add margin to the left for spacing */}
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] mt-16 !text-[var(--gray-dark)]">
                <em>{donateContent.pledge.quote.text}</em>
              </h2>
              <div className="flex items-center mb-16">
                <img
                  src={authorImage}
                  alt="EigenLayer"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                  {donateContent.pledge.quote.author}
                </h2>
              </div>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col items-center">
              <img
                src={medallionSvg}
                alt="Protocol Guild medallion"
                className="mt-0 w-48 transform-gpu mb-8"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
              <DonorSectionDark2 theme="dark" type="Partners" featured={true} />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                {donateContent.ecosystem.title}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.ecosystem.subtitle1}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.ecosystem.subtitle2}
              </h2>
              <DonorSectionDark3 theme="dark" type="Donors" />
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[var(--gray-dark)] text-base sm:text-sm">
                  {donateContent.ecosystem.tableHeader}
                </p>
                <a
                  href="https://dune.com/protocolguild/protocol-guild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[var(--gray-dark)] text-base sm:text-sm">
                    View on Dune
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <DuneTable queryId="4561127" theme="light" />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-4">
              <h2 className="lg:w-[80%] col-span-3 text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">
                {donateContent.planning.title}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.planning.description}
              </h2>
              <a
                href="https://calendar.proton.me/bookings#SlJ5lcd5OiqJJmZ_9XNwLwwdeBR2BMsl_xly35gQMoo="
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline"
              >
                Get in Touch
              </a>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="relative h-[200px]">
                <div className="overflow-hidden absolute inset-0">
                  <div
                    className="flex h-full items-center transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentQuote * 100}%)` }}
                  >
                    {donateContent.quotes.map((quote, index) => (
                      <div key={index} className="min-w-full px-12 md:px-16">
                        <h2 className="!text-[16px] md:!text-lg !font-normal !leading-[20px] md:!leading-[24px] !text-[var(--gray-dark)] italic">
                          {quote.text}
                        </h2>
                        <h2 className="!text-[16px] md:!text-lg !font-normal !leading-[20px] md:!leading-[24px] !text-[var(--gray-dark)]">
                          <span className="block mt-4">{quote.author}</span>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={previousQuote}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  onClick={nextQuote}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <div className="flex justify-center gap-[8px] absolute -bottom-4 left-0 right-0">
                  {donateContent.quotes.map((_quote, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToQuote(index)}
                      className={`w-[16px] h-[16px] rounded-full transition-colors focus:outline-none p-0 ${
                        currentQuote === index
                          ? 'bg-[var(--brand-primary)]'
                          : 'bg-gray-500'
                      }`}
                      aria-label={`Go to quote ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                {donateContent.donate.title}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.donate.description1}
              </h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                {donateContent.donate.description2}
              </h2>
              <a
                href={donateContent.donate.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block"
              >
                {donateContent.donate.buttonText}
              </a>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="w-[49%]">
                  <DuneStat
                    queryId="2478156"
                    theme="light"
                    title="Total Donations"
                    variableName="total_donors"
                    type="number"
                  />
                </div>
                <div className="w-[49%]">
                  <DuneStat
                    queryId="2478156"
                    theme="light"
                    title="Unique Donors"
                    variableName="unique_donors"
                    type="number"
                  />
                </div>
              </div>
              <DonorSectionDark4
                theme="dark"
                type="Donors"
                className="max-w-[100%] lg:max-w-[90%] mx-auto"
              />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12}>
              <InAppContributions />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

    </main>
  )
}

export default Donate
