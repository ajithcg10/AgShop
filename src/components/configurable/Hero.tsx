import { useNavigate } from "react-router-dom";

interface HeroProps {
  heading: string;
  subheading: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ heading, subheading, ctaText, ctaLink }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="cfg-hero">
      <h1 className="cfg-hero__heading">{heading} </h1>
      <p className="cfg-hero__sub">{subheading}</p>
      {ctaText && ctaLink && (
        <button
          className="cfg-btn cfg-btn--primary"
          onClick={() => navigate(ctaLink)}
        >
          {ctaText}
        </button>
      )}
    </section>
  );
};

export default Hero;
