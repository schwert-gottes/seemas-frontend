"use client";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { Cross, OpenDrawer } from "@/icons";

const RightDrawer = ({ open, toggleMenu }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {open && <div className="fixed inset-0 bg-black opacity-60"></div>}
      <Drawer
        placement="right"
        open={open}
        onClose={toggleMenu}
        overlay={false}
        size={700}
        className="px-5 py-8 bg-white overflow-y-auto rounded-l-[24px]"
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="font-mulish font-bold text-primary text-[20px]">
            Afcon Holdings Ltd
          </p>
          <div className="flex gap-10 items-center mr-4">
            <div className="rotate-180">
              <OpenDrawer />
            </div>
            <div className="pr-8 py-2 border-r-2 border-[#E4E4E7]">
              <OpenDrawer />
            </div>
            <div onClick={toggleMenu} className="w-fit h-fit cursor-pointer">
              <Cross width={14} height={14} />
            </div>
          </div>
        </div>
        <div>
          <p className="font-mulish font-bold text-primary mt-10 mb-3">
            Business Description
          </p>
          <p className="font-mulish font-medium text-primary text-[14px] mb-6">
            Afcon Holdings Ltd develops and executes construction projects in
            Israel and internationally. It undertakes civil engineering
            projects, including shopping malls and hotels, assisted-living
            facilities, office buildings, logistic centers, and IT centers;
            electro-mechanical, security-related, and parking system projects;
            and technology-enhanced projects for electromechanical systems.
          </p>
          <p className="font-mulish font-medium text-primary text-[14px]">
            The company also offers services for electricity, air conditioning,
            plumbing, cooling, and low voltage electricity; electric boards for
            high voltage gas-insulated and air-insulated switchgear, and low
            voltage; gas- and air-insulated disconnectors; consultancy and
            technical solutions for advanced systems and equipment; services for
            air conditioning and ventilation systems; and hybrid systems and
            technological solutions for water and wastewater.
          </p>
          {show && (
            <p className="font-mulish font-medium text-primary text-[14px] mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus nam nulla nemo commodi quis ullam beatae tenetur itaque
              aspernatur delectus?
            </p>
          )}
          <p
            onClick={toggleShow}
            className="font-mulish font-semibold text-secondary text-[14px] cursor-pointer mt-3"
          >
            {show ? "Show less" : "Show more"}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default RightDrawer;
