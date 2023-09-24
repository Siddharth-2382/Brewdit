import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Footer from "@components/shared/Footer";
import Nav from "@components/shared/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Brewdit",
  description:
    "Effortlessly Review, Approve and Upload edited Videos & Thumbnails.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            elements: {
              formButtonPrimary: "multi_gradient",
              formFieldInput: "bg-white focus:text-black",
              footerActionLink: "text-white underline",
              card: "bg-gradient-to-br from-[#000340] to-[#361744] mb-24 border-0",
            },
          }}
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        >
          <div className="main">
            <div className="gradient">
              <div className="ellipse_1"></div>
              <div className="ellipse_2"></div>
              <div className="ellipse_3"></div>
            </div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
