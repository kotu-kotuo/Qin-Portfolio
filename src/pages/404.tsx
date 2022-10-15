import { NextPage } from "next";
import Image from "next/image";
import ButtonPrimary from "src/components/Element/ButtonPrimary";
import Container from "src/components/Layout/Container";

const NotFound: NextPage = () => {
  return (
    <div className="mt-32 sm:mt-32">
      <Container>
        <div className="text-center sm:-mb-4">
          <div className="text-9xl font-bold text-gray-400 sm:text-[200px]">
            404
          </div>
          <div className="text-3xl font-bold text-gray-400 sm:text-5xl">
            Page Not Found
          </div>
          <div className="mt-20">
            <ButtonPrimary text="Go Home" link="#" />
          </div>
        </div>
        <Image src="/portfolio-404.png" width={600} height={600} />
      </Container>
    </div>
  );
};

export default NotFound;
