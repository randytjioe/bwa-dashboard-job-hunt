import { FC } from "react";

interface TitleFormProps {
  title: string;
  substile: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, substile }) => {
  return (
    <div className="my-5">
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-gray-400">{substile}</div>
    </div>
  );
};

export default TitleForm;
