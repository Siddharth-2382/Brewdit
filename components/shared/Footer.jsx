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
            <Link href="/how-it-works" className="text-gray-500 w-fit">
              How It Works
            </Link>
            <Link href="/contact-us" className="text-gray-500 w-fit">
              Contact Us
            </Link>
          </div>
          <div className="footer_link">
            <h3 className="">Resources</h3>
            <Link href="/docs" className="text-gray-500 w-fit">
              Docs
            </Link>
            <Link href="/pricing" className="text-gray-500 w-fit">
              Pricing
            </Link>
            <Link href="/guides" className="text-gray-500 w-fit">
              Guides
            </Link>
            <Link href="/help" className="text-gray-500 w-fit">
              Help
            </Link>
          </div>
          <div className="footer_link">
            <h3 className="">Socials</h3>
            <Link href="/" className="text-gray-500 w-fit">
              Instagram
            </Link>
            <Link href="/" className="text-gray-500 w-fit">
              Facebook
            </Link>
            <Link href="/" className="text-gray-500 w-fit">
              Twitter
            </Link>
            <Link href="/" className="text-gray-500 w-fit">
              Discord
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap mt-10 border-t border-gray-800 py-10">
        <p>@2023 Brewdit. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
