---
title: "Learning Docker"
description: "Picking up a new technology, language or really anything can be hard, most of the time I have found I'm just not learning in the best way for me. In this post I talk about my current journey in learning docker."
pubDate: "Sept 13 2024"
heroImage:
  src: "/docker.jpg"
  alt: "Docker"
tags: ["docker", "Nigel Poulton", "learning", "Docker Deep Dive"]
order: 1
---

Picking up a new technology, language or really anything can be hard, most of the time I have found I'm just not learning in the best way for me. In this post I talk about my current journey in learning docker.

## What is Docker?

Docker is a powerful tool that helps developers build, run, share, and test applications anywhere! It works by running applications in containers, which are a form of lightweight virtualization. Unlike virtual machines, which require their own dedicated hardware and operating systems, containers share the host system's resources and kernel, only installing the essential components they need to function.

For instance, when you spin up a Node.js Docker container, it installs only Node.js, npm, and gives you access to /bin/bash for interaction. It doesn’t include extra utilities like network tools, Git, or other packages that you might find in a typical OS or virtual machine. This efficiency allows you to run more applications on the same hardware.

## Why I Started to Learn Docker

For the longest time, I didn’t really know what Docker was. I used to spin up virtual machines for everything, usually for game servers where my friends and I would play titles like Arma 3 and Minecraft. However, as subscription services became more prevalent, I realized how much they were eating into my budget. I was paying for services I rarely used. For instance, I was subscribed to Google Cloud for 1 TB of storage, while I was barely using 10 GB. Why I kept paying for it for over five years? Honestly, I’m not sure.

That’s when I started exploring self-hosting and virtualization technologies. Like many, I began with VirtualBox and eventually moved on to VMware's Workstation software, a pioneer in virtualization. (VMware was recently acquired by Broadcom, and getting access to Workstation has become such a hassle that I wouldn’t recommend it anymore.)

Later, I wanted to use dedicated hardware to learn more about virtual machines, so I repurposed my first custom-built PC from 2015. After a few upgrades, I had a decent machine for running VMs. I used Proxmox to manage them, which is an excellent operating system in its own right (but I’ll dive into that another time). However, there was a major problem with my setup: it was power-hungry and inefficient due to the old gaming hardware.

So, I started looking for alternatives and discovered the Raspberry Pi 5. I love Raspberry Pis! They’re incredibly power-efficient and surprisingly powerful for single-board computers. There may be better options out there, but I trust the recommendations of tech YouTubers like [Jeff Geerling](https://www.youtube.com/@JeffGeerling), [ServeTheHome](https://www.youtube.com/@ServeTheHomeVideo), [Techno Tim](https://www.youtube.com/@TechnoTim), [NetworkChuck](https://www.youtube.com/@NetworkChuck) & [Christian Lempa](https://www.youtube.com/@christianlempa). Many of them advocate for the Raspberry Pi, and I found it to be the best option to start with.

However, the Raspberry Pi 5 is too small to run traditional virtual machines. This limitation led me straight to Docker. With Docker, I can split the Pi's processing power and run multiple applications, squeezing every bit of performance out of it. Initially, I was just running containers without fully understanding how they worked. But to really master Docker, I knew I had to dive deeper and learn the fundamentals.

## How I’m Learning Docker

There are countless ways to learn Docker, from YouTube videos to the official documentation. I tried both, and while they are excellent resources, I struggled to grasp some of the concepts. So, I turned to books to see if I could find something more digestible. That’s when I discovered [Nigel Poulton's _Docker Deep Dive - Zero to Docker in a single book_, 2024 Edition](https://a.co/d/7LYDulG).

This book is incredible! Poulton writes in a way that feels like he’s right there, guiding you step-by-step through Docker. It’s conversational, approachable, and packed with practical exercises that you can follow along with in each chapter. I’m about halfway through, and I’ve already learned so much that I’ve applied to my home-lab and various projects. If you’re like me and need that extra push to fully understand Docker, I highly recommend this book.

## Final Thoughts

You don’t always need to buy a book to learn new technology—there are plenty of free resources like official documentation and YouTube. However, I find books easier to follow, and I want to stress that I’m not advertising this book—it has over 900 reviews and more than 4.5 stars, so it clearly doesn’t need my help! That said, Docker is an amazing tool, whether you’re a developer, into self-hosting, or just someone who loves learning new technology. I hope this post has given you some insights and resources to start your own Docker journey.
