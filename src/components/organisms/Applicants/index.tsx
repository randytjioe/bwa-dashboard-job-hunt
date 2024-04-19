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
interface ApplicantProps {}

const Applicants: FC<ApplicantProps> = ({}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANTS_DATA.map((item: any, i: number) => (
          <TableRow key={item.name + i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>

            <TableCell>
              <ButtonActionTable url="/job-detail/1" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Applicants;
