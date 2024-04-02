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
import { toast } from "sonner";

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

export function ContactForm({ children }: { children: React.ReactNode }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values.honeypot) {
        return;
      }
      console.log(values);

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully.", {
          duration: 5000,
        });

        form.reset();
      } else {
        toast.error("Failed to send the form. Please try again.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Failed to send the form. Please try again.", {
        duration: 5000,
      });
    }
  }
  return (
    <Drawer>
      <DrawerTrigger role="button" asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="px-4 md:px-0">
            <DrawerTitle>Contact me</DrawerTitle>
            <DrawerDescription>
              If you have any questions, please feel free to contact me.
            </DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4 md:px-0"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <Input {...field} />
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
                      <Textarea {...field} />
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
