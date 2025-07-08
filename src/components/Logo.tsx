
import logoImage from "@/assets/ObseumLogoWhite.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <img 
        src={logoImage} 
        alt="Obseum" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;
