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
    <div className="overflow-x-auto w-full max-w-4xl mx-auto">
      <table className="w-full border-collapse text-sm">
        <caption
          className="text-left px-4 py-[5px] montserrat-medium text-extrasmallDescription rounded-t-md"
          style={{
            backgroundColor: captionStyle.bg,
            color: captionStyle.text,
          }}
        >
          {caption}
        </caption>
        <thead className="montserrat-regular text-extraSmallDescription">
          <tr style={{ backgroundColor: headerBg, color: headerText }}>
            <th
              className="text-left px-4 py-[5px] border-r-[1px]"
              style={{ borderColor: borderRight }}
            >
              {fieldCol1}
            </th>
            <th
              className="text-left px-4 py-[5px] border-r-[1px]"
              style={{ borderColor: borderRight }}
            >
              {fieldCol2}
            </th>
            <th className="text-left px-4 py-[5px]">{fieldCol3}</th>
          </tr>
        </thead>
        <tbody className="montserrat-regular text-extraSmallDescription">
          {rows.map((member, rowIndex) => {
            const bgColor = rowIndex % 2 === 0 ? "#ffffff" : rowAlt;

            return (
              <tr
                key={rowIndex}
                className="border-b last:border-none"
                style={{ backgroundColor: bgColor }}
              >
                <td
                  className="px-4 py-[5px] border-r-[1px] text-[var(--color1)]"
                  style={{ borderColor: borderRight }}
                >
                  {member.field1}
                </td>
                <td
                  className="px-4 py-[5px] border-r-[1px]"
                  style={{ borderColor: borderRight }}
                >
                  {member.field2}
                </td>
                <td className="px-4 py-[5px]">{member.field3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableFormatComponent;
