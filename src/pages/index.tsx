import { AppShell, Container, Header, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Menu2, Moon } from "tabler-icons-react";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <>
      <Container className="px-4">
        <AppShell
          header={
            <Header
              fixed={true}
              height={65}
              className="flex items-center justify-between border-none px-4"
            >
              <Menu2 size={24} strokeWidth={2} className="text-gray-900" />
              <Title order={1} className="text-lg text-gray-900">
                Shimabu IT University
              </Title>
              <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 text-gray-900 leading-none">
                <Moon size={20} strokeWidth={2} />
              </div>
            </Header>
          }
        >
          <Text>iiiii</Text>
        </AppShell>
      </Container>
    </>
    // <div className="p-20">
    //   <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
    //     <div>{`width: ${width}`}</div>
    //     <div>{`largerThanXs: ${largerThanXs}`}</div>
    //     <div>{`largerThanSm: ${largerThanSm}`}</div>
    //     <div>{`largerThanMd: ${largerThanMd}`}</div>
    //     <div>{`largerThanLg: ${largerThanLg}`}</div>
    //     <div>{`largerThanXl: ${largerThanXl}`}</div>
    //   </div>
    //   <Button dent onClick={handleClick} className="mt-4 block">
    //     Click me!!!!!!!!!
    //   </Button>
    //   <Button onClick={handleClick} className="mt-4 block">
    //     Click me!
    //   </Button>
    // </div>
  );
};

export default Home;
