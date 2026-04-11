const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl md:text-5xl font-bold text-black text-center uppercase mb-7 md:mb-16 tracking-tight">
      {title}
    </h2>
  );
};

export default Title;
