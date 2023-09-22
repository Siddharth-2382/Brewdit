import Link from "next/link";

const Hero = () => {
  return (
    <>
      <h1 className="head_text text-center mt-20">
        Your YouTube Content
        <br />
        <span className="orange_gradient text-center">
          Streamlined & Simplified
        </span>
      </h1>
      <p className="desc">
        Effortlessly Review, Approve and Upload edited Videos & Thumbnails.
      </p>
      <Link href="/pricing" className="multi_gradient hover_grow">
        get started
      </Link>
    </>
  );
};

export default Hero;
