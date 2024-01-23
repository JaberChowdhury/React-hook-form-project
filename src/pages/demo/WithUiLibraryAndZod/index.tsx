import { Button } from "@/components/ui/button";
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
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Highlighter from "@/components/Highlighter";
import { useState } from "react";

const WithUiLibraryAndZod = () => {
  const [json, setJson] = useState("");
  const fieldInput = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    color: z.string(),
    age: z.coerce.number().min(10).max(80),
  });
  type formType = z.infer<typeof fieldInput>;

  const form = useForm<formType>({
    resolver: zodResolver(fieldInput),
    defaultValues: {
      username: "jaber",
      email: "jaberhc2002@gmail.com",
      color: "#00ffff",
      age: 10,
    },
  });

  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<formType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setJson(JSON.stringify(data, null, 2));
  };

  return (
    <div className="w-full min-h-screen">
      <h1 className="w-full text-center underline">
        Handling form with shadcn and zod
      </h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="What is your name ?" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="What is your email ?" {...field} />
                </FormControl>
                <FormDescription>This is your personal email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input
                    type="color"
                    placeholder="What is your favourite color ?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="range"
                    placeholder="What is your age ?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting}
            className="text-slate-300"
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
      {json && <Highlighter code={json} />}
      <h5 className="text-rose-400">
        Because of pico css shadcn design isn't visible But trust me the code is
        working ☠️
      </h5>
    </div>
  );
};

export default WithUiLibraryAndZod;
