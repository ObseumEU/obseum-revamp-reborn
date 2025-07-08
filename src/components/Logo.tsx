
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <img 
        src="/src/assets/ObseumLogoWhite.png" 
        alt="Obseum" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;
