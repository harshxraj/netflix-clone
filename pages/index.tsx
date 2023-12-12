import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <p className="text-white">Hello! {user?.name}</p>
      <button className="w-full h-12 bg-yellow-200" onClick={() => signOut()}>
        Logout!
      </button>
    </>
  );
}
