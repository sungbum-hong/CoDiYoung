import StudyCategory from "./StudyCategory";
import BannerSlider from "./components/BannerSlider";
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
          <BannerSlider banners={banners} />
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
