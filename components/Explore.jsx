const Explore = () => {
  return (
    <>
      <a href="#feature_section" className="text-center mt-24 mb-32">
        <h2 className="white_gradient">EXPLORE</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2.5em"
          viewBox="0 0 384 512"
          className="mx-auto"
        >
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "transparent", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#dde3e4", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad2)"
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          />
        </svg>
      </a>
    </>
  );
};

export default Explore;
