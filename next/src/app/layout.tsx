import Header from "@/app/layout/Header";
import { Suspense } from "react";

import CustomLoading from "./CustomLoading";

import './globals.css'

export const metadata = {
  title: 'Frontend Mentor | Space tourism website',
  description: 'Frontend Mentor | Space tourism website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.png" />

      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
            rel="stylesheet" />

      <title>{metadata.title}</title>
    </head>
    <body>

    <Header />

    <Suspense fallback={<CustomLoading />}>
      {children}
    </Suspense>
    </body>
    </html>
  )
}
