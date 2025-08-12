// import { useEffect, useRef } from "react";

// export default function ProjectCarousel({
//   title = "프로젝트", // 기본 제목
//   items = [],
//   visible = 5
// }) {
//   const trackRef = useRef(null);
//   const cardWidth = 220;
//   const loopItems = [...items, ...items, ...items];

//   useEffect(() => {
//     if (!trackRef.current) return;
//     const start = items.length * cardWidth;
//     trackRef.current.scrollLeft = start;
//   }, [items.length]);

//   const move = (dir) => {
//     const el = trackRef.current;
//     if (!el) return;
//     el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
//   };

//   return (
//     <section className="carousel-section">
//       {title && <h2 className="carousel-title">{title}</h2>}

//       <div className="carousel">
//         <button className="nav left" onClick={() => move(-1)} aria-label="이전">‹</button>
//         <div
//           className="track"
//           ref={trackRef}
//           style={{ gridTemplateColumns: `repeat(${loopItems.length}, ${cardWidth}px)` }}
//         >
//           {loopItems.map((p, i) => (
//             <article className="card" key={`${p.id}-${i}`}>
//               <div className="thumb">
//                 <img src={p.thumb || p.img} alt={p.title} loading="lazy" />
//               </div>
//               <div className="meta">
//                 <h3>{p.title}</h3>
//                 {p.desc && <p>{p.desc}</p>}
//               </div>
//             </article>
//           ))}
//         </div>
//         <button className="nav right" onClick={() => move(1)} aria-label="다음">›</button>
//       </div>
//     </section>
//   );
// }
