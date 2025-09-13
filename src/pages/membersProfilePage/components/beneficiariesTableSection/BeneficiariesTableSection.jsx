import { FaEdit, FaTrash } from "react-icons/fa";
import { beneficiariesData } from "./components/data";

const BeneficiariesTableSection = () => {
  return (
    <div className="w-full overflow-x-auto border border-[#ccc]">
      <table className="w-full text-left border-collapse text-extraSmallDescription montserrat-regular">
        <thead>
          <tr>
            <th
              colSpan="13"
              className="p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription text-start"
            >
              Beneficiaries
            </th>
          </tr>
          <tr className="bg-[#8db9cb] text-black montserrat-semibold text-extraSmallDescription">
            <th className="p-2">Full Name</th>
            <th className="p-2">Relationship</th>
            <th className="p-2">Insurance Type</th>
            <th className="p-2">Percentage</th>
            <th className="p-2">Notes</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {beneficiariesData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#f2f9ff]" : "bg-[#d3e6f5]"}
            >
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.fullName}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.relationship}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.insuranceType}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.percentage}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.notes || ""}
              </td>
              <td className="p-2 border-r border-[#1b7398] flex gap-2 items-center">
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

export default BeneficiariesTableSection;
