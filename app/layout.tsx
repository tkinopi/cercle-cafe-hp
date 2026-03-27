import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '小さなカフェ セルクル | 名古屋・大曽根',
  description: '名古屋市北区・大曽根にある黄色いかわいいカフェ。ガレット・クレープ・こだわりの手づくりスイーツをご用意しています。ワンちゃんも大歓迎。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
