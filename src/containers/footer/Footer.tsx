import "./footer.css";
import logo from "../../assets/GPT-3.svg";

const FooterLinks = ({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) => {
  return (
    <>
      <h4>{heading}</h4>
      {links.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <FooterLinks
            heading="Links"
            links={["Overons", "Social Media", "Counters", "Contact"]}
          />
        </div>
        <div className="gpt3__footer-links_div">
          <FooterLinks
            heading="company"
            links={["Terms & Conditions", "Privacy Policy", "Contact"]}
          />
        </div>
        <div className="gpt3__footer-links_div">
          <FooterLinks
            heading="Get in touch"
            links={[
              "Crechterwoord K12 182 DK Alknjkcb",
              "085-132567",
              "info@payme.net",
            ]}
          />
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyright © 2021 GPT-3 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
