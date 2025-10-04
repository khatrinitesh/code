import { useState } from "react";
import FieldInput from "../../../../components/fieldInput/FieldInput";

const MatterTabbed = () => {
  const [formData, setFormData] = useState({
    caseNumber: "003-2025",
    internalNumber: "Rosen",
    grievanceType: "Joel",
    grievanceStatus: "Open",
    grievanceOwner: "Sgt. Maria Bennett",
    typeOfClaim: "Disciplinary Action",
    attorney: "Marcus Ellison, Esq.",
    disposition: "Pending",
    description:
      "Officer received a 3-day suspension without union representation during the disciplinary meeting, violating CBA protocols.",
    grievanceDetails:
      "Officer Joel Rosen was disciplined following a patrol incident on 2/4/2025. No union rep was present during the hearing, and no formal investigation was conducted. Union seeks removal of suspension and back pay.",
  });

  const grievanceOwners = [
    "Sgt. Maria Bennett",
    "Lt. James Wilson",
    "Capt. Rachel Lee",
  ];
  const grievanceStatuses = ["Open", "Closed", "Under Review"];
  const dispositions = ["Pending", "Resolved", "Dismissed"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#edf4f7] p-[10px] text-extraSmallDescription montserrat-medium">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:max-w-[80%]">
        {/* Utility for all rows */}
        {/** Reusable field wrapper */}
        {[
          { label: "Case Number:", name: "caseNumber", type: "text" },
          { label: "Internal #:", name: "internalNumber", type: "text" },
          { label: "Grievance Type:", name: "grievanceType", type: "text" },
          { label: "Type of Claim:", name: "typeOfClaim", type: "text" },
          { label: "Attorney:", name: "attorney", type: "text" },
        ].map((field) => (
          <div
            key={field.name}
            className="flex gap-[10px] items-start md:items-center flex-col md:flex-row"
          >
            <label className="md:w-[30%] text-[#010d4a] mb-1">
              {field.label}
            </label>
            <div className="w-full">
              <FieldInput
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="!border-[#1b7398] rounded w-full"
              />
            </div>
          </div>
        ))}

        {/* Grievance Owner */}
        <div className="flex gap-[10px] items-start md:items-center flex-col md:flex-row">
          <label className="md:w-[30%] text-[#010d4a] mb-1">
            Grievance Owner:
          </label>
          <div className="w-full">
            <select
              name="grievanceOwner"
              value={formData.grievanceOwner}
              onChange={handleChange}
              className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white"
            >
              {grievanceOwners.map((owner) => (
                <option key={owner}>{owner}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grievance Status */}
        <div className="flex gap-[10px] items-start md:items-center flex-col md:flex-row">
          <label className="md:w-[30%] text-[#010d4a] mb-1">
            Grievance Status:
          </label>
          <div className="w-full">
            <select
              name="grievanceStatus"
              value={formData.grievanceStatus}
              onChange={handleChange}
              className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white"
            >
              {grievanceStatuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Disposition */}
        <div className="flex gap-[10px] items-start md:items-center flex-col md:flex-row">
          <label className="md:w-[30%] text-[#010d4a] mb-1">Disposition:</label>
          <div className="w-full">
            <select
              name="disposition"
              value={formData.disposition}
              onChange={handleChange}
              className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white"
            >
              {dispositions.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Description (spanning 2 columns) */}
        <div className="flex gap-[10px] items-start md:items-center flex-col md:flex-row md:col-span-2">
          <label className="md:w-[15%] text-[#010d4a] mb-1">Description:</label>
          <div className="w-full">
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-[#1b7398] rounded px-2 py-[4px] bg-white resize-none"
            />
          </div>
        </div>

        {/* Grievance Details (spanning 2 columns) */}
        <div className="flex gap-[10px] items-start md:items-center flex-col md:flex-row md:col-span-2">
          <label className="md:w-[15%] text-[#010d4a] mb-1">
            Grievance Details:
          </label>
          <div className="w-full">
            <textarea
              name="grievanceDetails"
              rows={2}
              value={formData.grievanceDetails}
              onChange={handleChange}
              className="w-full border border-[#1b7398] rounded px-2 py-[4px] bg-white resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatterTabbed;
