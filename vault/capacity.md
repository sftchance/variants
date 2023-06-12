tag: thoughts
title: Capacity Based Pricing
image: https://www.worldatlas.com/r/w768/upload/df/d1/ef/shutterstock-88536622.jpg
author: nftchance
created: 01/01/2021
===

> This paper was spawned by the need for usage responsive pricing in the [[Hyper MetricsDAO]] model.

In the beginning of the creation of the Labor Market, it was originally planned that $METRIC would not be used for anything real. Instead, with the introduction of `v2` the token became bound to the operational capacity of the protocol.

While that can be achieved naively, there is a far more interesting implementation that is using multiple activity curves in combination with a [TWAP model](https://blog.quantinsti.com/twap/).

Unfortunately, Solidity does not have native support for complex numbers and adding support is not exactly straightforward. This brought the research into [[Discerete Cosine Transform]] which aimed to connect a few of the dots and re-discover a new/better way to handle an insane amount of data.

The aim is to have multiple operational curves for:

- amount of work requests
- amount of service providers
- amount of quality enforcers

A critical nuance the ability of using a transform here is that the interval of writing must be constant otherwise everything falls apart rapidly.
