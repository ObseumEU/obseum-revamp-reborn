const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`font-bold text-primary ${className}`}>
      <span className="text-2xl">Obseum</span>
    </div>
  );
};

export default Logo;