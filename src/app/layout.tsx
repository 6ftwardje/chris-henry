import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neural Rewiring for Peak Performance | Chris Henry",
  description: "Transform your performance with Chris Henry's neuroscience-based Neural Rewiring process. Trusted by top athletes and business leaders worldwide. 8-week program with 95% success rate.",
  keywords: [
    "neural rewiring",
    "peak performance",
    "mental coaching",
    "sports psychology",
    "business performance",
    "neuroscience",
    "Chris Henry",
    "professional coaching",
    "mental training",
    "performance optimization"
  ],
  authors: [{ name: "Chris Henry" }],
  creator: "Chris Henry",
  publisher: "Chris Henry",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chrishenry.com",
    title: "Neural Rewiring for Peak Performance | Chris Henry",
    description: "Transform your performance with Chris Henry's neuroscience-based Neural Rewiring process. Trusted by top athletes and business leaders worldwide.",
    siteName: "Chris Henry - Neural Rewiring",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Henry - Neural Rewiring for Peak Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural Rewiring for Peak Performance | Chris Henry",
    description: "Transform your performance with neuroscience-based Neural Rewiring process.",
    images: ["/og-image.jpg"],
    creator: "@chrishenry",
  },
  alternates: {
    canonical: "https://chrishenry.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* LinkedIn Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "YOUR_PARTNER_ID";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chris Henry",
              "jobTitle": "Performance Coach & Neuroscientist",
              "description": "Professional snooker player turned performance coach specializing in neural rewiring for peak performance",
              "url": "https://chrishenry.com",
              "image": "https://chrishenry.com/chris-henry-profile.jpg",
              "sameAs": [
                "https://linkedin.com/in/chrishenry",
                "https://twitter.com/chrishenry",
                "https://instagram.com/chrishenry"
              ],
              "knowsAbout": [
                "Neural Rewiring",
                "Sports Psychology",
                "Performance Coaching",
                "Neuroscience",
                "Mental Training"
              ],
              "offers": {
                "@type": "Service",
                "name": "Neural Rewiring Program",
                "description": "8-week neuroscience-based program for peak performance transformation",
                "provider": {
                  "@type": "Person",
                  "name": "Chris Henry"
                }
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
