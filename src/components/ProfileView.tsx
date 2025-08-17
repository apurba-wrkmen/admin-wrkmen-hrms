import { Button } from "./ui/button";
import { FaEdit } from "react-icons/fa";
export default function ProfileView({ seletedEmployee }) {
  const {
    firstName,
    lastName,
    designation,
    personalEmail,
    employeeCode,
    gender,
    Status,
    phoneNumber,
    addresssLine1,
    addresssLine2,
    dateOfBirth,
    departmentCode,
    joinedDate,
    accountStandard,
    employeeType,
    qualification,
    Salary,
  } = seletedEmployee;
  const fullName = firstName + " " + lastName;

  const officeDetails = [
    { label: "First Name", value: firstName, rest: false },
    { label: "Last Name", value: lastName, rest: false },
    { label: "Designation", value: designation, rest: false },
    { label: "Employee Code", value: employeeCode, rest: false },
    { label: "Employee Type", value: employeeType, rest: false },
    { label: "Access Level", value: accountStandard, rest: false },
    { label: "Department Code", value: departmentCode, rest: false },
    { label: "Salary", value: Salary, rest: true },
    { label: "Status", value: Status, rest: false },
    { label: "Joining Date", value: joinedDate, rest: false },
  ];

  const personalDetails = [
    { label: "Peronal Email", value: personalEmail },
    { label: "Mobile", value: phoneNumber },
    { label: "Last Qualification", value: qualification },
    { label: "Date of Birth", value: dateOfBirth },
    { label: "Gender", value: gender },
  ];

  const addressDetails = [
    { label: "Address Line 1", value: addresssLine1 },
    { label: "Address Line 2", value: addresssLine2 },
    { label: "City", value: "City" },
  ];

  const releaseDetails = [
    { label: "Released Date", value: "Updated soon" },
    { label: "Reason", value: "Updated" },
  ];

  return (
    <section className="px-10 py-10">
      <div className="flex gap-3">
        <div className="h-20 w-20 bg-red-400 rounded-sm">
          <img src="s" alt="" />
        </div>
        <div>
          <div className="font-bold text-2xl ">
            {" "}
            <div className="flex flex-row">
              <h1>
                {fullName}{" "}
                {accountStandard !== "employee" ? (
                  <span className="text-sm bg-violet-500 px-2 py-0.5 rounded-sm text-white">
                    {accountStandard}
                  </span>
                ) : (
                  ""
                )}
              </h1>
              <Button className="ml-5 cursor-pointer">
                <FaEdit />

                <span> Edit</span>
              </Button>
            </div>
          </div>
          <div>
            {" "}
            <h1>
              <span>{designation}</span> at Wrkmen
            </h1>
          </div>
          <h1 className="font-semibold">{personalEmail}</h1>
        </div>
      </div>
      <div>
        <h1 className="pt-5 font-bold text-l ">Official Information </h1>
        <div className=" rounded-lg overflow-hidden">
          {officeDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4 ">
              <h2 className="font-semibold text-right">{field.label}</h2>

              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="pt-5 font-bold text-l ">Employee Information </h1>
        <div className=" rounded-lg overflow-hidden">
          {personalDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4 ">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="pt-5 font-bold text-l ">Address Information </h1>
        <div className=" rounded-lg overflow-hidden">
          {addressDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4 ">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="pt-5 font-bold text-l ">Released Information </h1>
        <div className=" rounded-lg overflow-hidden">
          {releaseDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4 ">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
