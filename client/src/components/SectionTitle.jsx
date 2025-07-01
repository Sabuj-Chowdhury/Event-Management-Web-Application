const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl font-extrabold text-primary mb-2">{title}</h2>
      {subtitle && (
        <p className="text-base-content text-opacity-70 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
