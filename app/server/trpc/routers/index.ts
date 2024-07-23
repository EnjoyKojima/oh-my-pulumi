import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { userInfo } from 'os'

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
  user: publicProcedure.query(({ ctx }) => {
    const users = ctx.prisma.user.findMany()
    return users
  }),
})

// export type definition of API
export type AppRouter = typeof appRouter
