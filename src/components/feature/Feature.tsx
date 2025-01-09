import "./feature.css";

const Features = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="gpt3__features-container_features">
      <div className="gpt3__features-container__features-title">
        <div />
        <h2>{title}</h2>
      </div>
      <div className="gpt3__features-container-features-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
