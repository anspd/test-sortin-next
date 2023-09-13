import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'sortin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}

        </main>

      </body>
    </html>
  )
}
