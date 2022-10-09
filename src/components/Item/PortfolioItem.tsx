import { PortfolioProps } from "src/types/types";
import { FC } from "react";
import ButtonPrimary from "src/components/Element/ButtonPrimary";
import Image from "next/image";

const PortfolioItem: FC<PortfolioProps> = (props) => {
  return (
    <div
      className={`sm:flex sm:items-center ${
        props.order % 2 === 0 ? "sm:flex-row-reverse" : null
      } sm:justify-between sm:gap-x-8`}
    >
      <div className="sm:w-1/2">
        <Image
          src={props.featuredImage.url}
          width={800}
          height={450}
          alt="Work Image"
          className="aspect-video w-full border-2 border-solid border-gray-400 border-opacity-10 object-cover"
        />
      </div>
      <div className="sm:w-1/2">
        <div className="mt-6 text-2xl font-bold text-light sm:mt-0">
          {props.title}
        </div>
        <p className="mt-4 mb-3 text-gray-300">
          {props.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
        </p>
        <div className="mb-5 flex flex-wrap items-baseline">
          <p className="my-[1px] mr-1.5 text-primary">Technologies:</p>{" "}
          {props.technologies.map((tech) => (
            <p className="my-[1px] mr-1.5 text-sm" key={tech}>
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-x-4">
          <div className="text-center">
            <ButtonPrimary
              text="View Site"
              link={props.siteLink}
              externalLink={true}
            />
          </div>
          <div className="text-center">
            <ButtonPrimary
              text="Github"
              link={props.githubLink}
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
