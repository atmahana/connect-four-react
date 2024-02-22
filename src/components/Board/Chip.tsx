import { FC } from "react";

interface ChipProps {
  player: number;
}

const Chip: FC<ChipProps> = ({ player }) => {
  return (
    <div
      className={`rounded-full w-12 aspect-square block ${
        player === 1 ? "bg-red-600" : "bg-blue-600"
      } `}
    />
  );
};

export default Chip;
