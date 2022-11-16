# rxjs

# What is Reactive Programing?

1. It is an asynchronous programing modal/pattern concerned with data stream and propagation of chamge.
2. It means that mean a data flow is emitted by one component the chnage will be propagated to the other component by reactive programing library(RxJS). The propagation of chnage will continue untill it reaches the final receiver.

# What is RxJs?

1. RxJs(Reactive Expresion of JavaScript) is a library for reactive programming using Observables, that make it easier to compose asynchronous or calln=back code.

**It consists of 3 things**

1. Observable
2. Satellite Data Types - Observers, Schedulers, Subjects
3. Operators - map, filter etc.

# Observable

1. It is a data stream or event, and emit data over a period of time.
2. It need to be subscribed else it won't do anything on it's own.
3. An Observer has 3 methods - next, complete & error.

# Subscriber

It will listen to the Observables for data change/updates.

# Example of Observable with Subscriber

Suppose there is a youtube channel and on every Saturday there is video posted so the channel has a stream of videos as it act like an **Observable**.
When we subscribe the channel we get notification we a new video is uploaded, so we act as **Subscriber**.

# Installation of Rxjs

_npm install rxjs_

or by cdn
_https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js_

# Operators

1. RxJs provides a lot of useful opeartors which helps us to write clean code & reduce a lot of effortin writing custom logic.
2. An operator is a pure function.

## What is a pure function?

A function which return the same value when passed with the same input vlaues and has no side effects.

Example:- 10+20 = 30 (when adding 10 with 20 the output will be 30 always).
