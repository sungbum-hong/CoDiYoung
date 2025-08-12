import MainBanner from "../feature/MainHome/MainBanner";
import StudyCategory from "../feature/MainHome/StudyCategory";
import ProjectSection from "../feature/MainHome/ProjectSection";
import Partners from "../feature/MainHome/Partners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-gray-800">
      <MainBanner />
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
