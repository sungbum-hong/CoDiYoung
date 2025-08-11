// src/pages/Home.jsx
import MainBanner from '@components/MainBanner';
import StudyCategory from '@components/StudyCategory';
import ProjectCarousel from '@components/ProjectCarousel';
import Partners from '@components/Partners';

export default function Home() {
  return (
    <>
      <MainBanner />

     <StudyCategory
  title="스터디 채널"
  rows={[
    { label: "코딩", count: 10 },
    { label: "디자인", count: 10 },
    { label: "영상편집", count: 10 },
  ]}
  perRow={10}
/>

      {/* 프로젝트 & 공모전 */}
      <section style={{ padding: '24px 0' }}>
        <ProjectCarousel
        title="프로젝트"
          items={[1, 2, 3, 4, 5, 6].map((n) => ({
            id: n,
            title: `프로젝트 ${n}`,
            desc: '한 줄 설명',
            thumb: `https://picsum.photos/seed/p${n}/600/400`,
          }))}
        />
      </section>

      {/* 파트너 & 서포터 */}
      <section style={{ padding: '40px 0' }}>
        <Partners logos={[1, 2, 3, 4, 5].map((n) => `https://picsum.photos/seed/logo${n}/160/80`)} />
      </section>
    </>
  );
}
