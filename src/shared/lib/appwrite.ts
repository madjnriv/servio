import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a7f2d78001dc489c0e0")
  .setPlatform("com.servio.app");

export const account = new Account(client);
export const avatars = new Avatars(client);
