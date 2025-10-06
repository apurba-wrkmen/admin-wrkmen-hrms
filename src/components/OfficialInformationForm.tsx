import type { ReactElement } from "react";
import { useModalStore } from "./store/modalStore";
import { Button } from "./ui/button";
import Modal from "./ui/Modal";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

export default function OfficialInformationForm(): ReactElement {
  const { closeModal } = useModalStore();

  const { register } = useForm();

  return (
    <Modal title="Update Official Details">
      <form className="flex flex-col gap-6">
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          type="text"
          placeholder="10,000"
          {...register("salary")}
        />

        <Label htmlFor="status">Status</Label>
        <Input
          id="status"
          type="text"
          placeholder="inactive/active"
          {...register("status")}
        />

        <Button type="submit" className="cursor-pointer">
          Update
        </Button>

        <Button
          type="button"
          onClick={closeModal}
          className="cursor-pointer"
          variant="secondary"
        >
          Close
        </Button>
      </form>
    </Modal>
  );
}
