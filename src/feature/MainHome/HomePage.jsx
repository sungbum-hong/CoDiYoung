import StudyCategory from "./StudyCategory";
import HeroBanner from "./components/HeroBanner.jsx";
import ProjectSectionMock from "./ProjectSectionMock";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import { COLORS } from "../../constants/colors.js";

export default function HomePage() {
  // const { data: banners } = useMainHomeBanners();
  const banners = '/banner.png'

  return (
    <div style={{ color: COLORS.GRAY_800 }}>
      {/* 메인 배너 섹션 */}
      <section className="mb-21">
        {/* 배너 컨테이너 */}
        <div className="flex flex-col gap-4">
          <HeroBanner banners={banners} />
        </div>
      </section>

      <StudyCategory />
      <ProjectSectionMock />

      <section className="p-4 flex flex-col">
        <Partners />
      </section>

      <Footer />
    </div>
  );
}
