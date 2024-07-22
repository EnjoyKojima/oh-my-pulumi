import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ユーザーの作成
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
      posts: {
        create: [
          {
            title: 'はじめての投稿',
            content: 'これは私の最初の投稿です。',
            published: true,
          },
          {
            title: '2回目の投稿',
            content: 'ブログを書くのが楽しくなってきました。',
            published: true,
          },
        ],
      },
      profile: {
        create: {
          bio: 'こんにちは、私はAliceです。技術と旅行が大好きです。',
        },
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'データベースについて',
            content: 'データベースは面白いですね。',
            published: true,
          },
          {
            title: 'プログラミング言語の選び方',
            content: '目的に応じて適切な言語を選ぶことが重要です。',
            published: false,
          },
        ],
      },
      profile: {
        create: {
          bio: 'Bobです。プログラミングとゲームが趣味です。',
        },
      },
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      name: 'Charlie',
      posts: {
        create: [
          {
            title: 'AIの未来',
            content: 'AIは私たちの生活をどのように変えるでしょうか？',
            published: true,
          },
          {
            title: 'サステナビリティとテクノロジー',
            content: '技術革新は持続可能な社会の実現にどう貢献できるか。',
            published: true,
          },
          {
            title: '未公開の記事',
            content: 'この記事はまだ編集中です。',
            published: false,
          },
        ],
      },
    },
  })

  console.log({ user1, user2, user3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

