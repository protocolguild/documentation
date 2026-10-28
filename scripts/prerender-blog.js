// Build-time prerender of per-post static HTML pages with Open Graph/Twitter tags.
// Reads dist/index.html as a template, injects per-post meta, and writes to dist/blog/<slug>/index.html.

import { promises as fs } from 'fs'
import path from 'path'
import fm from 'front-matter'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const templatePath = path.join(distDir, 'index.html')
const postsDir = path.join(projectRoot, 'posts')

function normalizeBaseUrl(raw) {
  if (!raw) return ''
  return raw.startsWith('http://') || raw.startsWith('https://')
    ? raw.replace(/\/$/, '')
    : `https://${raw.replace(/\/$/, '')}`
}

function toAbsoluteUrl(baseUrl, maybeRelative) {
  if (!maybeRelative) return ''
  if (/^https?:\/\//i.test(maybeRelative)) return maybeRelative
  if (!baseUrl) return maybeRelative // fall back to relative if base unknown
  if (maybeRelative.startsWith('/')) return `${baseUrl}${maybeRelative}`
  return `${baseUrl}/${maybeRelative}`
}

function toIsoDate(d) {
  try {
    return new Date(d).toISOString()
  } catch {
    return undefined
  }
}

function replaceOrInsertTag(
  html,
  findRegex,
  replacement,
  insertBefore = '</head>'
) {
  if (findRegex.test(html)) {
    return html.replace(findRegex, replacement)
  }
  // Insert before the closing head tag
  return html.replace(insertBefore, `${replacement}\n  ${insertBefore}`)
}

async function getTemplateHtml() {
  try {
    return await fs.readFile(templatePath, 'utf8')
  } catch (err) {
    throw new Error(
      `Template not found at ${templatePath}. Build the app first.\n${err}`
    )
  }
}

async function getPostFiles() {
  const entries = await fs.readdir(postsDir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => path.join(postsDir, e.name))
}

function pathToSlug(filePath) {
  const base = path.basename(filePath)
  return base.replace(/\.md$/, '')
}

async function readPost(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  const parsed = fm(raw)
  const attributes = parsed.attributes || {}
  const slug = pathToSlug(filePath)
  return {
    slug,
    title: attributes.title || slug,
    excerpt: attributes.excerpt || '',
    coverImage: attributes.coverImage || '',
    date: attributes.date || '',
  }
}

function injectMeta(
  templateHtml,
  { title, description, imageUrl, canonicalUrl, publishedIso }
) {
  let html = templateHtml

  // <title>
  html = replaceOrInsertTag(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `    <title>${escapeHtml(title)}</title>`
  )
  // description
  html = replaceOrInsertTag(
    html,
    /<meta\s+name=['"]description['"][^>]*>/i,
    `    <meta name="description" content="${escapeHtml(description)}" />`
  )
  // canonical
  html = replaceOrInsertTag(
    html,
    /<link\s+rel=['"]canonical['"][^>]*>/i,
    `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  )

  // Open Graph
  html = replaceOrInsertTag(
    html,
    /<meta\s+property=['"]og:type['"][^>]*>/i,
    `    <meta property="og:type" content="article" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+property=['"]og:title['"][^>]*>/i,
    `    <meta property="og:title" content="${escapeHtml(title)}" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+property=['"]og:description['"][^>]*>/i,
    `    <meta property="og:description" content="${escapeHtml(
      description
    )}" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+property=['"]og:image['"][^>]*>/i,
    `    <meta property="og:image" content="${escapeHtml(imageUrl)}" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+property=['"]og:url['"][^>]*>/i,
    `    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
  )
  if (publishedIso) {
    html = replaceOrInsertTag(
      html,
      /<meta\s+property=['"]article:published_time['"][^>]*>/i,
      `    <meta property="article:published_time" content="${escapeHtml(
        publishedIso
      )}" />`
    )
  }

  // Twitter
  html = replaceOrInsertTag(
    html,
    /<meta\s+name=['"]twitter:card['"][^>]*>/i,
    `    <meta name="twitter:card" content="summary_large_image" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+name=['"]twitter:title['"][^>]*>/i,
    `    <meta name="twitter:title" content="${escapeHtml(title)}" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+name=['"]twitter:description['"][^>]*>/i,
    `    <meta name="twitter:description" content="${escapeHtml(
      description
    )}" />`
  )
  html = replaceOrInsertTag(
    html,
    /<meta\s+name=['"]twitter:image['"][^>]*>/i,
    `    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`
  )

  return html
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function main() {
  // Allow CLI override via --site/--base/--url
  const args = process.argv.slice(2)
  let cliSiteArg = ''
  for (let i = 0; i < args.length; i += 1) {
    const a = args[i]
    if (a === '--site') {
      cliSiteArg = args[i + 1] || ''
      break
    }
    const match = a.match(/^--site=(.*)$/)
    if (match) {
      cliSiteArg = match[1]
      break
    }
  }

  const baseUrl = normalizeBaseUrl(
    cliSiteArg ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL ||
      ''
  )
  const templateHtml = await getTemplateHtml()
  const files = await getPostFiles()

  if (files.length === 0) {
    console.warn('No posts found to prerender.')
    return
  }

  for (const filePath of files) {
    const post = await readPost(filePath)
    const canonicalUrl = baseUrl
      ? `${baseUrl}/blog/${post.slug}`
      : `/blog/${post.slug}`
    const imageUrl = post.coverImage
      ? toAbsoluteUrl(baseUrl, post.coverImage)
      : toAbsoluteUrl(baseUrl, '/og-image.png')
    const description = post.excerpt || 'Read the latest from Protocol Guild.'
    const publishedIso = toIsoDate(post.date)

    const html = injectMeta(templateHtml, {
      title: `${post.title} | Protocol Guild`,
      description,
      imageUrl,
      canonicalUrl,
      publishedIso,
    })

    const outDir = path.join(distDir, 'blog', post.slug)
    const outPath = path.join(outDir, 'index.html')
    await ensureDir(outDir)
    await fs.writeFile(outPath, html, 'utf8')
    // eslint-disable-next-line no-console
    console.log(`Generated ${path.relative(projectRoot, outPath)}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
