import React, { useState } from "react";
import FieldInput from "./../fieldInput/FieldInput";

const MemberComponent = () => {
  const [formData, setFormData] = useState({
    memberNumber: "",
    lastName: "",
    firstName: "",
    last4ssn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="p-4 w-full max-w-xl bg-[#d1e3ea]  border-[1px] border-[#ccc] space-y-3">
      {/* Member #: */}
      <div className="flex items-center justify-between px-3 rounded-[10px]">
        <label
          htmlFor="memberNumber"
          className="text-smallDescription font-medium text-[#122159] poppins-medium"
        >
          Member #:
        </label>
        <div className="ml-3 flex-1">
          <FieldInput
            id="memberNumber"
            name="memberNumber"
            type="text"
            value={formData.memberNumber}
            onChange={handleChange}
            placeholder="Enter Member #"
            className="!max-w-[50%]"
          />
        </div>
      </div>

      {/* Last Name */}
      <div className="flex items-center justify-between  px-3 rounded-md">
        <label
          htmlFor="lastName"
          className="text-smallDescription text-[#122159] poppins-medium"
        >
          Last Name:
        </label>
        <div className="ml-3 flex-1">
          <FieldInput
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="!max-w-[50%]"
          />
        </div>
      </div>

      {/* First Name */}
      <div className="flex items-center justify-between px-3  rounded-md">
        <label
          htmlFor="firstName"
          className="text-smallDescription text-[#122159] poppins-medium"
        >
          First Name:
        </label>
        <div className="ml-3 flex-1">
          <FieldInput
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="!max-w-[50%]"
          />
        </div>
      </div>

      {/* Last 4 SSN */}
      <div className="flex items-center justify-between px-3 rounded-md">
        <label
          htmlFor="last4ssn"
          className="text-smallDescription text-[#122159] poppins-medium"
        >
          Last 4 SSN:
        </label>
        <div className="ml-3 flex-1">
          <FieldInput
            id="last4ssn"
            name="last4ssn"
            type="text"
            maxLength={4}
            value={formData.last4ssn}
            onChange={handleChange}
            placeholder="XXXX"
            className="!max-w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberComponent;
