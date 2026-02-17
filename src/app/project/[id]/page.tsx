import ProjectDetailPage from "../../../features/project/ProjectDetailPage";

export function generateStaticParams() {
  // Pre-generating paths for static export if needed, or just for example
  return [{ id: '1' }];
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectDetailPage />;
}
