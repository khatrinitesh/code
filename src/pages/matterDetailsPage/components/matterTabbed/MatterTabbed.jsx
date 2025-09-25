import { useState } from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Row 1 */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Case Number:
          </label>
          <input
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          />
        </div>

        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Grievance Owner:
          </label>
          <select
            name="grievanceOwner"
            value={formData.grievanceOwner}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          >
            {grievanceOwners.map((owner) => (
              <option key={owner}>{owner}</option>
            ))}
          </select>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Internal #:
          </label>
          <input
            type="text"
            name="internalNumber"
            value={formData.internalNumber}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          />
        </div>

        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Type of Claim:
          </label>
          <input
            type="text"
            name="typeOfClaim"
            value={formData.typeOfClaim}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          />
        </div>

        {/* Row 3 */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Grievance Type:
          </label>
          <input
            type="text"
            name="grievanceType"
            value={formData.grievanceType}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          />
        </div>

        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Attorney :
          </label>
          <input
            type="text"
            name="attorney"
            value={formData.attorney}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          />
        </div>

        {/* Row 4 */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Grievance Status:
          </label>
          <select
            name="grievanceStatus"
            value={formData.grievanceStatus}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          >
            {grievanceStatuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-[10px] items-start flex-col md:flex-row">
          <label className="md:w-[30%] block text-[#010d4a] mb-1">
            Disposition:
          </label>
          <select
            name="disposition"
            value={formData.disposition}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white"
          >
            {dispositions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row md:col-span-2">
          <label className="md:w-[12%] block text-[#010d4a] mb-1">
            Description:
          </label>
          <textarea
            name="description"
            rows={2}
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white resize-none"
          />
        </div>

        {/* Grievance Details */}
        <div className="flex gap-[10px] items-start flex-col md:flex-row md:col-span-2">
          <label className="md:w-[12%] block text-[#010d4a] mb-1">
            Grievance Details:
          </label>
          <textarea
            name="grievanceDetails"
            rows={3}
            value={formData.grievanceDetails}
            onChange={handleChange}
            className="w-full border border-[#a1b4c4] rounded px-2 py-[4px] bg-white resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MatterTabbed;
