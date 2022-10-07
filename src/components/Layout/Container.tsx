import { FC } from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = (props) => {
  const { children, className = "", ...divHTMLAttributes } = props;

  return (
    <div
      {...divHTMLAttributes}
      className={`mx-auto mb-6 px-4  sm:mb-8 sm:max-w-screen-md sm:px-0  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
