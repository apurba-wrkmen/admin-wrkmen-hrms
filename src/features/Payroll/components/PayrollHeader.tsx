import { Button } from "@/components/ui/button";
import type { ReactElement } from "react";
import { advButton } from "@/components/store/modalStore";
import { useSearchParams } from "react-router-dom";

export default function PayrollHeader(): ReactElement {
  const { setFilter } = advButton(); // 🧹 removed removeFilter since it's unused
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (filterValue: string): void => {
    // ✅ Avoid mutating the existing searchParams instance directly
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("filter", filterValue);
    setSearchParams(updatedParams);

    // ✅ Update Zustand store for global state sync
    setFilter(filterValue);
  };

  return (
    <div className="flex justify-between items-center">
      <Button
        className="cursor-pointer"
        onClick={() => handleClick("generated")}
      >
        Generated
      </Button>
    </div>
  );
}
