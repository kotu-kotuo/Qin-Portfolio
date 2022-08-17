import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { NextPage } from "next";
import React, { useEffect } from "react";
import ButtonBlack from "src/components/Element/ButtonBlack";
import Headline from "src/components/Element/Headline";

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: { email: "", name: "", message: "" },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      message: (value: string) =>
        value.length === undefined ? "Message is required" : null,
    },
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem("user-form");
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem("user-form")));
      } catch (e) {
        console.log("Failed to parse stored value");
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user-form", JSON.stringify(form.values));
  }, [form.values]);

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Contact" />
      </div>
      <div className="wrapper">
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
        />
        <div className="text-center">
          <ButtonBlack text="Send message" link="/" type="submit" />
        </div>
      </div>
    </>
  );
};

export default Contact;
