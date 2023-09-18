"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src={session?.user.image}
            width={100}
            height={100}
            className="rounded-full w-[84px] md:w-[120px]"
            alt="profile"
            onClick={() => {}}
          />
          <div>
            <h2 className="yellow_gradient text-center font-semibold text-2xl mb-4">
              {session?.user.name}
            </h2>
            <Link
              href={"/edit-profile/" + session?.user.name}
              className="transparent_btn"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
