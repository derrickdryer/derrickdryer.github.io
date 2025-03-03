---
title: "Homelab Upgrades"
date: 2025-03-03 14:00:00 -0500
modified: 2025-09-19 9:40:00 -0500
author_id: derrick_dryer
categories: [Projects, Homelab]
tags: 
  - homelab
  - networking
  - upgrades
description: "Homelab update"
media_subpath: /assets/homelab-upgrades/
toc: true
comments: true
---

It's been a while since my last post, and in that time, my homelab has seen some significant upgrades. Some of these were new purchases, while others were items that had been gathering dust on the shelf. Now, they're all fully implemented and fueling my thirst for knowledge and skills.

## What's New

Let's start with the most exciting addition: the [UniFi Dream Router 7](https://store.ui.com/us/en/products/udr7). It's a bit overkill, but it's an amazing investment in my opinion. It features 4 RJ45 ports, all supporting 2.5GbE, with one port capable of being configured as a secondary WAN port. Additionally, it has an SFP+ port supporting 10GbE in LAN or WAN mode, which is more than enough to handle anything the future of the internet might throw at us. I installed the UDR7 at my parents' house to upgrade their network and ensure they have a reliable internet connection. This router replaced an old Netgear router from 2016, which was due for an upgrade. I'm keeping the old router as a backup, just in case.

![Raspberry Pi 5 Cluster](/unifi_udr7.jpg){: width="1134" height="2016" }

### What I Love About UniFi

There are many different router software options available today, such as OpenWRT and Pfsense, among others. While I've tinkered with some of these, I've found the UniFi suite of hardware and software to offer a ton of enterprise features at a reasonable price. UniFi isn't perfect and has its drawbacks, but I've been enjoying it so far. One feature I'm particularly excited about is "Site Magic," which allows you to easily create an intranet. I also appreciate the easy-to-use DNS functionality within their software package, although I'm waiting for them to complete CNAME support before diving deeper into it. UniFi's biggest strength, in my opinion, is their WiFi capabilities and the constant stream of new hardware they release. The topology tab, which shows what is connected to what, is also a super cool feature, even if it's not perfect.

![Topology](/topology.png)
_Ignore the item not connected to anything_

## Other Changes

In addition to the new router, I moved some items around and added my L3 switch, which had been sitting on the shelf for a while. This switch has PoE to power other devices, like the small 2.5GbE PoE-powered switches I recently acquired. This helps reduce the number of power cables and keeps things tidy. I also rearranged everything to improve airflow.

![Homelab](/lab.jpg)

Overall, this is just a quick update since I haven't posted in a while. I also have a bit of writer's block towards the end here. Thanks for reading!