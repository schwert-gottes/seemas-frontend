"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button as MButton,
} from "@material-tailwind/react";
import { reports, reports_header } from "@/constants/data";
import {
  Bell,
  Delete,
  ExportExcel,
  ExportPdf,
  Filter,
  Order,
  Reports,
  Search,
  Team,
  ThreeDots,
} from "@/icons";
import { Button } from "@/components";

const Dashboard = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle dropdown for each row
  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleNewReport = () => {};

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] w-full flex">
        <aside className="w-[280px] bg-[#F4F6F3] p-4 py-8 border-r min-h-screen">
          <Image
            src="/assets/logo-horizontal.svg"
            alt="logo"
            width={120}
            height={50}
          />
          <nav>
            <button className="flex items-center gap-3 font-mulish font-bold text-secondary bg-[#E8EEE7] w-full rounded-full p-4 mt-8">
              <Reports />
              <span>Reports</span>
            </button>
            <button className="flex items-center gap-3 font-mulish font-bold text-[#52525B] hover:text-secondary hover:bg-[#E8EEE7] w-full rounded-full p-4 mb-8 mt-4">
              <Team />
              <span>Team</span>
            </button>
            <Button
              text="+ New report"
              handleClick={handleNewReport}
              isFull
              isWidth
            />
          </nav>
        </aside>

        <main className="flex-1 px-6">
          <div className="flex justify-between items-center py-4 border-b border-[#E4E4E7]">
            <div className="relative w-[270px]">
              <input
                type="text"
                placeholder="Search"
                className="w-[270px] py-2 pl-10 pr-4 bg-[#F4F6F3] rounded-full focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="border-r border-[#E4E4E7] pr-8 h-fit">
                <Bell />
              </div>
              <Image
                src="/assets/avatar.svg"
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex justify-between items-center my-6">
            <h1 className="font-mulish font-bold text-[24px] text-primary">
              Reports
            </h1>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by company name"
                  className="w-[270px] py-[10px] pl-10 pr-4 border border-[#E4E4E7] rounded-full focus:outline-none"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search />
                </div>
              </div>
              <button className="border border-[#E4E4E7] px-4 w-fit h-fit py-[10px] rounded-full text-[#27272A] font-semibold text-sm font-mulish text-nowrap transition-all duration-300 scale-1 hover:scale-[1.025] flex gap-2 items-center">
                <Filter /> <span>Filter</span>
              </button>
              <Button
                text="+ New report"
                handleClick={handleNewReport}
                isFull
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-[16px] border border-[#E4E4E7] hover:shadow-[6px_4px_14px_1px_#dcdcdc] transition-all mb-8">
            <table className="min-w-full">
              <thead>
                <tr className="text-left rounded-t-[16px] border-b border-[#E4E4E7]">
                  {reports_header?.map((item, index) => (
                    <th
                      key={index}
                      className={`px-3 py-3 text-[14px] font-medium text-[#52525B] ${
                        index === 0 ? "rounded-tl-lg" : "" // Left corner
                      } ${
                        index === reports_header.length - 1
                          ? "rounded-tr-lg"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item}</span>{" "}
                        {index !== reports_header.length - 1 && <Order />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reports.map((company, idx) => (
                  <tr
                    key={idx}
                    className="text-[#D4D4D4] hover:text-primary hover:bg-[#F6F9F6] cursor-pointer"
                  >
                    <td className="px-3 py-6 font-mulish font-bold text-sm text-primary">
                      {company.name}
                    </td>
                    <td className="px-3 py-6 font-mulish font-medium text-sm text-[#52525B]">
                      {company.type}
                    </td>
                    <td className="px-3 py-6 font-mulish font-medium text-sm text-primary">
                      {company.country}
                    </td>
                    <td className="px-3 py-6 font-mulish font-medium text-sm text-[#18181B]">
                      {company.date}
                    </td>
                    <td className="py-3 px-4 text-right relative">
                      <Menu
                        open={activeDropdown === idx}
                        placement="right-start"
                        handler={() => toggleDropdown(idx)}
                      >
                        <MenuHandler>
                          <MButton className="text-[#A3A3A3] hover:text-primary bg-transparent shadow-none hover:shadow-none">
                            <ThreeDots />
                          </MButton>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem>
                            <div className="font-mulish font-semibold text-sm text-primary flex items-center gap-2 hover:text-secondary">
                              <ExportExcel />{" "}
                              <span>Export Analysis (Excel)</span>
                            </div>
                          </MenuItem>
                          <MenuItem>
                            <div className="font-mulish font-semibold text-sm text-primary flex items-center gap-2 hover:text-secondary">
                              <ExportPdf /> <span>Export PDF</span>
                            </div>
                          </MenuItem>
                          <MenuItem>
                            <div className="font-mulish font-semibold text-sm text-primary flex items-center gap-2 hover:text-secondary">
                              <Delete /> <span>Remove</span>
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
