---
title: "My Tech Stack"
date: 2025-02-07 11:59:00 -0500
author_id: derrick_dryer
categories: [Projects, Homelab]
tags:
    - self-hosting
    - homelab
description: "A look into what I’m currently hosting in my home lab!"
media_subpath: /assets/my-tech-stack/
image:
  path: /technology.jpg
  alt: https://pixabay.com/illustrations/technology-icons-internet-symbol-3406895/
toc: true
comments: true
---

## Self-Hosting: Why Bother?

There are plenty of reasons to self-host—avoiding subscription fees, maintaining control over your data, or just having fun experimenting with different applications. Personally, I enjoy spinning up servers just to try out random applications I’ll probably never use.  

Recently, I attempted to self-host [Wazuh](https://wazuh.com/), an open-source security platform. Unfortunately, I ran into issues between the keyboard and chair (yes, *user error*), so that project didn’t quite pan out. That said, I still rely on some cloud services, as my home infrastructure isn't robust enough to handle everything.  

A major limitation? **Networking.** Most of the switches in my parents’ house are unmanaged and daisy-chained together—an absolute nightmare. On top of that, they’re still using a **2016 Netgear modem/router** that struggles to keep up. I’ve been trying to convince them to upgrade, but that’s a battle for another day. Networking is a whole topic on its own, and I’ll cover that another time.

---

## My Tech Stack: What’s Running?

![Tropic Thunder Meme](/im-a-dude.gif){: width="430" height="180" .w-50 .right}  
My current tech stack runs on a **Proxmox cluster**—or rather, a Proxmox *duo* (since calling two nodes a "cluster" feels wrong). Clusters generally work better with odd numbers, but here we are.  

Both nodes run nearly identical setups:
- A single **Ubuntu VM** on each node.
- Each VM runs **Docker** to manage applications.
- Yes, it’s **host-ception**—a host running a host running a host running containers.

![Tech Stack](/tech-stack.png){: width="502" height="621"}  
_A diagram of my tech stack, made in Draw.io._

### Core Components:
1. **Pi-hole + Recursive DNS Resolver:**  
   - Each node runs Pi-hole, syncing via `rsync`.  
   - I forked [this script](pihole-rsync-keyfile) to use an identity file for secure SSH-based syncing.  
   - This setup ensures all local hosts can be resolved via A records.

2. **Nginx Reverse Proxy + Cloudflare DNS:**  
   - My domains are managed through **Cloudflare** (their support is a horror story, but their services are top-notch).  
   - I use **DNS challenges** to generate local SSL certificates, eliminating annoying HTTPS warnings.  
   - Having proper domain names makes accessing services seamless.

These two services are the backbone of my home lab. I’d love to make them **highly available**, but hardware limitations prevent that—for now.

---

## Expanding the Stack: Future Plans

I recently set up a **three-node Raspberry Pi 5 cluster** running K3s. I’m not fully confident in my Kubernetes skills yet, but I plan to migrate some services there over time.  

Other notable services I’m running:  
- A **MariaDB database** for my senior capstone project.  
- A **WireGuard LXC** for remote home network access.  
- My **capstone project**, which auto-updates via GitHub CI/CD & Watchtower.

I'd love to throw everything under the sun into my homelab, but resource allocation is tricky. Each node has **32GB of RAM**, and while my total storage is **2TB**, I’m only using ~1.1TB. Eventually, I’ll implement a better resource management system.

---

## Long-Term Goals

In the future, I plan to:  
✅ Run **highly available applications** (likely on better hardware).  
✅ Upgrade to **modern, power-efficient servers**—my current **HP EliteDesks** claim 35W TDP, but I’m skeptical.  
✅ Get a powerful server for **running LLMs** (*because why not?*).  

My **Raspberry Pi 5s** are surprisingly efficient—quad-core, 8GB RAM, and only 15W power draw. However, they can’t run **Proxmox**, which is a limitation for my use case.

---

## Where to Find Self-Hosted Applications

If you’re looking for cool self-hosted apps, check out **[Awesome-Selfhosted](https://awesome-selfhosted.net/)**. It’s a massive, well-maintained list of free and non-free software for homelabs.  

I also follow **homelab YouTubers**—but fair warning, their setups are dangerously inspiring. One minute you’re watching a video, the next you’re impulse-buying rack-mounted servers on eBay.

---

Thanks for reading! I’ll keep sharing updates on what I’m building and learning in my homelab. Stay tuned!
