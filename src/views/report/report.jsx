"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, TableData } from "@/components";
import { Excel, OpenDrawer, Order, Pdf, Tooltip } from "@/icons";
import {
  statistics,
  companies,
  companies_header,
  export_btn,
} from "@/constants/data";
import RightDrawer from "./drawer";

const Report = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };
  const handleSave = () => {
    router.push("/dashboard");
  };

  const handleEdit = () => {};

  return (
    <div className="flex justify-center bg-white min-h-[100vh] h-full">
      <div className="max-w-[1440px] w-full py-4 px-4 lg:px-8 sm:px-12">
        <div className="flex justify-between lg:items-center flex-col gap-y-6 md:flex-row border-b border-[#D4D4D8] pb-4">
          <div className="flex gap-2">
            <Image
              src="/assets/simple-logo.svg"
              alt="logo"
              width={42}
              height={20}
            />
            <p className="font-mulish font-bold text-[24px] text-primary">
              Report preview
            </p>
          </div>
          <div className="flex gap-2 sm:items-center justify-end lg:justify-stretch flex-wrap gap-y-4">
            <Button text="Back and edit" handleClick={handleEdit} />
            <Button text="Save and Continue" handleClick={handleSave} isFull />
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row gap-y-6 text-sm text-gray-500 mt-8">
          <div>
            <h1 className="text-[24px] font-bold font-mulish text-primary leading-tight">
              Company Valuation Report - FR1012
            </h1>
            <p className="text-[#52525B] font-mulish font-medium text-sm mt-3">
              2024-08-17{" "}
              <span className="border-l border-[#E4E4E7] text-[#52525B] pl-2 ml-1">
                France
              </span>
            </p>
          </div>
          <div className="flex space-x-3 flex-wrap gap-y-4">
            {export_btn?.map((item) => (
              <button
                key={item?.title}
                className="bg-[#F4F6F3] px-4 h-fit w-fit py-[10px] rounded-full text-primary font-semibold text-sm font-mulish text-nowrap transition-all duration-300 scale-1 hover:scale-[1.025] flex gap-2 items-center"
              >
                {item?.icon} <span>{item?.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
          {statistics?.map((item) => (
            <div
              key={item?.title}
              className="p-6 border border-[#E4E4E7] rounded-[16px] hover:shadow-[6px_4px_14px_1px_#dcdcdc] scale-1 hover:scale-[1.025] transition-all duration-500"
            >
              <div className="flex justify-between flex-col sm:flex-row gap-y-4 gap-4 mb-8 items-center">
                <div className="flex items-center gap-2">
                  {item?.icon}
                  <h2 className="font-mulish font-bold text-primary">
                    {item?.title}
                  </h2>
                  <Tooltip />
                </div>
                <p className="text-[32px] font-bold text-primary font-mulish">
                  {item?.value}
                </p>
              </div>
              <div className="flex gap-2 flex-col sm:flex-row">
                {item?.data?.map((item2) => (
                  <div
                    key={item?.title}
                    className={`bg-[#F6F9F6] px-2 py-4 rounded-[8px] flex-1`}
                  >
                    <p className="font-mulish font-semibold text-xs text-[#52525B] mb-2">
                      {item2?.title}
                    </p>
                    <p className="font-mulish font-bold text-primary">
                      {item2?.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-primary mb-4 font-mulish">
          Comparable Companies
        </h2>
        <div className="overflow-x-auto rounded-[16px] border border-[#E4E4E7] hover:shadow-[6px_4px_14px_1px_#dcdcdc] transition-all">
          <table className="min-w-full">
            <thead>
              <tr className="text-left rounded-t-[16px] border-b border-[#E4E4E7]">
                {companies_header?.map((item, index) => (
                  <th
                    key={item}
                    className={`px-3 py-3 text-[14px] font-medium text-[#52525B] ${
                      index === 0 ? "rounded-tl-lg" : ""
                    } ${
                      index === companies_header.length - 1
                        ? "rounded-tr-lg"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item}</span>{" "}
                      {(index === companies_header?.length - 3 ||
                        index === companies_header?.length - 2) && <Order />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr
                  key={company.description}
                  className="text-[#D4D4D4] hover:text-primary hover:bg-[#F6F9F6] cursor-pointer"
                  onClick={toggleMenu}
                >
                  <TableData text={company?.name} color="text-primary" isBold />
                  <TableData
                    text={company?.description}
                    color="text-[#52525B]"
                  />
                  <TableData text={company?.country} color="text-primary" />
                  <TableData text={company?.debt} color="text-[#18181B]" />
                  <TableData text={company?.beta} color="text-[#18181B]" />
                  <td className="px-3 py-6">
                    <OpenDrawer />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RightDrawer open={open} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Report;
