import { FC } from 'react'
import Section from '../components/Section'
import Grid from '../components/Grid'
import { getAllPosts } from '../lib/posts'
import PostCard from '../components/PostCard'
import HeroPostCard from '../components/HeroPostCard'
import { Post } from '../types/post'
import StandaloneNavbar from '../components/StandaloneNavbar'
import { blogContent } from '../content/blog'

const Blog: FC = () => {
  const posts = getAllPosts()
  const [latest, ...rest] = posts

  return (
    <main>
      <StandaloneNavbar />
      {latest && (
        <Section background="white">
          <Section.Row align="start">
            <Grid columns={12} className="pt-0 pb-10">
              <Grid.Item span={12}>
                <HeroPostCard post={latest} />
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
      )}

      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                {blogContent.allPosts.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((post: Post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default Blog
