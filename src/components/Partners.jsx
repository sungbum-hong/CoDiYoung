export default function Partners({ logos = [] }) {
  return (
    <div className="flex gap-4 justify-center">
      {logos.map((src, i) => (
        <div key={i} className="bg-gray-300 w-20 h-12 rounded flex items-center justify-center">
          {/* <img src={src} alt={`partner-${i}`} loading="lazy" className="max-w-full max-h-full" /> */}
        </div>
      ))}
    </div>
  );
}
