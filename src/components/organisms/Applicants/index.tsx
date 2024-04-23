import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  JOB_APPLICANTS_COLUMNS,
  JOB_APPLICANTS_DATA,
  JOB_LISTING_COLUMNS,
  JOB_LISTING_DATA,
} from "@/constants";
import ButtonActionTable from "../ButtonActionTable";
import { Applicant } from "@prisma/client";
interface ApplicantProps {
  applicants: any;
}

const Applicants: FC<ApplicantProps> = ({ applicants }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && (
          <>
            {applicants.map((item: any, i: number) => (
              <TableRow key={item.id + i}>
                <TableCell>{item.user.name}</TableCell>

                <TableCell>
                  <ButtonActionTable url="/job-detail/1" />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};
export default Applicants;
