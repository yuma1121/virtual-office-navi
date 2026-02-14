import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about/', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/disclaimer/', priority: '0.3', changefreq: 'yearly' },
  { path: '/contact/', priority: '0.5', changefreq: 'monthly' },
  { path: '/category/comparison/', priority: '0.7', changefreq: 'weekly' },
  { path: '/category/review/', priority: '0.7', changefreq: 'weekly' },
  { path: '/category/area/', priority: '0.7', changefreq: 'weekly' },
  { path: '/category/howto/', priority: '0.7', changefreq: 'weekly' },
  { path: '/category/concern/', priority: '0.7', changefreq: 'weekly' },
];

export async function GET(context: APIContext) {
  const site = context.site!.href.replace(/\/$/, '');
  const posts = await getCollection('blog');

  const urls = staticPages.map(
    (page) => `  <url>
    <loc>${site}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  );

  const blogUrls = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const lastmod = (post.data.updatedDate || post.data.pubDate).toISOString().split('T')[0];
      return `  <url>
    <loc>${site}/blog/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls, ...blogUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
