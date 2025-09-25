import { useState } from "react";
import FieldInput from "../../../../components/fieldInput/FieldInput";
import FieldTextAreaComponent from "./../../../../components/fieldTextAreaComponent/FieldTextAreaComponent";

const GrievanceInvestigationDetailsTabbed = () => {
  const [formData, setFormData] = useState({
    incidentDate: "12/29/2024",
    submittedDate: "01/02/2025",
    provisionViolated:
      "Disciplinary due process and right to union representation during investigatory meetings.",
    articleNumber: "14",
    sectionNumber: "3",
    otherContact: "Marcus Ellison, Esq.",
    mailingAddress: "1507 Union Ave, Suite 400, Denver, CO 80204",
    contactRole: "Legal Counsel – Police Union",
    additionalContacts: "Sgt. Maria Bennett, District 2 Union Rep.",
    incidentSummary:
      "Officer James Lee received a 3-day suspension for alleged insubordination during a post-incident debrief. Disciplinary meeting occurred without union representation, and no formal investigation was conducted.",
    requestedRemedy:
      "Requesting removal of suspension from personnel file, back pay for lost wages, and formal clarification of due process procedures.",
    supervisorResponse:
      'Supervisor stated the officer\'s tone was "disrespectful" but acknowledged no formal investigation was completed prior to the suspension. Open to further discussion.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#edf4f7] p-3 text-[13px] text-[#010d4a] montserrat-medium">
      <div className="grid grid-cols-1  gap-4">
        {/* Left Column */}
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="md:w-[20%]">Date of Incident:</label>
            <FieldInput
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              className=""
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="md:w-[20%]">Submitted Date:</label>
            <FieldInput
              type="date"
              name="submittedDate"
              value={formData.submittedDate}
              onChange={handleChange}
              className=""
            />
          </div>
        </div>

        {/* Provision Violated */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="flex flex-col md:flex-row md:w-[20%]">
            Provision Violated:
          </label>
          <FieldInput
            type="text"
            name="provisionViolated"
            value={formData.provisionViolated}
            onChange={handleChange}
            className=""
          />
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="md:w-[20%]">Article Number:</label>
            <FieldInput
              type="text"
              name="articleNumber"
              value={formData.articleNumber}
              onChange={handleChange}
              className=""
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="md:w-[20%]">Section Number:</label>
            <FieldInput
              type="text"
              name="sectionNumber"
              value={formData.sectionNumber}
              onChange={handleChange}
              className=""
            />
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="mt-3 grid grid-cols-1 gap-3">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Other Contact:</label>
          <FieldInput
            type="text"
            name="otherContact"
            value={formData.otherContact}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Mailing Address:</label>
          <FieldInput
            type="text"
            name="mailingAddress"
            value={formData.mailingAddress}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Contact Role:</label>
          <FieldInput
            type="text"
            name="contactRole"
            value={formData.contactRole}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Additional Contacts:</label>
          <FieldInput
            type="text"
            name="additionalContacts"
            value={formData.additionalContacts}
            onChange={handleChange}
            className=""
          />
        </div>
      </div>

      {/* Summary Sections */}
      <div className="mt-3 space-y-3">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Incident Summary:</label>
          <FieldTextAreaComponent
            name="incidentSummary"
            value={formData.incidentSummary}
            onChange={handleChange}
            rows={3}
            className=" resize-none"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Requested Remedy:</label>
          <FieldTextAreaComponent
            name="requestedRemedy"
            value={formData.requestedRemedy}
            onChange={handleChange}
            rows={2}
            className=" resize-none"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px]">
          <label className="md:w-[20%]">Supervisor Response:</label>
          <FieldTextAreaComponent
            name="supervisorResponse"
            value={formData.supervisorResponse}
            onChange={handleChange}
            rows={2}
            className=" resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default GrievanceInvestigationDetailsTabbed;
