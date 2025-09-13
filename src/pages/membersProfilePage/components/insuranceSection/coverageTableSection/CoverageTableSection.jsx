import { coverageData } from "./data";
import { FaEdit, FaTrash } from "react-icons/fa";

const CoverageTableSection = () => {
  return (
    <div className="w-full overflow-x-auto border border-[#ccc]">
      <table className="w-full text-left border-collapse text-extraSmallDescription montserrat-regular">
        <thead>
          <tr>
            <th
              colspan="13"
              className=" p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription w-full text-start"
            >
              Coverage Details
            </th>
          </tr>
          <tr className="bg-[#8db9cb] text-black montserrat-semibold text-extraSmallDescription">
            <th className="p-2 ">Plan Name</th>
            <th className="p-2 ">Group#</th>
            <th className="p-2 ">Member ID#</th>
            <th className="p-2 ">Effective Date</th>
            <th className="p-2 ">Notes</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {coverageData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#f2f9ff]" : "bg-[#d3e6f5]"}
            >
              <td className="p-2  border-r-[1px] border-r-[#1b7398] text-black montserrat-medium text-extraSmallDescription">
                {item.planName}
              </td>
              <td className="p-2  border-r-[1px] border-r-[#1b7398] text-black montserrat-medium text-extraSmallDescription">
                {item.groupNumber}
              </td>
              <td className="p-2  border-r-[1px] border-r-[#1b7398] text-black montserrat-medium text-extraSmallDescription">
                {item.memberId}
              </td>
              <td className="p-2  border-r-[1px] border-r-[#1b7398] text-black montserrat-medium text-extraSmallDescription">
                {item.effectiveDate ? item.effectiveDate : ""}
              </td>
              <td className="p-2  border-r-[1px] border-r-[#1b7398]">
                {item.notes || ""}
              </td>
              <td className="p-2  border-r-[1px] border-r-[#1b7398] flex gap-2 items-center">
                <button title="Edit">
                  <FaEdit className="text-[#1b7398] text-extraSmallDescription" />
                </button>
                <button title="Delete">
                  <FaTrash className="text-[#1b7398] text-extraSmallDescription" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoverageTableSection;
