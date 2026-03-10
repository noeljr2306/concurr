import { redirect } from "next/navigation";

export default function Home() {
  redirect("/user-accounts/user-sarah/wallets");
}
