import { FC } from 'react'
import type { Post } from '../types/post'
import { Link } from 'react-router-dom'

interface HeroPostCardProps {
  post: Post
}

const HeroPostCard: FC<HeroPostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
  return (
    <Link to={`/blog/${post.slug}`} className="no-underline">
      <div className="border rounded-xl md:rounded-2xl shadow-sm overflow-hidden hover:opacity-95 transition-opacity flex flex-col h-[500px] md:h-auto">
        <div className="w-full h-[300px] md:h-[400px]">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h2
            className="text-xl md:text-3xl font-bold text-[var(--gray-dark)]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h2>
          <p
            className="text-[var(--gray-mid)] text-sm md:text-lg leading-[1.25rem] md:leading-[1.5rem] min-h-[3.75rem] md:min-h-0"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt || ''}
          </p>
          <p className="mt-auto text-sm md:text-lg md:font-semibold">
            {formattedDate}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default HeroPostCard
