import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { NextPage } from "next";
import React, { useEffect } from "react";
import Headline from "src/components/Element/Headline";
import { Button } from "src/lib/mantine";

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: { email: "", name: "", message: "" },
    validate: {
      email: (value: string) =>
        ""
          ? "Email is required"
          : /^\S+@\S+$/.test(value)
          ? null
          : "Invalid email",
      name: (value: string) =>
        ""
          ? "Name is required"
          : value.length < 2
          ? "Name must have at least 2 letters"
          : null,
      message: (value: string) => ("" ? "Message is required" : null),
    },
  });

  type FormValues = typeof form.values;

  const handleSubmit = (values: FormValues) => console.log(values);

  // useEffect(() => {
  //   const storedValue = window.localStorage.getItem("user-form");
  //   if (storedValue) {
  //     try {
  //       form.setValues(JSON.parse(window.localStorage.getItem("user-form")));
  //     } catch (e) {
  //       console.log("Failed to parse stored value");
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("user-form", JSON.stringify(form.values));
  // }, [form.values]);

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Contact" />
      </div>
      <form className="wrapper" onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="md"
          label="Name"
          placeholder="Taro Yamada"
          {...form.getInputProps("name")}
        />
        <Textarea
          mt="md"
          placeholder="Your message"
          label="Message"
          className="mb-10"
          {...form.getInputProps("message")}
        />
        <div className="text-center">
          <Button
            className="rounded-full bg-gray-900 font-button"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
