const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/f3956429-f1de-4b4a-a2dd-4b41a0cbaa02.png" 
        alt="Obseum Logo" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;