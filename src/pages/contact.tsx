import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React, { useEffect } from "react";
import ButtonBlack from "src/components/ButtonBlack";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const contact = () => {
  const form = useForm({ initialValues: { email: "", name: "", message: "" } });

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
      <Layout>
        <Headline title="Portfolio" />
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
          <Textarea mt="md" placeholder="Your message" label="Message" className="mb-10" />
          <ButtonBlack text="Send message" link="/" />
        </div>
      </Layout>
    </>
  );
};

export default contact;
