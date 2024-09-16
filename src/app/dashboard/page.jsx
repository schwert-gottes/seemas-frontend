import { Dashboard } from "@/views/dashboard";

export async function metadata() {
  return {
    title: "Dashboard",
    description: "Dashboard preview",
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
      <Dashboard />
    </div>
  );
};

export default Page;
