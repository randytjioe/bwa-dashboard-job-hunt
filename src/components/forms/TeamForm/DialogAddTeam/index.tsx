"use client";
import FieldInput from "@/components/organisms/FieldInput";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { teamFormSchema } from "@/lib/form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
interface DialogAddTeamProps {}

const DialogAddTeam: FC<TeamFormProps> = ({}) => {
  const form = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
  });

  const onSubmit = (val: z.infer<typeof teamFormSchema>) => {
    console.log(val);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new team</DialogTitle>
          <DialogDescription>Fill the field to add new team</DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="Position"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input placeholder="Instagram" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input placeholder="Linkedin" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button>Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTeam;