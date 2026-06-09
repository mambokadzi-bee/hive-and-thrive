export default function HoneycombDivider() {
  return (
    <div className="w-full py-4 flex justify-center items-center gap-3 overflow-hidden">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-honey/20" />
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-4 h-4 hex-clip"
            style={{
              backgroundColor: `oklch(${0.78 - i * 0.05} ${0.12 + i * 0.02} 80)`,
              opacity: 1 - i * 0.2,
            }}
          />
        ))}
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-honey/20" />
    </div>
  );
}
