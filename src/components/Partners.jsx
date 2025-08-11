export default function Partners({ logos = [] }) {
  return (
    <div className="partners">
      {logos.map((src, i) => (
        <div className="partner" key={i}>
          <img src={src} alt={`partner-${i}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
