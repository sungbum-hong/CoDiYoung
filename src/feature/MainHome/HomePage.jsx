import StudyCategory from "./StudyCategory";
import ProjectSection from "./ProjectSection";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import { COLORS } from "../../constants/colors.js";
import { useMainHomeBanners } from "./hooks/useMainHomeQueries.js";

export default function HomePage() {
  const { data: banners } = useMainHomeBanners();

  return (
    <div style={{ color: COLORS.GRAY_800 }}>
      {/* 메인 배너 섹션 */}
      <section className="mb-21">
        {/* 배너 컨테이너 */}
        <div className="flex flex-col gap-4">
          {banners && banners.length > 0 && (
            banners.map((banner) => (
              <a
                key={banner.id}
                href={banner.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <img
                  src={banner.imageUrl}
                  alt="메인 배너"
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                  loading="eager"
                />
              </a>
            ))
          )}
        </div>
      </section>

      <StudyCategory />
      <ProjectSection />

      <section className="p-4 flex flex-col">
        <h2 className="font-bold text-2xl mb-11 text-center">파트너 & 서포터</h2>
        <Partners />
      </section>

      <Footer />
    </div>
  );
}
