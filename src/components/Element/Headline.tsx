import { FC } from "react";

type HeadlineProps = {
  title: string;
};

const Headline: FC<HeadlineProps> = ({ title }) => {
  return (
    <div>
      <div className="font-main text-2xl font-bold text-gray-900">{title}</div>
      <hr className="mt-6 border-b border-t-0 border-solid border-gray-200 opacity-80" />
    </div>
  );
};

export default Headline;
