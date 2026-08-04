---
title: Ekko
description: An open-source framework for deploying realtime infrastructure with in-transit message processing.
date: 2021-06-01
link: https://ekko-realtime.com/
repo: https://github.com/ekko-realtime
pinned: true
---

Ekko is an open-source framework that provides realtime infrastructure and
in-transit message processing for web applications. It lets developers deploy
scalable realtime infrastructure to AWS with a CLI tool, and process messages
*as they move through the system* using modular serverless functions.

## What it does

- Many-to-many publish/subscribe over WebSockets
- Ekko Functions: serverless, reusable message transformations applied in transit
- Message routing based on channel–function associations
- Automatic horizontal scaling, with the cloud infrastructure complexity
  abstracted away behind automated deployment

## Learn more

The full engineering story — the problem space, architecture, and trade-offs —
is in the [case study](https://ekko-realtime.com/). The source is on
[GitHub](https://github.com/ekko-realtime). Built with Alex Strick van
Linschoten, Dorey Miller, and Drew Holbrook.
