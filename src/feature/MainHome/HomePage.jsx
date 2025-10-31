import StudyCategory from "./StudyCategory";
import ProjectSection from "./ProjectSection";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import { COLORS } from "../../constants/colors.js";

export default function HomePage() {
  return (
    <div style={{ color: COLORS.GRAY_800 }}>
      {/* 메인 배너 섹션 */}
      <section className="mb-21">
        {/* 배너 컨테이너: 반응형 높이, 모서리/그림자, 키보드 포커스 */}
        <div>
          <a
            href="https://onoffmix.com/event/325751"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="온오프믹스 행사 바로가기"
            className="block focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
              <img
                src="./cdymainbanner.png"
                alt="메인 배너"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1280px) 1280px, 100vw"
              />
           </a>
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
