import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<atom:link href="${context.site}/rss.xml" rel="self" type="application/rss+xml" />`,
  });
}
