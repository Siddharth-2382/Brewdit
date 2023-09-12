import TimelinePath from "./TimelinePath";

const HowItWorks = () => {
  return (
    <>
      <h2 className="blue_gradient secondary_head_text my-8">How it works?</h2>

      <div className="flex w-full">
        <TimelinePath />
        <div className="steps">
          <div className="step">
            <h2 className="step_title">Youtube Signup</h2>
            <p className="step_desc">
              Elevate your YouTube journey by seamlessly connecting your channel
              to our platform. Experience secure and direct content uploads with
              just a click.
            </p>
          </div>
          <div className="step">
            <h2 className="step_title">Invite Editors</h2>
            <p className="step_desc">
              Empower your creative team. Invite editors to our platform and
              unlock the potential of collaborative content production.
            </p>
          </div>
          <div className="step">
            <h2 className="step_title">Choose Your Plan</h2>
            <p className="step_desc">
              Explore our subscription plans and select the one that aligns with
              your ambitions.{" "}
            </p>
          </div>
          <div className="step">
            <h2 className="step_title">Editors Share Creations</h2>
            <p className="step_desc">
              Let your editors shine. They can effortlessly share their
              masterpieces - edited videos and captivating thumbnails - directly
              onto our platform.
            </p>
          </div>
          <div className="step">
            <h2 className="step_title">Collaborative Review</h2>
            <p className="step_desc">
              Your content, your vision. Engage in collaborative review and
              fine-tuning. Leave feedback and craft exceptional content
              together.
            </p>
          </div>
          <div className="step">
            <h2 className="step_title">YouTube Publishing</h2>
            <p className="step_desc">
              Seamlessly integrate with YouTube. Publish approved content
              directly to your channel, ensuring security without sharing
              credentials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
