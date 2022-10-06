import { Avatar } from "@mantine/core";
import dayjs from "dayjs";
import { FC } from "react";
import { Tweet } from "src/types/types";

type TwitterProps = {
  data: Tweet;
  user: { id: string; name: string; username: string };
  userImage: string;
};

const TwitterItem: FC<TwitterProps> = (props) => {
  console.log(props);
  return (
    <div className="flex">
      <Avatar src={props.userImage} radius="xl" className="mr-4" />
      <div>
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-light">{props.user?.name}</div>
          <p className="my-1 text-xs font-bold text-gray-400">
            {`@${props.user?.username}・${dayjs(props.data?.created_at).format(
              "MM月DD日"
            )}`}
          </p>
        </div>
        <p className="whitespace-pre-wrap break-words text-sm text-gray-300">
          {props.data?.text}
        </p>
      </div>
    </div>
  );
};

export default TwitterItem;
