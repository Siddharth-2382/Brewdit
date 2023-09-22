import PriceCard from "@components/cards/PriceCard";

const Pricing = () => {
  return (
    <section>
      <h2 className="blue_gradient secondary_head_text mb-4 min-[820px]:mb-12">
        Choose the Plan That Suits You
      </h2>
      <div className="responsive_card_holder mb-8">
        <PriceCard
          title={"essential"}
          price={"29.99"}
          description={
            "Start your YouTube journey with the Essential plan. Upload up to 50GB of high-quality videos to your channel."
          }
          vidCount={7}
        />
        <PriceCard
          title={"standard"}
          price={"49.99"}
          description={
            "Step up your content game with the Standard plan. Enjoy 100GB of video uploads for your channel."
          }
          vidCount={15}
        />
        <PriceCard
          title={"premium"}
          price={"79.99"}
          description={
            "For top-tier YouTubers, the Premium plan offers a massive 200GB of video uploads, priority support, and exclusive features. Dominate the platform and maximize your creativity."
          }
          vidCount={30}
        />
      </div>
    </section>
  );
};

export default Pricing;
