const EFHeroBackdrop = () => {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Multi-stop gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(0 0% 9%) 55%, hsl(0 0% 13%) 100%)",
        }}
      />

      {/* Radial brand glow */}
      <div
        className="absolute inset-0 animate-pulse-brand"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(19 89% 53% / 0.10) 0%, transparent 55%)",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(19 89% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(19 89% 53%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Drifting blur shapes — slow, ambient */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand/12 blur-3xl animate-drift-1" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-trust/14 blur-3xl animate-drift-2" />
      <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] rounded-full bg-brand/8 blur-3xl animate-drift-3" />

      {/* Diagonal shine sweep */}
      <div className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-brand/[0.06] to-transparent animate-hero-shine" />

      {/* Top inner glow */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Bottom border fade */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
    </div>
  );
};

export default EFHeroBackdrop;
