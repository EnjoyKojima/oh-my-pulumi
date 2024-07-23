import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

// 0.というプレフィックスは、ファイルの読み込み順序を制御するために使用されることがあります。
// 例えば、ミドルウェアが特定の順序で実行される必要がある場合、数字で順序を指定します。

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export function createContext(_event: H3Event) {
  /**
   * Add any trpc-request context here. E.g., you could add `prisma` like this (if you've added it via sidebase):
   * ```ts
   * return { prisma: _event.context.prisma }
   * ```
   */
  return { prisma: _event.context.prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>;
