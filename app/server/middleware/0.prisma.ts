import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
  }
}

export default eventHandler((event) => {
  if (!prisma) {
    console.log('prismaを初期化します')
    prisma = new PrismaClient()
  } else {
    console.log('prismaを再利用します')
  }
  event.context.prisma = prisma
})