import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './../styles/globals.css'
import './../styles/highlight.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github-dark.css';
import { I18nProvider } from '@/lib/i18n/context';

// Register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

// Configure highlight.js
hljs.configure({
  ignoreUnescapedHTML: true
});

export const metadata: Metadata = {
  title: 'JS Array Methods',
  description: 'JS Array Methods By DevTwitter',
  keywords: ['js', 'array', 'methods', 'devtwitter'],
  authors: [{ name: 'Milad Niroee', url: 'https://github.com/miladniroee' }],
  creator: 'DevTwitter',
  publisher: 'DevTwitter',
  openGraph: {
    title: 'JS Array Methods',
    description: 'JS Array Methods By DevTwitter',
    authors: [{ name: 'Milad Niroee', url: 'https://github.com/miladniroee' }],
    url: 'https://js-array-methods-theta.vercel.app/',
    siteName: 'JS Array Methods',
    images: [
      { url: 'icon.png' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased" style={{ minHeight: '100vh' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
