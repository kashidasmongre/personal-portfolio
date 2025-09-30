
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

const title = "Kashidas Mongre - Web Developer & Designer Portfolio | Bhopal";
const description = "Kashidas Mongre - Professional Web Developer from Bhopal. Specialized in React, JavaScript, and modern web development. View my portfolio projects and contact for web development work.";
const url = "https://kashidasmongre.vercel.app"; 

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["Kashidas Mongre", "web developer", "portfolio", "Bhopal", "React developer", "JavaScript developer", "web designer", "freelance web developer"],
  authors: [{ name: 'Kashi Das Mongre', url: url }],
  metadataBase: new URL(url),
  openGraph: {
    title: title,
    description: description,
    type: "website",
    url: url,
    images: [
      {
        url: "https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400", 
        width: 800,
        height: 800,
        alt: "Kashi Das Mongre - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@KashiDasMongre",
    images: ["https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400"],
  },
};

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Kashidas Mongre",
  "jobTitle": "Web Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "India"
  },
  "url": url,
  "image": "https://ik.imagekit.io/mfj3864fw/Gemini_Generated_Image_q8hadbq8hadbq8ha.png?updatedAt=1758811335400",
  "sameAs": [
    "https://www.linkedin.com/in/kashi-das-mongre-9495b121a",
    "https://x.com/KashiDasMongre",
    "https://github.com/kashidasmongre"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Web Developer",
    "skills": "Web Development, JavaScript, React, Next.js, HTML, CSS, Business Technology Consulting, Digital Solutions, SEO Optimization"
  }
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
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
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
