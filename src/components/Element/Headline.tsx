import { FC } from "react";

type HeadlineProps = {
  title: string;
};

const Headline: FC<HeadlineProps> = ({ title }) => {
  return (
    <div>
      <div className="font-main text-3xl font-bold text-light">{title}</div>
      <hr className="mt-6 border-b border-t-0 border-solid border-light opacity-80" />
    </div>
  );
};

export default Headline;
