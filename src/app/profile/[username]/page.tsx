import PublicProfilePage from "../../../features/profile/PublicProfilePage";

export default async function Page(props: { params: Promise<{ username: string }> }) {
  const params = await props.params;
  return <PublicProfilePage username={params.username} />;
}
