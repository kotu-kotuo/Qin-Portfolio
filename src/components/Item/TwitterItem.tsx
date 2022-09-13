import { Avatar } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";
import { Tweet } from "src/pages";

type TwitterProps = {
  data: Tweet;
  user: { id: string; name: string; username: string };
  userImage: string;
};

const TwitterItem = (props: TwitterProps) => {
  console.log(props);
  return (
    <div className="flex">
      <Avatar src={props.userImage} radius="xl" className="mr-4" />
      <div>
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-gray-900">{props.user?.name}</div>
          <p className="my-1 text-xs font-bold text-gray-400">
            {`@${props.user?.username}・${dayjs(props.data?.created_at).format(
              "MM月DD日"
            )}`}
          </p>
        </div>
        <p className="whitespace-pre-wrap break-words text-sm">
          {props.data?.text}
        </p>
      </div>
    </div>
  );
};

export default TwitterItem;
