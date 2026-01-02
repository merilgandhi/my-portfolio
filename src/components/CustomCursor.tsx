import { useEffect, useState, useRef } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Main cursor dot - follows mouse exactly */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-150 ${
            isPointer ? "w-4 h-4 opacity-50" : "w-2 h-2"
          }`}
        />
      </div>
      {/* Trailing ring - smoothly follows with easing */}
      <div
        className={`fixed pointer-events-none z-[9998] ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isPointer 
              ? "w-12 h-12 border-secondary" 
              : "w-8 h-8 border-primary/50"
          }`}
          style={{
            boxShadow: isPointer 
              ? "0 0 20px hsl(var(--secondary) / 0.3)" 
              : "0 0 15px hsl(var(--primary) / 0.2)",
          }}
        />
      </div>
    </>
  );
};
