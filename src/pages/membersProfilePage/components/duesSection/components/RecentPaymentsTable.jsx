import React, { useState } from "react";
import { initialData } from "./data";
import { FaEdit, FaSort, FaTrash } from "react-icons/fa";

const RecentPaymentsTable = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...data].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      // For dates, parse them for comparison
      if (key === "paymentDate") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sorted);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-[#b5f5f8]" />;
    return sortConfig.direction === "ascending" ? (
      <FaSortUp className="text-[#b5f5f8]" />
    ) : (
      <FaSortDown className="text-[#b5f5f8]" />
    );
  };

  const handleEdit = (id) => {
    alert(`Edit row with id: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      setData(data.filter((row) => row.id !== id));
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#a0b6ce] text-sm">
        <thead style={{ backgroundColor: "#5a8baf", color: "#fff" }}>
          <tr>
            <th
              colspan="13"
              className=" p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription w-full text-start"
            >
              Recent Payments
            </th>
          </tr>
          <tr>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("dues")}
              title="Dues"
            >
              Dues {renderSortIcon("dues")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("perCapita")}
              title="Per Capita"
            >
              Per Capita {renderSortIcon("perCapita")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("massMutual")}
              title="Mass Mutual"
            >
              Mass Mutual {renderSortIcon("massMutual")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("mmlBayState")}
              title="MML Bay State"
            >
              MML Bay State {renderSortIcon("mmlBayState")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("insuranceCo")}
              title="Ins. Co"
            >
              Ins. Co {renderSortIcon("insuranceCo")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("offDutyIns")}
              title="Off Duty Ins."
            >
              Off Duty Ins. {renderSortIcon("offDutyIns")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("privacyProtection")}
              title="Prvcy Protect."
            >
              Prvcy Protect. {renderSortIcon("privacyProtection")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("promissoryNote")}
              title="Prom. Note"
            >
              Prom. Note {renderSortIcon("promissoryNote")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("genworth")}
              title="Genworth"
            >
              Genworth {renderSortIcon("genworth")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer "
              onClick={() => sortData("totalPaid")}
              title="Total Paid"
            >
              Total Paid {renderSortIcon("totalPaid")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("modifiedBy")}
              title="Modified By"
            >
              Modified By {renderSortIcon("modifiedBy")}
            </th>
            <th
              className="px-2 py-1 text-[#010d4a] text-extraSmallDescription montserrat-semibold  cursor-pointer"
              onClick={() => sortData("paymentDate")}
              title="Payment Date"
            >
              Payment Date {renderSortIcon("paymentDate")}
            </th>
            <th className="px-2 py-1 text-[#010d4a] text-extraSmallDescription ">
              Action
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
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.dues.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.perCapita.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.massMutual.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.mmlBayState.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.insuranceCo.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.offDutyIns.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.privacyProtection.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.promissoryNote.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium">
                {row.genworth.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  text-right montserrat-medium  text-black">
                ${row.totalPaid.toFixed(2)}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  montserrat-medium">
                {row.modifiedBy}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  montserrat-medium">
                {row.paymentDate}
              </td>
              <td className="px-2 py-1  text-extraSmallDescription  montserrat-medium flex justify-center gap-2 text-[#1b7398] cursor-pointer">
                <FaEdit onClick={() => handleEdit(row.id)} />
                <FaTrash onClick={() => handleDelete(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPaymentsTable;
