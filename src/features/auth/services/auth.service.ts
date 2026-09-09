import { LoginDto } from "../schemas/login.schema";
import { RegisterDto } from "../schemas/register.schema";
import { account } from "@/shared/lib/appwrite";
import { ID } from "react-native-appwrite";

export const authService = {
  register: async (data: RegisterDto) => {
    const newUser = await account.create({
      userId: ID.unique(),
      email: data.email,
      password: data.password,
      name: data.name,
    });
    const { name, email, $id } = newUser;
    return { name, newUserEmail: email, id: $id };
  },
  login: async (data: LoginDto) => {
    await account.createEmailPasswordSession({
      email: data.email,
      password: data.password,
    });
    const userData = await account.get();
    const { name, email, $id } = userData;
    return { name, userEmail: email, id: $id };
  },
  logout: async () => {},
};
