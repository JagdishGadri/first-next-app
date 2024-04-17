## Abhishek Chandarana Session:

![alt text](image-52.png)
![alt text](<Screenshot from 2024-04-10 17-28-00.png>)
![alt text](<Screenshot from 2024-04-10 17-57-36.png>)

# Codevolution Notes

[Routing Convention](#routing-convention)
[Nested dynamic routes](#nested-dynamic-routes)
[Catch-All-1](#catch-all-1)
[Catch-All-2](#catch-all-2)
[Catch-All-2-Output](#catch-all-2-output)
[Not Found](#not-found)
[Private Folder](#private-folder)
[Private Folder 1](#private-folder-1)
[Route Group](#route-group)
[Layout](#layout)
[Route Group Layout](#route-group-layout)
[MetaData](#metadata)
[Configuring MetaData](#configuring-metadata)
[title Metadata](#title-metadata)
[Template](#template)
[Layout and Template](#layout-and-template)
[Loading File](#loading-file)
[Error](#error)
[Hierarchy of Special files in a given folder](#hierarchy-of-special-files-in-a-given-folder)
[Handling errors in nested routes](#handling-errors-in-nested-routes)
[Edge case in Error For Layout](#edge-case-in-error-for-layout)
[Parallel routes](#parallel-routes)
[Parallel routes 1](#parallel-routes-1)
[This normal approach](#this-normal-approach)
[With parallel slots](#with-parallel-slots)
[Parallel Routes Benefits](#parallel-routes-benefits)
[Independent route handling](#independent-route-handling)
[Slot benefit: Independent route handling](#slot-benefit-independent-route-handling)
[Slot benefit: Sub navigation](#slot-benefit-sub-navigation)
[Unmatched Routes](#unmatched-routes)
[Intercepting routes](#intercepting-routes)
[Intercepting example](#intercepting-example)
[Intercepting route convention](#intercepting-route-convention)
[First Route handler](#first-route-handler)
[Simple post](#simple-post)
[URL Query](#url-query)
[Redirect route](#redirect-route)
[Request Headers](#request-headers)
[Response Headers](#response-headers)
[2 ways to read request headers](#2-ways-to-read-request-headers)
[Cookies](#cookies)
[2 ways to Set Cookies](#2-ways-to-set-cookies)
[Caching](#caching)
[Stop Caching](#stop-caching)
[Middleware](#middleware)
[Middleware example](#middleware-example)
[Drawbacks of SSR](#drawbacks-of-ssr)
[Solution to these DrawBacks](#solution-to-these-drawbacks)
[React Server Components (RSC)](#react-server-components-rsc)
[RSC Key Takeaways](#rsc-key-takeaways)
[RSC Loading Sequence](#rsc-loading-sequence)
[RSC Updating Sequence](#rsc-updating-sequence)
[Server Rendering Strategy](#server-rendering-strategy)
[Static Rendering](#static-rendering)
[Dynamic Rendering](#dynamic-rendering)
[Streaming](#streaming)

<!-- ![Nested dynamic routes](image-1.png)
![Catch-All-1](image-2.png)
![Catch-All-2](image-3.png)
![Catch-All-2-Output](image-4.png)
![Not Found](image-5.png)
![Private Folder](image-6.png)![Private Folder 1](image-7.png)
![Route Group](image-8.png)
![Layout](image-9.png) ![Layout Ex 1.1](image-10.png) ![Layout Ex 1.2](image-11.png) ![Layout Ex 1.3](image-12.png)![Layout Ex 1.4](image-13.png)
![Route Group Layout](image-14.png)
![MetaData](image-15.png) ![Configuring MetaData](image-16.png)
![title Metadata](image-17.png)
![Template](image-18.png)
![Layout and Template](image-19.png)
![Loading File](image-20.png)
![Error](image-21.png)
![Hirarcy of Special files in a given folder](image-22.png)
![Handling errors in nested routes](image-23.png)
![Edge case in Error For Layout](image-24.png)
![Parralel routes](image-25.png)
![Parallel routes 1](image-26.png)
![This normal approach](image-27.png)--> ![With parallel  slots](image-28.png)

![Parallel Routes Benefits](image-30.png)
![Independent rooute handling](image-31.png)
![slot benifit: Independent route handling](image-29.png)
![slot benefit: Sub navigation](image-32.png)
![Unmatched Routes](image-33.png)
![Intercepting routes](image-34.png)
![Intercepting example](image-35.png)
![Intercepting route convention](image-36.png)
First ROute handler: ![First ROute handler](image-37.png)
Simple post: ![alt text](image-38.png)
URL Quesry : ![alt text](image-39.png)
Redirect route: ![alt text](image-40.png)
Request Headers: ![alt text](image-41.png)
Response Headers: ![alt text](image-42.png)
2 ways to read request headers: ![alt text](image-43.png) ![alt text](image-44.png) ![alt text](image-45.png)
Cookies: ![alt text](image-46.png)
2 ways to Set Cookies: ![alt text](image-47.png) ![alt text](image-48.png)
Caching: ![alt text](image-49.png)
Stop Caching:![alt text](image-51.png) ![alt text](image-50.png)
Middleware: ![Middleware](image-53.png)
Middleware example: ![Middleware example](image-54.png)
Drawbacks of SSR: ![First Drawback](image-55.png) ![Second Drawback](image-56.png) ![Third Drawback](image-57.png)
Solution to these DrawBacks: ![Suspence SSR Architecture](image-58.png)
React Server Components: ![RSC](image-59.png)
RSC Key Takeaways![RSC Key Takeaways](image-60.png)
RSC Loading Sequence: ![RSC Loading Sequence](image-61.png)
RSC Updating Sequence![RSC Updating Sequence](image-62.png)
Server Rendering Strategy: ![Server Rendering Strategy](image-63.png)
Static Rendering :![Static Rendering](image-64.png)
Dynamic Rendering : ![Dynamic Rendering](image-65.png)
Streaming: ![Streaming](image-66.png) -->

## Routing Convention

<p>
  <img src="images/image.png" style="width: 640px">
</p>

## Nested dynamic routes

<p>
  <img src="images/image-1.png" style="width: 640px">
</p>

## Catch-All-1

<p>
  <img src="images/image-2.png" style="width: 640px">
</p>

## Catch-All-2

<p>
  <img src="images/image-3.png" style="width: 640px">
</p>

## Catch-All-2-Output

<p>
  <img src="images/image-4.png" style="width: 640px">
</p>

## Not Found

<p>
  <img src="images/image-5.png" style="width: 640px">
</p>

## Private Folder

<p>
  <img src="images/image-6.png" style="width: 640px">
</p>

## Private Folder 1

<p>
  <img src="images/image-7.png" style="width: 640px">
</p>

## Route Group

<p>
  <img src="images/image-8.png" style="width: 640px">
</p>

## Layout

<p>
  <img src="images/image-9.png" style="width: 640px">
</p>

<p>
  <img src="images/image-10.png" style="width: 640px">
</p>

<p>
  <img src="images/image-11.png" style="width: 640px">
</p>

<p>
  <img src="images/image-12.png" style="width: 640px">
</p>

<p>
  <img src="images/image-13.png" style="width: 640px">
</p>

## Route Group Layout

<p>
  <img src="images/image-14.png" style="width: 640px">
</p>

## MetaData

<p>
  <img src="images/image-15.png" style="width: 640px">
</p>

## Configuring MetaData

<p>
  <img src="images/image-16.png" style="width: 640px">
</p>

## title Metadata

<p>
  <img src="images/image-17.png" style="width: 640px">
</p>

## Template

<p>
  <img src="images/image-18.png" style="width: 640px">
</p>

## Layout and Template

<p>
  <img src="images/image-19.png" style="width: 640px">
</p>

## Loading File

<p>
  <img src="images/image-20.png" style="width: 640px">
</p>

## Error

<p>
  <img src="images/image-21.png" style="width: 640px">
</p>

## Hierarchy of Special files in a given folder

<p>
  <img src="images/image-22.png" style="width: 640px">
</p>

## Handling errors in nested routes

<p>
  <img src="images/image-23.png" style="width: 640px">
</p>

## Edge case in Error For Layout

<p>
  <img src="images/image-24.png" style="width: 640px">
</p>

## Parallel routes

<p>
  <img src="images/image-25.png" style="width: 640px">
</p>

## Parallel routes 1

<p>
  <img src="images/image-26.png" style="width: 640px">
</p>

## This normal approach

<p>
  <img src="images/image-27.png" style="width: 640px">
</p>

## With parallel slots

<p>
  <img src="images/image-28.png" style="width: 640px">
</p>

## Parallel Routes Benefits

<p>
  <img src="images/image-30.png" style="width: 640px">
</p>

## Independent route handling

<p>
  <img src="images/image-31.png" style="width: 640px">
</p>

## Slot benefit: Independent route handling

<p>
  <img src="images/image-29.png" style="width: 640px">
</p>

## Slot benefit: Sub navigation

<p>
  <img src="images/image-32.png" style="width: 640px">
</p>

## Unmatched Routes

<p>
  <img src="images/image-33.png" style="width: 640px">
</p>

## Intercepting routes

<p>
  <img src="images/image-34.png" style="width: 640px">
</p>

## Intercepting example

<p>
  <img src="images/image-35.png" style="width: 640px">
</p>

## Intercepting route convention

<p>
  <img src="images/image-36.png" style="width: 640px">
</p>

## First Route handler

<p>
  <img src="images/image-37.png" style="width: 640px">
</p>

## Simple post

<p>
  <img src="images/image-38.png" style="width: 640px">
</p>

## URL Query

<p>
  <img src="images/image-39.png" style="width: 640px">
</p>

## Redirect route

<p>
  <img src="images/image-40.png" style="width: 640px">
</p>

## Request Headers

<p>
  <img src="images/image-41.png" style="width: 640px">
</p>

## Response Headers

<p>
  <img src="images/image-42.png" style="width: 640px">
</p>

## 2 ways to read request headers

<p>
  <img src="images/image-43.png" style="width: 640px">
</p>

<p>
  <img src="images/image-44.png" style="width: 640px">
</p>

<p>
  <img src="images/image-45.png" style="width: 640px">
</p>

## Cookies

<p>
  <img src="images/image-46.png" style="width: 640px">
</p>

## 2 ways to Set Cookies

<p>
  <img src="images/image-47.png" style="width: 640px">
</p>

<p>
  <img src="images/image-48.png" style="width: 640px">
</p>

## Caching

<p>
  <img src="images/image-49.png" style="width: 640px">
</p>

## Stop Caching

<p>
  <img src="images/image-51.png" style="width: 640px">
</p>

## Middleware

<p>
  <img src="images/image-53.png" style="width: 640px">
</p>

## Middleware example

<p>
  <img src="images/image-54.png" style="width: 640px">
</p>

## Drawbacks of SSR

<p>
  <img src="images/image-55.png" style="width: 640px">
</p>

<p>
  <img src="images/image-56.png" style="width: 640px">
</p>

<p>
  <img src="images/image-57.png" style="width: 640px">
</p>

## Solution to these DrawBacks

<p>
  <img src="images/image-58.png" style="width: 640px">
</p>

## React Server Components (RSC)

<p>
  <img src="images/image-59.png" style="width: 640px">
</p>

## RSC Key Takeaways

<p>
  <img src="images/image-60.png" style="width: 640px">
</p>

## RSC Loading Sequence

<p>
  <img src="images/image-61.png" style="width: 640px">
</p>

## RSC Updating Sequence

<p>
  <img src="images/image-62.png" style="width: 640px">
</p>

## Server Rendering Strategy

<p>
  <img src="images/image-63.png" style="width: 640px">
</p>

## Static Rendering

<p>
  <img src="images/image-64.png" style="width: 640px">
</p>

## Dynamic Rendering

<p>
  <img src="images/image-65.png" style="width: 640px">
</p>

## Streaming

<p>
  <img src="images/image-66.png" style="width: 640px">
</p>
