---
layout: post
title: "Campus Advantage Server Fix"
type: portfolio
description: "Improved client site uptime from 94% to 99.9% while reducing costs by $50k/y."
keywords: "marketing technology, change management"
image: "/assets/logo_campusadv.webp"
date: 2018-10-15
author: "Robert Allen"
permalink: /portfolio/campus-adv-server/
---


Company had chronic downtime issues managing over 100 websites for over 70 clients on a single shared server. We were using WPEngine, and when our server failed our monitoring tools would also go down. 

I worked backwards to approximate our server specs, then found a private hosting solution with over double the performance for $50,000 less per year. The new solution used an early version of a Kubernetes cluster hosted by DigitalOcean. DO allowed us to use more robust monitoring software, automatic load balancing, and easier scaling. 

Prior to the move, I noticed the databases were severely overbloated. Turns out the team process had been to clone the newest site then make alterations for the new client. This meant brand new installs would suffer performance issues due to enormous MySQL databases storing the entire history of every website they had ever made. Clearing out the databases was a slow process, but improved site load times by 15% per site. The change was less significant for sites migrated to DigitalOcean, so the database project was deprioritized. I instituted a new step in the site cloning process to prevent the db bloat issue from recurring. 



### What can we do for you?