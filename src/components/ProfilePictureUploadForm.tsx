import { useEffect, useState, type ReactElement } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useModalStore } from "./store/modalStore";
import Modal from "./ui/Modal";
import { useForm } from "react-hook-form";
import { useUpdateProfilePicture } from "@/hooks/useUser";

interface ProfilePictureUploadFormProps {
  id: string;
}

interface FormValues {
  photo: FileList;
}

export default function ProfilePictureUploadForm({
  id,
}: ProfilePictureUploadFormProps): ReactElement {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { updatePhoto } = useUpdateProfilePicture();
  const { closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const photo = watch("photo");

  const onSubmit = (data: FormValues) => {
    if (id && data.photo?.[0]) {
      const file = data.photo[0];
      updatePhoto({ file, id });
    }
  };

  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [photo]);

  return (
    <Modal title="Upload Profile Picture">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-end gap-2 flex-col">
          {previewImage && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <div className="w-full h-64 border rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          )}

          <Input
            type="file"
            accept="image/webp,image/png,image/jpeg,image/jpg"
            {...register("photo", {
              required: "Image file is required",
            })}
          />
          {errors.photo && (
            <p className="text-sm text-red-500">
              {errors.photo.message as string}
            </p>
          )}
          <Button type="submit" className="cursor-pointer">
            Upload
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="cursor-pointer"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
}
