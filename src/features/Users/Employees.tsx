// import { useEmployeeStats } from "@/hooks/useEmployeeStatus";

import { useEmployeeStats } from "@/hooks/useEmployeeStatus";
import StatCard from "./StatCard";

export default function Employees() {
const { data, isPending } = useEmployeeStats();
console.log(data)
//   const { allEmployees,isPending } = useAllActiveEmployees();

  if (isPending)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  return (
    <>
      <h1>Employees</h1>
      <section className="grid grid-cols-3 gap-10">
        {data?.map((data) => {
          return <StatCard data={data} />;
        })}
      </section>
    </>
  );
}
