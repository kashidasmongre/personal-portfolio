
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

const title = "Website & AI Automation Services in Bhopal | Kashidas Mongre";
const description = "Web Developer in Bhopal offering affordable website subscriptions and AI/WhatsApp automation for local businesses. Get a 7-day free trial with no setup fee.";
const url = "https://kashidasmongre.vercel.app"; 
const faviconUrl = "https://ruqtxdl2vrxue2xu.public.blob.vercel-storage.com/Gemini_Generated_Image_q163gyq163gyq163.png";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["web developer in Bhopal", "website design Bhopal", "AI automation services Bhopal", "freelance web developer Bhopal", "Next.js developer India", "React developer Bhopal", "AI chatbot developer India", "affordable website subscription India", "WhatsApp automation services Bhopal", "n8n automation expert"],
  authors: [{ name: 'Kashi Das Mongre', url: url }],
  metadataBase: new URL(url),
  icons: {
    icon: [{ url: faviconUrl, type: 'image/png' }],
    shortcut: [{ url: faviconUrl, type: 'image/png' }],
    apple: [{ url: faviconUrl, type: 'image/png' }],
  },
  verification: {
    google: "rUW2u3_ar0HTZEOMz_MC7qHgxQg-P5da404cK_ibYPk",
  },
  openGraph: {
    title: title,
    description: description,
    type: "website",
    url: url,
    images: [
      {
        url: faviconUrl, 
        width: 800,
        height: 800,
        alt: "Kashi Das Mongre - Web Developer & AI Automation Expert in Bhopal",
      },
    ],
    locale: 'en_IN',
    siteName: 'Kashidas Mongre',
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@KashiDasMongre",
    images: [faviconUrl],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Kashidas Mongre",
      "url": "https://kashidasmongre.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/kashi-das-mongre-9495b121a",
        "https://x.com/KashiDasMongre",
        "https://github.com/kashidasmongre"
      ],
      "jobTitle": "Web Developer and AI Automation Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Kashidas Mongre"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Kashidas Mongre - Web Development & AI Automation",
      "image": faviconUrl,
      "@id": "https://kashidasmongre.vercel.app",
      "url": "https://kashidasmongre.vercel.app",
      "telephone": "+91-8305105008",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development Subscription",
            "description": "Affordable monthly plans for custom website design, hosting, and maintenance with no setup fee for businesses in Bhopal."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & WhatsApp Automation",
            "description": "Custom AI chatbots and WhatsApp automation to capture leads and streamline business processes 24/7 in Bhopal."
          }
        }
      ]
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
