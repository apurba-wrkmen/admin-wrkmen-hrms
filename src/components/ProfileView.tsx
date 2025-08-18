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
    profilePicture,
    city,
    BankName,
    IFSCCode,
    AadhaarCard,
    PANcard,
    AccountNumber,
    UPIId,
    BranchName,
    ReleasedDate,
    ReleasedReason,
    OfficeEmail,
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
    { label: "Personal Email", value: personalEmail },
    { label: "Mobile", value: phoneNumber },
    { label: "Last Qualification", value: qualification },
    { label: "Date of Birth", value: dateOfBirth },
    { label: "Gender", value: gender },
    { label: "Aadhaar No", value: AadhaarCard },
    { label: "PAN", value: PANcard },
  ];

  const addressDetails = [
    { label: "Address Line 1", value: addresssLine1 },
    { label: "Address Line 2", value: addresssLine2 },
    { label: "City", value: city },
  ];

  const releaseDetails = [
    { label: "Released Date", value: ReleasedDate },
    { label: "Reason", value: ReleasedReason },
  ];

  const bankDetails = [
    { label: "BankName", value: BankName },
    { label: "AccountNumber", value: AccountNumber },
    { label: "IFSC Code", value: IFSCCode },
    { label: "Branch Name", value: BranchName },
    { label: "UPI Id", value: UPIId },
  ];

const handleChangeProfilePicture=()=>{console.log("helllo")}

  return (
    <section className="px-10 py-10">
      <div className="flex gap-3">
        <div className="h-30 w-30 bg-amber-200 rounded-sm overflow-hidden ">
          <img src={profilePicture} alt="" />

        </div>
          <Button className="cursor-pointer ml-[-50px]" variant="ghost" onClick={handleChangeProfilePicture}>
            <FaEdit />
          </Button>
        <div>
          <div className="font-bold text-2xl ">
            {" "}
            <div className="flex flex-row">
              <h1>
                {fullName}
                {accountStandard !== "employee" ? (
                  <span className="text-sm bg-violet-500 px-2 py-0.5 ml-3 rounded-sm text-white">
                    {accountStandard}
                  </span>
                ) : (
                  ""
                )}
              </h1>
            </div>
          </div>
          <div>
            {" "}
            <h1>
              <span>{designation}</span> at Wrkmen
            </h1>
          </div>
          <h1 className="font-semibold">{OfficeEmail}</h1>
          <h1 className="font-bold text-violet-800 pt-2">{employeeCode}</h1>
        </div>
      </div>
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5 ">Official Information </h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
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
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5 ">Employee Information </h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
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
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5 ">Bank Information </h1>
          <Button className="cursor-pointer " variant="ghost">
            <FaEdit />
          </Button>
        </div>
        <div className=" rounded-lg overflow-hidden">
          {bankDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4 ">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5 ">Address Information </h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
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
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5 ">Released Information </h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
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
