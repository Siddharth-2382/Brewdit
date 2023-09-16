const PriceCard = (props) => {
  return (
    <div className="card price_card flex flex-col justify-between items-center">
      <div>
        <h2 className="card_title yellow_gradient">{props.title}</h2>
        <p className="flex mt-6 text-7xl font-extrabold text-white justify-center">
          <span className="self-start text-2xl font-medium text-gray-500">
            $&nbsp;
          </span>
          {props.price}
          <span className="self-end text-xl font-medium text-gray-500">
            /mo
          </span>
        </p>
        <p className="text-gray-400 text-sm mt-3">
          Suggested for {props.vidCount} videos/mo
        </p>
        <p className="text-gray-500 text-sm mt-3">{props.description}</p>
      </div>
      <div className="w-full">
        <button
          type="button"
          onClick={() => {}}
          className="white_btn uppercase w-full my-4"
        >
          Learn More
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="yellow_btn uppercase w-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
