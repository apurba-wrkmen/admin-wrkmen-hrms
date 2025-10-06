import { Button } from "./ui/button";
import { FaEdit } from "react-icons/fa";
import { type ReactElement } from "react";
import { useModalStore } from "./store/modalStore";
import ProfilePictureUploadForm from "./ProfilePictureUploadForm";
import OfficialInformationForm from "./OfficialInformationForm";

// 👇 Define a type for the employee data
interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  personalEmail: string;
  employeeCode: string;
  gender: string;
  Status: string;
  phoneNumber: string;
  addresssLine1: string;
  addresssLine2: string;
  dateOfBirth: string;
  departmentCode: string;
  joinedDate: string;
  accountStandard: string;
  employeeType: string;
  qualification: string;
  Salary: string;
  city: string;
  BankName: string;
  IFSCCode: string;
  AadhaarCard: string;
  PANcard: string;
  AccountNumber: string;
  UPIId: string;
  BranchName: string;
  ReleasedDate: string;
  ReleasedReason: string;
  OfficeEmail: string;
  ProfilePhoto: string;
}

// 👇 Define prop type
interface ProfileViewProps {
  seletedEmployee: Employee;
}

export default function ProfileView({
  seletedEmployee,
}: ProfileViewProps): ReactElement {
  const { openModal, setOpenModal } = useModalStore();

  const {
    id,
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
    ProfilePhoto,
  } = seletedEmployee;

  const fullName = `${firstName} ${lastName}`;

  const officeDetails = [
    { label: "First Name", value: firstName },
    { label: "Last Name", value: lastName },
    { label: "Designation", value: designation },
    { label: "Employee Code", value: employeeCode },
    { label: "Employee Type", value: employeeType },
    { label: "Access Level", value: accountStandard },
    { label: "Department Code", value: departmentCode },
    { label: "Salary", value: Salary },
    { label: "Status", value: Status },
    { label: "Joining Date", value: joinedDate },
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
    { label: "Bank Name", value: BankName },
    { label: "Account Number", value: AccountNumber },
    { label: "IFSC Code", value: IFSCCode },
    { label: "Branch Name", value: BranchName },
    { label: "UPI Id", value: UPIId },
  ];

  return (
    <section className="px-10 py-10">
      {/* Profile Header */}
      <div className="flex gap-3">
        <img
          src={ProfilePhoto}
          alt="Profile"
          className="h-30 w-30 rounded-sm overflow-hidden"
        />

        <Button
          className="cursor-pointer ml-[-50px]"
          variant="ghost"
          onClick={() => setOpenModal("image")}
        >
          <FaEdit />
        </Button>

        {openModal === "image" && <ProfilePictureUploadForm id={id} />}

        <div>
          <div className="font-bold text-2xl">
            <div className="flex flex-row items-center">
              <h1>
                {fullName}
                {accountStandard !== "employee" && (
                  <span className="text-sm bg-violet-500 px-2 py-0.5 ml-3 rounded-sm text-white">
                    {accountStandard}
                  </span>
                )}
              </h1>
            </div>
          </div>
          <div>
            <h1>
              <span>{designation}</span> at WRKMEN
            </h1>
          </div>
          <h1 className="font-semibold">{OfficeEmail}</h1>
          <h1 className="font-bold text-violet-800 pt-2">{employeeCode}</h1>
        </div>
      </div>

      {/* Official Info Section */}
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5">Official Information</h1>
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => setOpenModal("office")}
          >
            <FaEdit />
          </Button>
          {openModal === "office" && <OfficialInformationForm />}
        </div>

        <div className="rounded-lg overflow-hidden">
          {officeDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Info Section */}
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5">Employee Information</h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          {personalDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Info */}
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5">Bank Information</h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          {bankDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Address Info */}
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5">Address Information</h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          {addressDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Release Info */}
      <div>
        <div className="flex items-baseline">
          <h1 className="pt-5 font-bold text-l mt-5">Released Information</h1>
          <Button className="cursor-pointer" variant="ghost">
            <FaEdit />
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          {releaseDetails.map((field, index) => (
            <div key={index} className="grid grid-cols-2 p-2 gap-4">
              <h2 className="font-semibold text-right">{field.label}</h2>
              <p>{field.value || "-"}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
