"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileForm from "@components/ProfileForm";

const EditProfile = ({ params }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [profile, setProfile] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch(`/api/profile/${params.username}`);
      const data = await response.json();
      setProfile({
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
      });
    };

    if (session?.user.id) getUserDetails();
  }, [session?.user.id]);

  const editProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userId = session?.user.id;
    if (!userId) return alert("Missing UserId!");

    try {
      const response = await fetch(`/api/profile/${params.username}`, {
        method: "PATCH",
        body: JSON.stringify({
          userId: userId,
          username: profile.username,
          firstname: profile.firstname,
          lastname: profile.lastname,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return session?.user.id ? (
    <ProfileForm
      profile={profile}
      setProfile={setProfile}
      submitting={submitting}
      handleSubmit={editProfile}
    />
  ) : (
    router.push("/")
  );
};

export default EditProfile;
