import { FaExclamationCircle } from "react-icons/fa";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import FieldInput from "./../../components/fieldInput/FieldInput";
import { useState } from "react";

const GrievancesPage = () => {
  const [formData, setFormData] = useState({
    memberNumber: "",
    lastName: "",
    firstName: "",
    last4ssn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="grievancesPage ">
      <SectionTitleComponent>
        <FaExclamationCircle className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          Grievances: <span className="text-white">Lookup</span>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent grid gap-[10px] w-full p-[20px]">
        <div className="fillFormBlock">
          <form className="grid gap-[10px]">
            <SearchComponent
              placeholder="Quick Grievance Search"
              maxLength={50}
              disabled={false}
              className="w-full md:max-w-[20%] rounded-full"
            />
            <div className="innerFillForm bg-[#d1e3ea] border-[1px] border-[#b1bcc6] p-[10px] flex gap-[10px] grid-cols-2 w-full">
              <div className="leftContent items-center flex gap-[5px] w-1/2">
                <label
                  htmlFor="memberNumber"
                  className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                >
                  Member #:
                </label>
                <div className="ml-3 flex-1 w-1/2">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.memberNumber}
                    onChange={handleChange}
                    placeholder=""
                    className="md:!max-w-[50%]"
                  />
                </div>
              </div>
              <div className="rightContent items-center flex gap-[5px] w-1/2">
                <label
                  htmlFor="memberNumber"
                  className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                >
                  Member #:
                </label>
                <div className="ml-3 flex-1 w-1/2">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.memberNumber}
                    onChange={handleChange}
                    placeholder=""
                    className="md:!max-w-[50%]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievancesPage;
