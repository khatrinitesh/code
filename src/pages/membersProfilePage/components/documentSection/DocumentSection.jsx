import React from "react";
import FieldDropdown from "../../../../components/fieldDropdown/FieldDropdown";
import { DROPDOWN_OPTIONS_2 } from "../../../../constants/constants";
import Button from "../../../../components/button/Button";
import DocumentTable from "./DocumentTable";
import FieldCheckbox from "./../../../../components/fieldCheckbox/FieldCheckbox";

const DocumentSection = () => {
  return (
    <div className="grid gap-[10px]">
      <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
        <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
          Select File:
        </span>
        <div className="box flex flex-col md:flex-row md:items-center gap-[10px]">
          <FieldDropdown
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={DROPDOWN_OPTIONS_2}
            maxLength={10}
            disabled={true}
            className="w-64 text-[#6570a9]"
          />
          <div className="btnBlock flex gap-[10px]">
            <Button className="!mx-0" label="Browse" />
            <Button className="!mx-0" label="Upload" />
          </div>
        </div>
      </div>
      <FieldCheckbox label="Pin?" />
      <DocumentTable />
    </div>
  );
};

export default DocumentSection;
