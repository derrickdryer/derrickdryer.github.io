---
title: "First Post!"
description: "After long trials and errors, here I am!"
pubDate: "Sept 8 2024"
heroImage:
  src: "/astro.jpg"
  alt: "Astro Placeholder"
tags:
  [
    "first",
    "blog",
    "portfolio",
    "astro",
    "cloudflare",
    "github",
    "github pages",
  ]
order: 1
---

First off, thank you for visiting my blog! I hope you'll stick around and follow my journey as I continue growing in the IT field, diving deeper into my passion for self-hosting and learning along the way.

## Building the Blog

I want to be transparent: I didn’t build this blog entirely from scratch. I used the Astro framework and a premade theme called Codey. You can find links to these technologies on the homepage. While it might seem like a simple, one-click setup, the reality was a bit more complicated.

Whether it was user error or something else, I’m still not entirely sure. What I do know is that when I first tried to deploy the site using Cloudflare Pages, I encountered every error imaginable. Just the other day, I was up until 3 a.m. troubleshooting issues that just wouldn’t resolve. One major culprit turned out to be a package that was supposed to act as an adapter for Cloudflare.

I’m still not 100% sure how everything works, but I noticed that features like the RSS feed wouldn’t function when the site was deployed via Cloudflare. After much internal debate, I decided to switch to GitHub Pages—and it was a game-changer. Deployment was 100x easier. Since I was already using a GitHub repository, pointing my domain to `<username>.github.io` was a no-brainer. Now, the blog is up and running with a functional RSS feed!

## Why Astro?

If it’s not already clear, I’m not a software engineer. I know enough coding to get by, but I prefer working in areas like DevOps, troubleshooting, Docker, and networking. For someone like me, Astro was an obvious choice. It offers great community support, easy-to-configure themes, and a range of deployment options (some better than others).

### Why You Should Build One Too

It’s simple and free! If you already have a GitHub account—which you probably do if you’re involved in tech—you can follow Astro’s deployment guide to set up a site on GitHub Pages. While I wouldn’t recommend using it for an e-commerce platform, it’s perfect for blogs, portfolios, resume sites, or any other static project.

There are likely ways to integrate a database with a GitHub Pages site, but I haven’t explored that much yet. If you’re building something more specialized, you’ll probably find better options with platforms like AWS or self-hosting.

## Thank You

Once again, thank you for reading and taking the time to engage with my thoughts and experiences. This is a short first blog post, but it’s been 36 hours of smashing my keyboard to get everything working. Stay tuned for more, as I dive into projects like my senior capstone, self-hosting with Docker containers, server management, and much more.
