import Input from "@/components/Input";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-12">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        {/* inputs */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-wd rounded-md w-full">
            {/* input boxes */}
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;