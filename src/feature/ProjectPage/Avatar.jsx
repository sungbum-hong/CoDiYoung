export default function Avatar({ size = 'md', src, alt }) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-56 h-56'
  };
  const cls = sizes[size] || sizes.md;
  
  return (
    <div className={`${cls} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden`}> 
      {src ? <img src={src} alt={alt || ''} className="w-full h-full object-cover" /> : null}
    </div>
  );
}