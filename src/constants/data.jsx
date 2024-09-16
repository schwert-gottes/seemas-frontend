import {
  Average,
  Company,
  Delete,
  Excel,
  ExportExcel,
  ExportPdf,
  Pdf,
} from "@/icons";

export const page_links = [
  {
    title: "Privacy policy",
    link: "#",
  },
  {
    title: "Terms & Conditions",
    link: "#",
  },
];

export const statistics = [
  {
    icon: <Company />,
    title: "Company Value",
    value: "$80,000,000",
    data: [
      { title: "Adjusted EV", value: "$50,087,000" },
      { title: "Debt", value: "$0" },
      { title: "Cash", value: "$30,678,000" },
    ],
  },
  {
    icon: <Average />,
    title: "Average Beta",
    value: "0.92",
    data: [
      { title: "Industry Beta", value: "0.76" },
      { title: "Subsidiary Beta", value: "1.07" },
    ],
  },
];

export const export_btn = [
  {
    icon: <Excel />,
    title: "Export Analysis (Excel)",
  },
  {
    icon: <Pdf />,
    title: "Export PDF",
  },
];

export const companies_header = [
  "Company Name",
  "Business Description",
  "Country",
  "Debt/Assets",
  "Beta",
  "",
];

export const companies = [
  {
    name: "Communication & System Solution",
    description:
      "Afcon Holdings Ltd develops and executes construction projects...",
    country: "Germany",
    debt: "0.28%",
    beta: "0.93",
  },
  {
    name: "Harn Engineering Solutions Public",
    description:
      "BELIMO Holding AG, together with its subsidiaries, develops...",
    country: "Switzerland",
    debt: "4.42%",
    beta: "0.40",
  },
  {
    name: "Intraco Limited",
    description:
      "Communication & System Solution Public Company Limited, together...",
    country: "Thailand",
    debt: "3.61%",
    beta: "0.33",
  },
  {
    name: "Solar A/S",
    description:
      "Exail Technologies provides robotics, maritime, navigation, aerospace...",
    country: "France",
    debt: "27.58%",
    beta: "1.15",
  },
  {
    name: "Teikoku Sen-i Co., Ltd.",
    description:
      "FITTERS Diversified Berhad, an investment holding company, trade...",
    country: "Singapore",
    debt: "0.13%",
    beta: "0.42",
  },
  {
    name: "BELIMO Holding AG",
    description:
      "Harn Engineering Solutions Public Company Limited design, install...",
    country: "Denmark",
    debt: "129.88%",
    beta: "0.29",
  },
  {
    name: "Solar A/S",
    description:
      "FITTERS Diversified Berhad, an investment holding company, trade...",
    country: "Switzerland",
    debt: "27.58%",
    beta: "0.40",
  },
];

export const reports_header = [
  "Company Name",
  "Report Type",
  "Country",
  "Date created",
  "",
];

export const reports = [
  {
    name: "Kanik Electronics Private Limited",
    type: "Company value",
    country: "Israel",
    date: "28/10/2012",
  },
  {
    name: "Macro Commerce Pvt Ltd.",
    type: "Company value",
    country: "Switzerland",
    date: "18/09/2016",
  },
  {
    name: "R.S. Ajit Singh and Company (Automotives)",
    type: "Company value",
    country: "Thailand",
    date: "12/06/2020",
  },
  {
    name: "Affinity Beauty Salon Private Limited",
    type: "Company value",
    country: "Singapore",
    date: "12/06/2020",
  },
  {
    name: "Raman Ispat Private Limited",
    type: "Company value",
    country: "India",
    date: "07/05/2016",
  },
  {
    name: "Kanik Electronics Private Limited",
    type: "Company value",
    country: "Israel",
    date: "28/10/2012",
  },
  {
    name: "Macro Commerce Pvt Ltd.",
    type: "Company value",
    country: "Switzerland",
    date: "18/09/2016",
  },
  {
    name: "R.S. Ajit Singh and Company (Automotives)",
    type: "Company value",
    country: "Thailand",
    date: "12/06/2020",
  },
  {
    name: "Affinity Beauty Salon Private Limited",
    type: "Company value",
    country: "Singapore",
    date: "12/06/2020",
  },
  {
    name: "Raman Ispat Private Limited",
    type: "Company value",
    country: "India",
    date: "07/05/2016",
  },
];

export const select_items = [
  {
    icon: <ExportExcel />,
    title: "Export Analysis (Excel)",
  },
  {
    icon: <ExportPdf />,
    title: "Export PDF",
  },
  {
    icon: <Delete />,
    title: "Remove",
  },
];
