"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(2, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email is too long",
    }),
  subject: z
    .string()
    .min(2, {
      message: "Subject is required",
    })
    .max(50, {
      message: "Subject is too long",
    }),
  message: z
    .string()
    .min(2, {
      message: "Message is required",
    })
    .max(500, {
      message: "Message is too long",
    }),
  honeypot: z.string().optional(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.honeypot) {
      console.log("spam detected!");
    } else {
      console.log(values);
    }
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <p
          role="button"
          className="text-muted-foreground hover:text-foreground"
        >
          Contact
        </p>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="px-0">
            <DrawerTitle>Contacte me</DrawerTitle>
            <DrawerDescription>
              If yo u have any questions, please feel free to contact me.
            </DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="honeypot"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-between gap-6">
                <DrawerClose asChild className="w-full">
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
}
