
import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const title = "Kashi Das Mongre | BBA Student & Entrepreneur";
const description = "The official portfolio of Kashi Das Mongre, a BBA Student and Aspiring Entrepreneur specializing in business technology consulting and digital solutions for small businesses.";
const url = "https://kashidasmongre.com"; // Replace with your actual domain when you deploy

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["Kashi Das Mongre", "kashidasmongre", "portfolio", "BBA student", "entrepreneur", "business technology consultant", "digital solutions"],
  openGraph: {
    title: title,
    description: description,
    type: "website",
    url: url,
    images: [
      {
        url: "https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400", // Using your profile picture for social sharing
        width: 800,
        height: 800,
        alt: "Kashi Das Mongre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400"],
  },
  metadataBase: new URL(url),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Kashi Das Mongre",
      "url": url,
      "image": "https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400",
      "jobTitle": "BBA Student & Entrepreneur",
      "sameAs": [
        "https://www.linkedin.com/in/kashi-das-mongre-9495b121a",
        "https://x.com/KashiDasMongre",
        "https://github.com/kashidasmongre"
      ],
      "knowsAbout": ["Business Technology Consulting", "Digital Solutions", "Web Development", "Entrepreneurship"]
    },
    {
      "@type": "WebSite",
      "url": url,
      "name": "Kashi Das Mongre's Portfolio",
      "publisher": {
        "@type": "Person",
        "name": "Kashi Das Mongre"
      },
       "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.google.com/search?q=site:{url}+%7Bsearch_term_string%7D"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
