import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// `npx tsx  test.ts`で実行できる

async function main() {
  try {
    // すべてのユーザーを取得
    const allUsers = await prisma.user.findMany()
    console.log('すべてのユーザー:', allUsers)

    // 特定のユーザーを取得
    const user = await prisma.user.findUnique({
      where: { email: 'alice@example.com' },
      include: { posts: true, profile: true }
    })
    console.log('Aliceのデータ:', user)

    // 公開された投稿を取得
    const publishedPosts = await prisma.post.findMany({
      where: { published: true },
      include: { author: { include: { profile: true } } }
    })
    console.log('公開された投稿:', publishedPosts)

  } catch (error) {
    console.error('エラーが発生しました:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()