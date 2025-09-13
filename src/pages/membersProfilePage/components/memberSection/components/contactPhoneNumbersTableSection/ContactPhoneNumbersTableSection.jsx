import { useState } from "react";
import { borderRight, initialPhoneData, typeOptions } from "./data";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const ContactPhoneNumbersTableSection = () => {
  const [phones, setPhones] = useState(initialPhoneData);

  const handleTypeChange = (id, newType) => {
    setPhones((prev) =>
      prev.map((item) => (item.id === id ? { ...item, type: newType } : item))
    );
  };

  const handleDefaultChange = (id) => {
    setPhones((prev) =>
      prev.map((item) => ({
        ...item,
        isDefault: item.id === id,
      }))
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-extraSmallDescription">
        <thead style={{ backgroundColor: "#8fbacd", color: "black" }}>
          <tr>
            <th
              colspan="5"
              className=" p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription w-full text-start"
            >
              Contact Phone Numbers
            </th>
          </tr>
          <tr>
            <th
              className={`text-left px-4 py-[3px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Type
            </th>
            <th
              className={`text-left px-4 py-[3px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Phone #
            </th>
            <th
              className={`text-left px-4 py-[3px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Comments
            </th>
            <th
              className={`text-left px-4 py-[3px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Set as Default
            </th>
            <th className="text-center px-4 py-[3px] montserrat-regular text-extraSmallDescription">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {phones.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              {/* Type Dropdown */}
              <td
                className={`montserrat-regular text-extraSmallDescription px-4 py-[3px] ${borderRight}`}
              >
                <select
                  value={row.type}
                  onChange={(e) => handleTypeChange(row.id, e.target.value)}
                  className="bg-transparent outline-none w-full"
                >
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>

              {/* Phone Number */}
              <td
                className={`px-4 py-[3px]  montserrat-regular text-extraSmallDescription ${borderRight}`}
              >
                {row.phone}
              </td>

              {/* Comments */}
              <td
                className={`px-4 py-[3px]  montserrat-regular text-extraSmallDescription ${borderRight}`}
              >
                {row.comments}
              </td>

              {/* Set as Default */}
              <td
                className={`px-4 py-[3px]  montserrat-regular text-extraSmallDescription ${borderRight}`}
              >
                <input
                  type="checkbox"
                  checked={row.isDefault}
                  onChange={() => handleDefaultChange(row.id)}
                />
              </td>

              {/* Actions */}
              <td className="px-4 py-[3px] flex items-center space-x-2 justify-center">
                <button title="Save">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button title="Cancel">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button title="Return to Members">
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

export default ContactPhoneNumbersTableSection;
