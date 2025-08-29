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
    <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-6">
      <table className="w-full border-collapse text-sm">
        <caption
          className="text-left px-4 py-2 font-semibold rounded-t-md"
          style={{
            backgroundColor: captionStyle.bg,
            color: captionStyle.text,
          }}
        >
          {caption}
        </caption>
        <thead>
          <tr style={{ backgroundColor: headerBg, color: headerText }}>
            <th
              className="text-left px-4 py-2 border-r-[1px]"
              style={{ borderColor: borderRight }}
            >
              {fieldCol1}
            </th>
            <th
              className="text-left px-4 py-2 border-r-[1px]"
              style={{ borderColor: borderRight }}
            >
              {fieldCol2}
            </th>
            <th className="text-left px-4 py-2">{fieldCol3}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((member, rowIndex) => {
            const bgColor = rowIndex % 2 === 0 ? "#ffffff" : rowAlt;

            return (
              <tr
                key={rowIndex}
                className="border-b last:border-none"
                style={{ backgroundColor: bgColor }}
              >
                <td
                  className="px-4 py-2 border-r-[1px]"
                  style={{ borderColor: borderRight }}
                >
                  {member.field1}
                </td>
                <td
                  className="px-4 py-2 border-r-[1px]"
                  style={{ borderColor: borderRight }}
                >
                  {member.field2}
                </td>
                <td className="px-4 py-2">{member.field3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableFormatComponent;
