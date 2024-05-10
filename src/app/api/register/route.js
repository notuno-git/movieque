import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { username, phone, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    username,
    phone,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};
