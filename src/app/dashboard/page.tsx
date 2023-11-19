import { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
interface PageProps {}

const Page: FC<PageProps> = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user?.id) redirect("/auth-callback");

  return <div>{user?.email}</div>;
};

export default Page;
