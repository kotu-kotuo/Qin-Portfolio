import { Avatar } from "@mantine/core";
import React from "react";

const TwitterItem = () => {
  return (
    <div className="flex">
      <Avatar
        src="https://source.unsplash.com/nEdGnX7u5O0?q=60"
        radius="xl"
        className="mr-4"
      />
      <div>
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-gray-900">しまぶーのIT大学</div>
          <p className="my-1 text-xs font-bold text-gray-400">
            @shimabu_it・5月25日
          </p>
        </div>
        <p className="whitespace-pre-wrap break-words text-sm">
          📣 新サービス「Noway Form」をリリースしました！
          <br />
          <br />
          Noway
          Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
          FormsでやっていたことがNotionだけで完結します✌✨
          <br />
          <br />
          試しに使っていただけると幸いです😊
          <br />
          <br />
          https://www.noway-form.com/ja
        </p>
      </div>
    </div>
  );
};

export default TwitterItem;
