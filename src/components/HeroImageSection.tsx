interface HeroImageProps {
  className?: string;
  backgroundImage: string;
  text: string;
}

export default function HeroImageSection({ className = "", backgroundImage, text }: HeroImageProps) {
  return (
    <div className={`relative w-full ${className}`} data-name="Hero Image">
      <div className="content-stretch flex h-[539px] items-center justify-center px-4 sm:px-8 md:px-[123px] py-[204px] relative" data-name="Property 1=Default">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={backgroundImage} 
        />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[54px] text-[rgba(255,255,255,0.8)] text-center w-full max-w-[648px] whitespace-pre-wrap z-10">
          {text}
        </p>
      </div>
    </div>
  );
}
