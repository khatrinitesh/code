import { FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { notesData } from "./data";

const NotesTabbed = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Header */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {["Notes", "Logged By", "Date", "Action"].map((header, idx) => (
              <th
                key={idx}
                className="text-left px-3 py-[6px] border border-[#b2bcc7] montserrat-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {notesData.map((entry, idx) => (
            <tr
              key={entry.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.note}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.loggedBy}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.date}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                <div className="flex space-x-2 text-[#1b7398] items-center justify-center">
                  <FaRegEye title="View" className="cursor-pointer" />
                  <FaEdit title="Edit" className="cursor-pointer" />
                  <FaRegTrashAlt title="Delete" className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotesTabbed;
