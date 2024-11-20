import { NextApiRequest, NextApiResponse } from "next";
import { AuthService } from "../../../api/src/services/auth.service";

const authService = new AuthService();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  try {
    // Register the user using the AuthService
    const user = await authService.register({ name, email, password, role: "user" });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Registration failed. Please try again." });
  }
}
