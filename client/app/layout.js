import { Inter } from "next/font/google";
import "./globals.css";
import SimpleHeader from "@/components/simple-header";
// import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IntelliCollab - AI-Powered Collaboration Platform",
  description: "Transform your team collaboration with AI-powered tools, real-time communication, and intelligent project management. The future of collaborative work is here.",
  keywords: "collaboration, AI, project management, team communication, workspace, productivity",
  authors: [{ name: "IntelliCollab Team" }],
  creator: "IntelliCollab",
  publisher: "IntelliCollab",
  robots: "index, follow",
  openGraph: {
    title: "IntelliCollab - AI-Powered Collaboration Platform",
    description: "Transform your team collaboration with AI-powered tools, real-time communication, and intelligent project management.",
    type: "website",
    locale: "en_US",
    siteName: "IntelliCollab",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliCollab - AI-Powered Collaboration Platform",
    description: "Transform your team collaboration with AI-powered tools, real-time communication, and intelligent project management.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
      </head>
      <body className={`${inter.className} dark`}>
        <SimpleHeader />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />

        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>Built with 💝 by the IntelliCollab Team</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
