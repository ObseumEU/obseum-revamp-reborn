
import logoImage from "@/assets/ObseumLogoWhite.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <img
        src={logoImage}
        alt="Obseum"
        width="140"
        height="32"
        className="h-8 w-auto"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
