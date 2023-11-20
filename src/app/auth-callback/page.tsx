import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  return <></>;
};

export default Page;
