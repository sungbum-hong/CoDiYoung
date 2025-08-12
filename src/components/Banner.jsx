import MainBanner from "./MainBanner";
import StudyCategory from "./StudyCategory";
import ProjectSection from "./ProjectSection";
import Partners from "./Partners";
import Footer from "./Footer";

export default function Banner() {
  return (
    <div className="bg-white text-gray-800">
      <MainBanner />
      <StudyCategory />
      <ProjectSection />
      
      <section className="p-4 flex flex-col">
        <h2 className="font-bold mb-3 text-center">파트너 & 서포터</h2>
        <Partners logos={Array.from({ length: 5 }, (_, i) => `/partner-${i + 1}.png`)} />
      </section>
      
      <Footer />
    </div>
  );
}
