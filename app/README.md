# Kojima Minimal Stack

- Nuxt.js
- [tRPC](https://trpc.io/)
- Prisma
- Tailwind CSS
- Shadcn

## tRPC

- [tRPC](https://trpc.io/)
- [tRPC Nuxt](https://trpc-nuxt.vercel.app/)

```bash
.
├── server
│   ├── api
│   │   └── trpc
│   │       └── [trpc].ts  # <-- tRPC HTTP handler
│   │   └── [..]
│   ├── trpc
│   │   ├── routers
│   │   │   ├── index.ts  # <-- main app router
│   │   │   ├── todo.ts  # <-- sub routers
│   │   │   └── [..]
│   │   ├── context.ts   # <-- create app context
│   │   └── trpc.ts      # <-- procedure helpers
├── plugins
│   ├── client.ts  # <-- tRPC client plugin
└── [..]
```