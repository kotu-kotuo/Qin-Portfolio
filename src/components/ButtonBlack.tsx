import React, { FC } from "react";
import { Button } from "src/lib/mantine";

type ButtonProps = {
  text: string;
};

const ButtonBlack: FC<ButtonProps> = ({ text }) => {
  return (
    <div className="text-center">
      <Button className="rounded-full bg-gray-900">
        <a>{text}</a>
      </Button>
    </div>
  );
};

export default ButtonBlack;
