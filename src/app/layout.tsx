"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { createConnectTransport } from "@connectrpc/connect-web";
import { TransportProvider } from "@connectrpc/connect-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] })

const finalTransport = createConnectTransport({
  baseUrl: "http://localhost:3001",
  useHttpGet: true,
})

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransportProvider transport={finalTransport}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </TransportProvider>
      </body>
    </html>
  )
}

