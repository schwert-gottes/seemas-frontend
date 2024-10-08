import { SignUp } from "@/views/home";

export async function metadata() {
  return {
    title: "Semmas",
    description: "Semmas sign up",
    icons: {
      icon: [
        {
          url: "/assets/simple-logo.svg",
          href: "/assets/simple-logo.svg",
        },
      ],
    },
  };
}

const Page = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Page;
