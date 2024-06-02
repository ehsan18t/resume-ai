import ProfilePage from "./ProfilePage";

export const metadata = {
  title: "Profile",
  description: "Profile",
};

export default function Page({ params }) {
  return <ProfilePage params={params} />;
}
