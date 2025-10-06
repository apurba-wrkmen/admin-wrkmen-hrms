// import { useState, type ReactElement } from "react";
// import CreateUserForm from "./CreateUserForm";

export default function UsersHeader() {
  // const [modal, setModal] = useState(false);

  // Keeping for future use:
  // const handleOpenModal = (): void => setModal((prev) => !prev);
// 
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-3xl font-bold py-4">All Users</h1>
        {/* <Button className="ml-10" onClick={handleOpenModal}>
          <IoPersonAddSharp /> <span>Add User</span>
        </Button> */}
      </div>
{/* 
      {modal && (
        <div className="absolute z-20">
          <CreateUserForm />
        </div>
      )} */}
    </div>
  );
}
