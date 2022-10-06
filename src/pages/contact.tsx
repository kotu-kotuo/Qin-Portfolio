import {
  Dialog,
  Group,
  LoadingOverlay,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Headline from "src/components/Element/Headline";
import { client } from "src/lib/client";
import { Button } from "src/lib/mantine";

const Contact: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(false);

  const form = useForm<{ email: string; name: string; message: string }>({
    initialValues: { email: "", name: "", message: "" },
    validate: (values) => ({
      email:
        values.email.trim() === ""
          ? "Email is required"
          : /^\S+@\S+$/.test(values.email)
          ? null
          : "Invalid email",
      name:
        values.name.trim() === ""
          ? "Name is required"
          : values.name.length < 2
          ? "Name must have at least 2 letters"
          : null,
      message: values.message.trim() === "" ? "Message is required" : null,
    }),
  });

  type FormValues = typeof form.values;

  const handleSubmit = async (values: FormValues) => {
    setVisible((visible) => !visible);
    await client
      .create({
        endpoint: "contact",
        content: {
          email: values.email,
          name: values.name,
          message: values.message,
        },
      })
      .then(() => setOpened((o) => !o));
  };

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Contact" />
      </div>
      <div style={{ position: "relative" }}>
        <LoadingOverlay visible={visible} />

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
      </div>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="md" style={{ marginBottom: 20 }} weight={700}>
          送信完了しました！
        </Text>

        <Group align="center">
          <Link href="/" passHref>
            <Button component="a" onClick={() => setOpened(false)}>
              ホームへ戻る
            </Button>
          </Link>
        </Group>
      </Dialog>
    </>
  );
};

export default Contact;
