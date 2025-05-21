interface Props {
  step: string;
  companyName: string;
  position: string;
  address: string;
}
export default function ScheduleCard({ step, companyName, position, address }: Props) {
  return (
    <div className="rounded-[10px] border p-[15px] shadow-md bg-[#191919] ">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-500 ">{step}</p> <span className="cursor-pointer">···</span>
      </div>
      <p className="font-semibold text-[13px]">
        {companyName} · {position}
      </p>
      <p className="text-sm text-gray-400">{address}</p>
    </div>
  );
}
