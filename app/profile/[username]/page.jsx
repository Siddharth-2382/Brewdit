"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    image: "",
  });

  useEffect(() => {
    const getUserDetails = async () => {
      const username = window.location.href.split("/profile/")[1];
      const response = await fetch(`/api/profile/${username}`);
      const data = await response.json();
      setUser({
        username: data.username,
        image: data.image,
      });
    };
    getUserDetails();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src={user.image}
          width={100}
          height={100}
          className="rounded-full w-[84px] md:w-[120px] hover:cursor-pointer"
          alt="profile"
          priority
          onClick={() => {}}
        />
        <div className="grid place-items-center md:block">
          <h2 className="yellow_gradient text-center font-semibold text-2xl mb-4">
            {user.username}
          </h2>
          <Link
            href={"/edit-profile/" + user.username}
            className="transparent_btn w-fit"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap mt-10 border-t border-gray-800 py-10 w-full">
        <div className="flex gap-8">
          <Link href="" className="multi_gradient hover_grow w-32">
            My Team
          </Link>
          <Link
            href=""
            className="yellow_btn hover_grow uppercase w-32 text-center text-slate-900"
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
