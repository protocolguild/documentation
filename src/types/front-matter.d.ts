declare module 'front-matter' {
  export interface FrontMatterResult<T> {
    attributes: T
    body: string
  }
  export default function fm<T = any>(input: string): FrontMatterResult<T>
}


