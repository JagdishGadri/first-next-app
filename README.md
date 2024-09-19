## Snap Next App

### Description :

- Chat application developed using NextJS framework.

### TechStacks Used:

- NextJs, NextAuth, Mongoose

### Hosted App URL: https://know-snap-chat.vercel.app/

## Issues Faced During Development

- [Type error while generating build](#type-error-while-generating-build)

## Type error while generating build

### Error:

While using `next-auth@5.0.0-beta.17`, faced the following error:

./node_modules/@auth/core/lib/utils/cookie.d.ts:1:45
Type error: Module '"../../types.js"' has no exported member 'RequestInternal'.

1 | import type { CookieOption, LoggerInstance, RequestInternal } from "../../types.js";

### Resolution Steps:

1. Tried to uninstall the package and install it again.
2. Added the `type/next-auth.d.ts` file to the `files` property of `tsconfig.json` but it didn't work.
3. Went through the issue threads in NextAuth's GitHub repo.
   - Found one issue similar to mine but the solution wasn't available there, so messaged in the thread.
4. Tried to use the stable version of `next-auth` - `4.23.0`.
   - Got another type error in `openid-client` while generating the build due to `middleware.ts`.
   - Resolved that error by changing the exported function from `middleware.ts`.
   - Still, it didn't work as there were many changes required before migrating to this version.
5. Finally, moved `next-auth` version back to `5.0.0-beta.17` and added the `ignoreBuildErrors` flag as `true` in the `nextConfig.typescript` property as a workaround.
