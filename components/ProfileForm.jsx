import Link from "next/link";

const ProfileForm = ({ post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col items-center mb-20">
      <h1 className="head_text">
        <span className="blue_gradient">Edit Profile</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Username
          </span>

          <input
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Your Name"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Profile photo
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="file"
            accept="image/*"
            required
            className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-[#9E23FF] hover:file:bg-[#9E23FF] hover:file:text-white"
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
