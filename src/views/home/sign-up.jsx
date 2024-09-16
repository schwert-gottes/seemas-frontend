import Image from "next/image";
import { page_links } from "@/constants/data";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-[1440px] w-full flex justify-between gap-12 py-8 px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-12 lg:w-[40%]">
          <Image src="/assets/logo.svg" alt="logo" width={100} height={56} />
          <div>
            <h1 className="text-primary font-mulish font-bold text-[32px]">
              Create account
            </h1>
            <p className="text-[#52525B] font-mulish font-medium text-base mb-8">
              Sign up to get started.
            </p>
            <Link
              href="/company"
              className="border border-[#E4E4E7] hover:bg-gray-50 transition-all duration-500 ease-in-out cursor-pointer rounded-full flex justify-center gap-2 py-3 mb-4"
            >
              <Image
                src="/assets/google.svg"
                alt="google"
                width={24}
                height={24}
              />
              <p className="text-[#3F3F46] font-bold text-base">
                Sign up with Google
              </p>
            </Link>
            <div className="flex gap-2 justify-center font-mulish font-medium text-base text-primary">
              <p>Already have an account ?</p>
              <p className="text-secondary font-semibold cursor-pointer">
                Sign in
              </p>
            </div>
            <div className="lg:hidden mt-8">
              <Image
                src="/assets/content.svg"
                alt="content"
                width={900}
                height={550}
              />
            </div>
          </div>
          <div className="flex flex-col xs:flex-row gap-y-6">
            {page_links?.map((item, index) => (
              <Link
                key={index}
                href={item?.link}
                className={`font-mulish font-semibold text-sm text-primary ${
                  index === 0
                    ? "xs:pr-4"
                    : "xs:px-4 xs:border-l border-[#E4E4E7]"
                }`}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[60%] hidden lg:flex justify-end">
          <Image
            src="/assets/content.svg"
            alt="content"
            width={792}
            height={804}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
