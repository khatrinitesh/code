import React from "react";
import { colors } from "../../constants/constants";

const TableFormatComponent = ({
  caption,
  rows,
  colorKey = "color1",
  thead = {},
}) => {
  const {
    fieldCol1 = "Column 1",
    fieldCol2 = "Column 2",
    fieldCol3 = "Column 3",
  } = thead;

  const theme = colors[colorKey] || colors.color1;

  const { caption: captionStyle } = colors;

  const { rowAlt, headerBg, headerText, borderRight } = theme;

  return (
    <div className="w-full overflow-x-auto">
      {/* Table Header */}
      <table className="w-full table-fixed border-collapse text-sm">
        <caption
          className="text-left px-4 py-[5px] montserrat-medium text-extraSmallDescription"
          style={{
            backgroundColor: captionStyle.bg,
            color: captionStyle.text,
          }}
        >
          {caption}
        </caption>
        <thead
          className="montserrat-regular text-extraSmallDescription"
          style={{ backgroundColor: headerBg, color: headerText }}
        >
          <tr>
            <th
              className="w-[33.33%] text-left px-4 py-[5px] border-r"
              style={{ borderColor: borderRight }}
            >
              {fieldCol1}
            </th>
            <th
              className="w-[33.33%] text-left px-4 py-[5px] border-r"
              style={{ borderColor: borderRight }}
            >
              {fieldCol2}
            </th>
            <th className="w-[33.33%] text-left px-4 py-[5px]">{fieldCol3}</th>
          </tr>
        </thead>
      </table>

      {/* Scrollable Tbody */}
      <div className="max-h-[140px] overflow-y-auto vertical-scrollbar">
        <table className="w-full table-fixed border-collapse text-sm">
          <tbody className="montserrat-regular text-extraSmallDescription">
            {rows.map((member, rowIndex) => {
              const bgColor = rowIndex % 2 === 0 ? "#ffffff" : rowAlt;

              return (
                <tr
                  key={rowIndex}
                  className="border-b border-b-[#b5bfcd] last:border-none"
                  style={{ backgroundColor: bgColor }}
                >
                  <td
                    className="w-[33.33%] px-4 py-[5px] border-r text-[var(--color1)]"
                    style={{ borderColor: borderRight }}
                  >
                    {member.field1}
                  </td>
                  <td
                    className="w-[33.33%] px-4 py-[5px] border-r"
                    style={{ borderColor: borderRight }}
                  >
                    {member.field2}
                  </td>
                  <td className="w-[33.33%] px-4 py-[5px]">{member.field3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableFormatComponent;
