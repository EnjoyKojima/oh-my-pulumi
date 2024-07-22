export default defineNuxtRouteMiddleware((to, from) => {
  // ユーザーの認証状態を確認する仮のロジック
  const isAuthenticated = false // 実際の認証ロジックに置き換える

  // ログインページへのアクセスは常に許可
  if (to.path === '/login') {
    return
  }

  // 認証されていない場合、ログインページにリダイレクト
  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})