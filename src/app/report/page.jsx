import { Report } from "@/views/report";

export async function metadata() {
  return {
    title: "Report",
    description: "Report preview",
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
      <Report />
    </div>
  );
};

export default Page;
