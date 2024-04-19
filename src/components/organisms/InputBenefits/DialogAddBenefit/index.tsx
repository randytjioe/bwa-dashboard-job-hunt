import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";
import { useRef } from "react";

interface Props {
  updateBenefits: (item: any) => void;
}

export default function DialogAddBenefit({ updateBenefits }: Props) {
  const benefitRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;
    if (benefit === "" || description === "") {
      return;
    }
    updateBenefits({ benefit, description });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, clicks save when your done
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 mb-5">
          <div>
            <Label htmlFor="benefit">Benefit</Label>
            <Input
              ref={benefitRef}
              id="benefit"
              placeholder="fill your benefit..."
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              ref={descriptionRef}
              id="description"
              placeholder="fill your description..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSaveBenefit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
