import Link from "next/link";

const ProfileForm = ({ profile, setProfile, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col items-center mb-20">
      <h1 className="head_text">
        <span className="blue_gradient">Edit Profile</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-xl flex flex-col gap-7 glassmorphism"
        encType="multipart/form-data"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Username
          </span>
          <input
            value={profile.username}
            name="userName"
            placeholder="Your Name"
            className="form_input"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            First Name
          </span>
          <input
            value={profile.firstname}
            name="firstName"
            placeholder="Your Name"
            className="form_input"
            onChange={(e) =>
              setProfile({ ...profile, firstname: e.target.value })
            }
            required
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Last Name
          </span>
          <input
            value={profile.lastname}
            name="lastName"
            placeholder="Your Name"
            className="form_input"
            onChange={(e) =>
              setProfile({ ...profile, lastname: e.target.value })
            }
            required
          />
        </label>

        <div className="flex-end mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? "Editing..." : "Edit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
