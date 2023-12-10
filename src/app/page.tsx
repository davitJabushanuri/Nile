'use client'
import { useLogger } from 'next-axiom'

export default function Home() {
  const log = useLogger()
  log.info('Hello, world!')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home
    </main>
  )
}
