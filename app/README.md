# Kojima Minimal Stack

- Nuxt.js
- tRPC
- Prisma
- Tailwind CSS
- Shadcn

## tRPC

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