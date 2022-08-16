import React, { FC } from "react";

type HeadlineProps = {
  title: string;
};

const Headline: FC<HeadlineProps> = ({ title }) => {
  return (
    <div className="px-4 pt-10 pb-6 md:mx-auto md:max-w-screen-md md:px-0">
      <div className="text-2xl font-bold text-gray-900 font-main">{title}</div>
      <hr className="mt-6 border-b border-t-0 border-solid border-gray-200 opacity-80"></hr>
    </div>
  );
};

export default Headline;
