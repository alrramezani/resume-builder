import { useState, useEffect, useLayoutEffect } from "react";
import Input from "@/components/input";
import Wysiwyg from "@/components/wysiwyg";
export interface IPersonalData {
  firstname?: string;
  lastname?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  summary?: string;
}

export default function PersonalDataForm() {
  const [formData, setFromData] = useState<IPersonalData>({});
  const handleChange = (e: any) => {
    setFromData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };
  // useEffect(() => {
  //   // flyData(formData);
  // }, [formData]);
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="firstname"
          value={formData?.firstname || ""}
          label="First Name"
          placeholder="e.g. Alireza"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="lastname"
          value={formData.lastname || ""}
          label="Last Name"
          placeholder="e.g. Ramezani"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="jobTitle"
          value={formData.jobTitle || ""}
          label="Job Title"
          placeholder="e.g. Senior Front End Developer"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="location"
          value={formData.location || ""}
          label="Location"
          placeholder="e.g. Tehran, Iran"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="email"
          value={formData.email || ""}
          label="Email"
          placeholder="e.g. alireza@sample.com"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 pr-4 mb-4">
        <Input
          name="phone"
          value={formData.phone || ""}
          label="Phone"
          placeholder="e.g. +989991112233"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/3 pr-4 mb-4">
        <Input
          name="linkedin"
          value={formData.linkedin || ""}
          label="Linkedin"
          placeholder="e.g. https://www.linkedin.com/in/yourAccountName"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/3 pr-4 mb-4">
        <Input
          name="github"
          value={formData.github || ""}
          label="Github"
          placeholder="e.g. https://github.com/yourAccountName"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/3 pr-4 mb-4">
        <Input
          name="website"
          value={formData.website || ""}
          label="Website"
          placeholder="e.g. https://example.com"
          onChange={handleChange}
        />
      </div>
      <div className="w-full pr-4 mb-4">
        <Wysiwyg
          name="summary"
          label="Professional Summary"
          notice="Mention your role, experience & most importantly - your biggest
        achievements, best qualities and skills."
          value={formData.summary || ""}
          placeholder="e.g. Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
