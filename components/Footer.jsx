import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/images/logo.png"
              alt="Brewdit Logo"
              width={30}
              height={30}
              className="object-contain w-11 rounded-full"
            />
            <p
              style={{ fontFamily: "Seasons" }}
              className="text-2xl text-white tracking-widest"
            >
              Brewdit
            </p>
          </Link>
          <p className="text-base text-gray-700">
            Brewdit 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer_links">
          <div className="footer_link">
            <h3 className="">About</h3>
            <Link href="/howitworks" className="text-gray-500">
              How It Works
            </Link>
          </div>
          <div className="footer_link">
            <h3 className="">Resources</h3>
            <Link href="/docs" className="text-gray-500">
              Docs
            </Link>
            <Link href="/pricing" className="text-gray-500">
              Pricing
            </Link>
            <Link href="/guides" className="text-gray-500">
              Guides
            </Link>
            <Link href="/help" className="text-gray-500">
              Help
            </Link>
          </div>
          <div className="footer_link">
            <h3 className="">Socials</h3>
            <Link href="/" className="text-gray-500">
              Instagram
            </Link>
            <Link href="/" className="text-gray-500">
              Facebook
            </Link>
            <Link href="/" className="text-gray-500">
              Twitter
            </Link>
            <Link href="/" className="text-gray-500">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
