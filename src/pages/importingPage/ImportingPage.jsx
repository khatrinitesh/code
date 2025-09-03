import { useState } from "react";
import FieldDropdown from "../../components/fieldDropdown/FieldDropdown";
import { DROPDOWN_OPTIONS_1 } from "../../constants/constants";

const ImportingPage = () => {
  const [status, setStatus] = useState("");
  return (
    <div className="importingPage m-[10px]">
      <div className="innerContent grid gap-[10px] w-full">
        <div className="fieldBox flex items-center gap-[10px]">
          <span className="fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
            Select Import Layout:
          </span>
          <div className="box">
            <FieldDropdown
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={DROPDOWN_OPTIONS_1}
              maxLength={10}
              disabled={false}
              className="w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportingPage;
