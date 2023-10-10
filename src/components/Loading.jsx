import React from "react";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import ProgessBar from "./ProgessBar";

const Loading = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 lg:min-w-[50vw] md:min-w-[70vw]"
      shadow="sm"
    >
      <CardBody>
        <div className="items-center justify-center">
          <div className="flex flex-col col-span-6 md:col-span-8">
            <h1 className="text-large font-medium mt-2 text-center">
              Loading...
            </h1>

            <div className="flex flex-col mt-3 gap-1 items-center justify-center">
              <ProgessBar></ProgessBar>
              <div className="flex justify-between"></div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default Loading;
