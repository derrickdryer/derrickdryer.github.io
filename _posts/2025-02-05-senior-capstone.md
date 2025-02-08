---
title:  "Senior Capstone"
date:   2025-02-05 12:31:00 -0500
author_id: derrick_dryer
categories: [Projects, University]
tags:
    - node.js
    - npm
    - docker
    - CI/CD
    - mariadb
description: "About my senior capstone project"
media_subpath: /assets/senior-capstone/
image:
  path: /programming.png
  alt: https://pixabay.com/illustrations/computer-computer-code-programming-1836330/
toc: true
comments: true
---

## What is a Senior Capstone?

For those unfamiliar with the term, a senior capstone is a major culminating project that students undertake to demonstrate the knowledge and skills they've acquired throughout their academic program. It’s a massive undertaking that, at least for my major and university, spans two semesters.

My major, **Computer Information Systems (CIS)**, leans heavily toward the **Systems Analyst** side of software development. This means we focus a lot on documentation before implementation, and we follow the **Agile methodology** throughout the project.

## About Our Project

My group, **"Byte Me,"** consists of three members, including myself. We decided to develop a **real estate website**—similar to those used by rental companies—where users can browse available properties, make payments, and manage their accounts.

One of my teammate’s parents is planning to rent out properties, so we decided to build this with the *hope* that it might be implemented. However, realistically, we lack the time, experience, and long-term commitment needed for post-launch maintenance. Regardless, we are treating this project as if it will go live.

## Progress So Far

As of today, we have completed all of our **documentation** and have made significant progress on **development**. However, it’s likely that we’ll need to revisit and revise the documentation to align with our actual implementation.

### What We've Developed

So far, we have:

- **Database:** A **MariaDB** database, hosted locally on my homelab.
- **Backend:** A **Node.js** API with endpoints for querying, inserting, updating, and deleting data.

## CI/CD: Continuous Integration & Deployment


![CI/CD Workflow Diagram](/ci-cd.png)
_Fig-1. CI/CD Workflow automatically triggered on updates to the master branch._


Deployment is **by far my favorite part** of this project. It took me several days of testing to get everything working smoothly. Now, the entire workflow—from pushing an update to deployment—is **fully automated**.

### Pros & Cons of Our CI/CD Setup

✅ **Pros:**  
- Every update is automatically built into a **Docker image** and deployed.  
- We can see real-time progress and test updates quickly.  

❌ **Cons:**  
- If a buggy update is pushed, it **breaks the entire system** since it becomes part of the production Docker image.  
- We lack a **proper workflow** with **pull requests (PRs)** and feature branches. This would prevent breaking changes but feels like too much overhead for this project.  

If we had more experience, PRs could be automatically tested and merged, but for now, our current approach allows us to **rapidly iterate** and **see progress in real-time**. The first time the **Docker image built correctly and deployed automatically,** I felt like a kid in a candy store!

## Still a Lot to Code

We are **nowhere near done**. Our remaining tasks include:

- Completing nearly **all front-end pages**  
- Adding **data validation**  
- Fixing **CSS issues**  
- Improving **security measures**  

This process is **long and exhausting**, especially since I’m not particularly fond of coding. I don’t *hate* it, but I’m more of a **hardware and system administration** person. While coding is an essential IT skill (especially scripting in **Bash** and **PowerShell**), building an entire application from scratch is **not my favorite thing**.

## What I’ve Learned So Far

- **Coding is both frustrating and rewarding.** When things work, it feels amazing.  
- **Docker is surprisingly simple**—especially with GitHub Actions automating the build process.  
- **Deploying on my homelab is the easiest part.** A simple `docker-compose.yaml` file is all I need.  

I’m still learning **Traefik** for SSL management, but for now, I’m using it to get rid of those annoying certificate warnings in my local environment. **Watchtower** ensures our container is always up-to-date whenever we push new changes.

## What’s Next?

Our project runs until **late April**, and we have a lot to finish before presenting it to our university and sponsors. I’ll be posting updates whenever possible—stay tuned for more milestones!

Feel free to follow our project on github: [derrickdryer/senior-capstone](https://github.com/derrickdryer/senior-capstone)

Thanks for reading!
