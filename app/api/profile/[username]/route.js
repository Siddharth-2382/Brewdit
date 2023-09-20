import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const user = await User.findOne({ username: params.username });
    if (!user) return new Response("User Not Found", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { username, firstname, lastname } = await request.json();

  try {
    await connectToDB();

    // Find the existing user by ID
    const existingUser = await User.findOne({ username: params.username });
    if (!existingUser) {
      return new Response("User not found", { status: 404 });
    }

    // Update the profile with new data
    existingUser.username = username;
    existingUser.firstname = firstname;
    existingUser.lastname = lastname;

    await existingUser.save();

    return new Response("Successfully updated the Profile", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Profile", { status: 500 });
  }
};
