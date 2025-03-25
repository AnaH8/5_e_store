import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "E-store",
  description: "A store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
    <html lang="en">
      <Head />
      <body>
        <div id="portal" />                {/* for the modal overlay, when user clicks to inspect product*/}
        <div id="app">                      {/* children contain the page.js (specific to the /route*/}
          <header>
            <div className="header-content">
            <Link href={'/'}>
              <h1>E-store</h1>
            </Link>

            <h5 className="mid-text">- Cool stuff for cool people -</h5>
            <Cart/>
            </div>
          </header>

          <main>
            {children}
          </main>
          
          <div className="hr"/>
          
          <footer>
            <div className="email-container">
              <h5>Get a sneak peak at new additions to the store, special offers and so much more</h5>
              <EmailInput/>
            </div>
            <div className="links-container">
              <div>
                <h3>Ana</h3>
                <Link target="_blank" href={'/'}>portfolio</Link>
                <Link target="_blank" href={'/'}>another project</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/faqs'}>FAQs</Link>
              </div>
            </div>
            <div className="socials-container">
              <p>&copy; <a href="/" target="_blank">Ana</a> 2025<br></br>Built with NextJS & <a href="/" target="_blank">FantaCSS</a></p>     {/* href: portfolio, fantaCSS */}
              <div className="social-links">
                <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                
              </div>
            </div>
          </footer>
          
        </div>      
      </body>
    </html>
    </ProductsProvider>
  );
}
