interface SectionHeadingProps {
  heading: string;
  subheading?: string;
}

const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => (
  <div className="cfg-section-heading">
    <h2 className="cfg-section__heading">{heading}</h2>
    {subheading && <p className="cfg-section__sub">{subheading}</p>}
  </div>
);

export default SectionHeading;
