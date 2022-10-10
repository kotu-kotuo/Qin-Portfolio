export const pagesPath = {
  "blog": {
    _cid: (cid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[cid]' as const, query: { cid }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
