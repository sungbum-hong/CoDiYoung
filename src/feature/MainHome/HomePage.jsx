import StudyCategory from "./StudyCategory";
import ProjectSection from "./ProjectSection";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import { COLORS } from "../../utils/colors.js";

export default function HomePage() {
  return (
    <div style={{ color: COLORS.GRAY_800 }}>
      {/* 메인 배너 섹션 */}
      <section className="mb-21">
        <div className="h-75 rounded flex items-center justify-center" style={{ backgroundColor: COLORS.GRAY_300 }}>
          <div className="text-center">
          </div>
        </div>
      </section>

      <StudyCategory />
      <ProjectSection />
      
      <section className="p-4 flex flex-col">
        <h2 className="font-bold text-2xl mb-11 text-center">파트너 & 서포터</h2>
        <Partners logos={Array.from({ length: 5 }, (_, i) => `/partner-${i + 1}.png`)} />
      </section>
      
      <Footer />
    </div>
  );
}
