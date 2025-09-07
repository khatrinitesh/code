import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import { savedQueriesData } from "./reportsData";

const TableSavedQueries = () => {
  const [data, setData] = useState(savedQueriesData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[key] ?? "";
      const bValue = b[key] ?? "";

      if (typeof aValue === "boolean") {
        return direction === "ascending" ? aValue - bValue : bValue - aValue;
      }

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sorted);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="!text-[#b5f5f8]" />;
    return sortConfig.direction === "ascending" ? (
      <FaSortUp className="!text-[#b5f5f8]" />
    ) : (
      <FaSortDown className="text-[#b5f5f8]" />
    );
  };

  const toggleCheckbox = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, selected: !row.selected } : row
    );
    setData(updatedData);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b1bcc6]">
        <thead style={{ backgroundColor: "#8fbacd", color: "#07134f" }}>
          <tr>
            <th
              colSpan={6}
              className="text-white bg-[#1b7398] text-extraSmallDescription montserrat-semibold text-left p-[10px]"
            >
              Saved Queries
            </th>
          </tr>
          <tr>
            <th
              className="px-4 py-[6px] text-left text-extraSmallDescription montserrat-semibold border-r border-[#1b7398] cursor-pointer"
              onClick={() => sortData("reportName")}
            >
              <div className="flex items-center gap-1">
                Query Name {renderSortIcon("reportName")}
              </div>
            </th>
            <th
              className="px-4 py-[6px] text-left text-extraSmallDescription montserrat-semibold border-r border-[#1b7398] cursor-pointer"
              onClick={() => sortData("description")}
            >
              <div className="flex items-center gap-1">
                Description {renderSortIcon("description")}
              </div>
            </th>
            <th
              className="px-4 py-[6px] text-left text-extraSmallDescription montserrat-semibold border-r border-[#1b7398] cursor-pointer"
              onClick={() => sortData("type")}
            >
              <div className="flex items-center gap-1">
                Criteria Fields {renderSortIcon("type")}
              </div>
            </th>
            <th
              className="px-4 py-[6px] text-left text-extraSmallDescription montserrat-semibold border-r border-[#1b7398] cursor-pointer"
              onClick={() => sortData("dateCreated")}
            >
              <div className="flex items-center gap-1">
                Date Created {renderSortIcon("dateCreated")}
              </div>
            </th>
            <th
              className="px-4 py-[6px] text-left text-extraSmallDescription montserrat-semibold border-r border-[#1b7398] cursor-pointer"
              onClick={() => sortData("createdBy")}
            >
              <div className="flex items-center gap-1">
                Created By {renderSortIcon("createdBy")}
              </div>
            </th>
            <th
              className="px-4 py-[6px] text-center text-extraSmallDescription montserrat-semibold cursor-pointer"
              onClick={() => sortData("selected")}
            >
              <div className="flex items-center justify-center gap-1">
                Select {renderSortIcon("selected")}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              <td className="text-extraSmallDescription montserrat-semibold px-4 py-[6px]  border-r border-[#1b7398]">
                {row.reportName}
              </td>
              <td className="text-extraSmallDescription montserrat-medium px-4 py-[6px]  border-r border-[#1b7398]">
                {row.description}
              </td>
              <td className="text-extraSmallDescription montserrat-medium px-4 py-[6px]  border-r border-[#1b7398]">
                {row.type}
              </td>
              <td className="text-extraSmallDescription montserrat-medium px-4 py-[6px]  border-r border-[#1b7398]">
                {row.dateCreated}
              </td>
              <td className="text-extraSmallDescription montserrat-medium px-4 py-[6px]  border-r border-[#1b7398]">
                {row.createdBy}
              </td>
              <td className="text-extraSmallDescription montserrat-medium px-4 py-[6px] text-center">
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => toggleCheckbox(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSavedQueries;
