import { Form } from "@/views/company";

export async function metadata() {
  return {
    title: "Company",
    description: "Company name and finance",
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
      <Form />
    </div>
  );
};

export default Page;
