import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-12">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        {/* inputs */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 lg:py-16 md:py-4 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            {/* input boxes */}
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>

            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                onChange={(e: any) => setName(e.target.value)}
                id="name"
                type="text"
                value={name}
              />
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            {/* button */}
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-8 hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              First time using Netflix?
              <span className="text-white ml-2 hover:underline cursor-pointer">
                Create an account.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
