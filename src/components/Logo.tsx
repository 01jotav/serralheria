interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", iconOnly = false, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text1: 7, text2: 14 },
    md: { icon: 44, text1: 9,  text2: 18 },
    lg: { icon: 64, text1: 12, text2: 26 },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Ícone SVG — portão com L integrado */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bola pilar esquerdo */}
        <circle cx="14" cy="26" r="6" fill="white" />
        {/* Bola pilar direito */}
        <circle cx="86" cy="26" r="6" fill="white" />
        {/* Pilar esquerdo */}
        <rect x="10" y="31" width="8" height="48" fill="white" rx="1" />
        {/* Pilar direito */}
        <rect x="82" y="31" width="8" height="48" fill="white" rx="1" />
        {/* Barra base */}
        <rect x="10" y="76" width="80" height="5" fill="white" rx="1" />
        {/* Barras gate lado esquerdo */}
        <rect x="24" y="38" width="5" height="43" fill="white" rx="1" />
        <rect x="34" y="38" width="5" height="43" fill="white" rx="1" />
        <rect x="44" y="38" width="5" height="43" fill="white" rx="1" />
        {/* Poste central — forma o "L" (mais alto) */}
        <rect x="55" y="18" width="7" height="63" fill="white" rx="1" />
        {/* Traço horizontal do L */}
        <rect x="55" y="74" width="14" height="5" fill="white" rx="1" />
        {/* Barras gate lado direito */}
        <rect x="71" y="38" width="5" height="43" fill="white" rx="1" />
      </svg>

      {/* Texto */}
      {!iconOnly && (
        <div className="leading-none select-none">
          <span
            className="block text-white/80 font-medium tracking-[0.25em] uppercase"
            style={{ fontSize: s.text1 }}
          >
            Serralheria
          </span>
          <span
            className="block text-white font-black tracking-wide uppercase"
            style={{ fontSize: s.text2 }}
          >
            LUKANN
          </span>
        </div>
      )}
    </div>
  );
}
