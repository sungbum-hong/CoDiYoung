export default function Partners({ logos = [] }) {
  return (
    <div className="flex gap-32 mb-9 justify-center">
      {logos.map((src, i) => (
        <div key={i} className="bg-gray-300 w-27 h-15 rounded-2xl flex items-center justify-center">
          {/* <img src={src} alt={`partner-${i}`} loading="lazy" className="max-w-full max-h-full" /> */}
        </div>
      ))}
    </div>
  );
}
