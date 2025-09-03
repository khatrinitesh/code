import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { fieldCellData, fieldHeadData } from "./dispatchData";

const borderRight = "border-r-[1px] border-[#1b7398]";

const DispatcHTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {fieldHeadData.map((col, index) => (
              <th
                key={col.id}
                className={`text-left px-4 py-[3px] text-extraSmallDescription poppins-semibold ${
                  index < fieldHeadData.length - 1 ? borderRight : ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fieldCellData.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              {[
                row.project,
                row.contractor,
                row.startDate,
                row.requestDate,
                row.requestBy,
                row.comments,
              ].map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-[3px] text-extraSmallDescription poppins-regular ${
                    colIndex < fieldHeadData.length - 1 ? borderRight : ""
                  }`}
                >
                  {value}
                </td>
              ))}
              <td className="px-4 py-[3px] space-x-2">
                <button className="cursor-pointer" title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button className="cursor-pointer" title="Edit">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button className="cursor-pointer" title="Delete">
                  <FaRegTrashAlt className="text-[#1b7398]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DispatcHTable;
