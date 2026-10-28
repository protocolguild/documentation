export interface PostFrontmatter {
  title: string
  excerpt?: string
  coverImage?: string
  date: string
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
}


