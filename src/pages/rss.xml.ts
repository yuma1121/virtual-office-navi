import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'バーチャルオフィスおすすめ比較ナビ',
    description:
      'バーチャルオフィスの料金・サービスを徹底比較。実体験ベースの口コミ・レビュー情報を発信しています。',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: '<language>ja</language>',
  });
}
