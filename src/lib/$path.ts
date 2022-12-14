export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "blog": {
    _cid: (cid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[cid]' as const, query: { cid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash })
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "portfolio": {
    _cid: (cid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/portfolio/[cid]' as const, query: { cid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/portfolio' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
