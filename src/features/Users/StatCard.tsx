import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactElement } from "react";

interface StatData {
  email: string;
  checked_in: string;
  checked_out: string;
  work_duration: string;
}

interface StatCardProps {
  data: StatData;
}

export default function StatCard({ data }: StatCardProps): ReactElement {
  const { email, checked_in, checked_out, work_duration } = data;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{email}</CardTitle>
        <div className="flex gap-6">
          <h1>
            Logged-in At: <br />
            <span>{checked_in}</span>
          </h1>
          <h1>
            Logged-out At: <br />
            <span>{checked_out}</span>
          </h1>
        </div>
      </CardHeader>
      <CardFooter>
        <h2 className="text-primary2">
          Today's Working Hour: <span>{work_duration}</span>
        </h2>
      </CardFooter>
    </Card>
  );
}
