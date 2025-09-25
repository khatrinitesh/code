import { FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { taskData } from "./data";

const TasksTabbed = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Table Head */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              "Task",
              "Start Date",
              "Meeting Date",
              "Response Due",
              "Response Date",
              "Status",
              "Assigned To",
              "Action",
            ].map((label, index) => (
              <th
                key={index}
                className="text-left px-3 py-[6px] montserrat-semibold border border-[#b2bcc7]"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {taskData.map((row, idx) => (
            <tr
              key={row.id}
              className={`${idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}`}
            >
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.task}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.startDate}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.meetingDate}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.responseDue}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.responseDate}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.status}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                {row.assignedTo}
              </td>
              <td className="px-3 py-[5px] border border-[#b2bcc7]">
                <div className="flex space-x-2 text-[#1b7398] items-center">
                  <FaRegEye className="cursor-pointer" title="View" />
                  <FaEdit className="cursor-pointer" title="Edit" />
                  <FaRegTrashAlt className="cursor-pointer" title="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTabbed;
