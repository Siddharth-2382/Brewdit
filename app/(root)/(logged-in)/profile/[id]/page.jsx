import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <UserProfile
      appearance={{
        elements: { rootBox: "flex-grow", card: "w-auto" },
      }}
    />
  );
};

export default ProfilePage;
