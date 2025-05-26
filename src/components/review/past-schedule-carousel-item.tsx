import { MoreActions } from "../ui";
interface Props {
  step: string;
  companyName: string;
  position: string;

  scheduleId: number;
  address: string;
  addressDetail: string;
  onEditClick: (id: number) => void;
}
export const PastScheduleCarouselItem = ({
  step,
  companyName,
  position,
  address,
  addressDetail,
  scheduleId,
  onEditClick,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-neutral-500">{step}</span>

        <MoreActions scheduleId={scheduleId} onEditClick={onEditClick} />
      </div>

      <strong>
        {companyName} - {position}
      </strong>

      <p className="text-xs text-neutral-500">
        {address} {addressDetail}
      </p>
    </div>
  );
};
