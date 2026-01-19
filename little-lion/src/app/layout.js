import "@/app/globals.css";
import NavModalHeader from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Little Lion Web Designs",
    template: "%s | Little Lion Web Designs",
  },
  description:
    "Professional web design and development for small businesses in Cape Town.",
  keywords: [
    "web design Cape Town",
    "web developer Cape Town",
    "small business websites",
    "Next.js web design",
  ],
  openGraph: {
    title: "Little Lion Web Designs",
    description:
      "Professional web design and development for small businesses in Cape Town.",
    url: "https://littlelionwebdesigns.co.za",
    siteName: "Little Lion Web Designs",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body className="min-h-screen flex flex-col">
        {/* Global Navigation */}
        <NavModalHeader />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
