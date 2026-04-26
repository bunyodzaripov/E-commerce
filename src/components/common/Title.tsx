const Title = ({
  title,
  className,
  id,
}: {
  title: string;
  className?: string;
  id?: string;
}) => {
  return (
    <h2
      id={id}
      className={`font-display scroll-mt-28 text-2xl md:text-3xl lg:text-5xl font-bold text-foreground text-center uppercase mb-7 md:mb-16 tracking-tight ${className}`}
    >
      {title}
    </h2>
  );
};

export default Title;
