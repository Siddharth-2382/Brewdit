import Card from "./Card";

const Features = () => {
  return (
    <>
      <h2 className="blue_gradient secondary_head_text mb-4 min-[820px]:mb-8">
        Features you'll love
      </h2>
      <div className="responsive_card_holder">
        <Card
          cardHero={<i className="fa-regular fa-circle-check"></i>}
          cardTitle={"Streamlined Review"}
          cardDescription={
            "Easily review edited videos and thumbnails in one central location. Leave comments, provide feedback, and ensure your content meets your standards without the need for lengthy email exchanges."
          }
        />
        <Card
          cardHero={<i className="fa-regular fa-hourglass"></i>}
          cardTitle={"Efficient Workflow"}
          cardDescription={
            "Simplify and expedite the content approval process. Approve edited videos and thumbnails with just a few clicks. Seamlessly communicate changes or revisions to your editors. Get your content ready for publishing faster than ever."
          }
        />
        <Card
          cardHero={<i className="fa-brands fa-youtube"></i>}
          cardTitle={"easy YouTube Uploads"}
          cardDescription={
            "Seamlessly integrate with YouTube using our Direct YouTube Integration feature. Effortlessly upload approved content directly to your YouTube channel without sharing your credentials. Streamline the publishing process for your audience to enjoy."
          }
        />
      </div>
    </>
  );
};

export default Features;
