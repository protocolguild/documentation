import { FC } from 'react'
import type { Post } from '../types/post'
import { Link } from 'react-router-dom'

interface PostCardProps {
  post: Post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
  return (
    <Link to={`/blog/${post.slug}`} className="no-underline">
      <div className="border rounded-xl shadow-sm overflow-hidden hover:opacity-95 transition-opacity h-[500px] flex flex-col">
        <div className="w-full h-[300px]">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2">
          <h3
            className="text-xl leading-[1.75rem] font-bold text-[var(--gray-dark)]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h3>
          <p
            className="text-[var(--gray-mid)] text-sm leading-[1.25rem] min-h-[3.75rem]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt || ''}
          </p>
          <p className="mt-auto text-sm">{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
