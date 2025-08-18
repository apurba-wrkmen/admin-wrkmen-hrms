import { IoPersonAddSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import CreateUserForm from "./CreateUserForm";
import { useState } from "react";

export default function UsersHeader() {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">All Users</h1>
        {/* <Button className="ml-10" onClick={handleOpenModal}>
          <IoPersonAddSharp /> <span>Add User</span>
        </Button> */}
      </div>
      <div className="absolute  z-20 ">{modal ? <CreateUserForm /> : null}</div>
    </div>
  );
}
