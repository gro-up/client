import { MoreActions } from "../ui";
interface Props {
  step: string;
  companyName: string;
  position: string;
  companyLocation: string;
  scheduleId: number;
}
export const PastScheduleCarouselItem = ({
  step,
  companyName,
  position,
  companyLocation,
  scheduleId,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-neutral-500">{step}</span>

        <MoreActions scheduleId={scheduleId} />
      </div>

      <strong>
        {companyName} - {position}
      </strong>

      <p className="text-xs text-neutral-500">{companyLocation}</p>
    </div>
  );
};
