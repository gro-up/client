import { MoreActions } from "../ui";
interface Props {
  step: string;
  companyName: string;
  position: string;
  companyLocation: string;
}
export const PastScheduleCarouselItem = ({
  step,
  companyName,
  position,
  companyLocation,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">{step}</span>

        <MoreActions />
      </div>

      <strong>
        {companyName} - {position}
      </strong>

      <p className="text-xs text-neutral-500">{companyLocation}</p>
    </div>
  );
};
