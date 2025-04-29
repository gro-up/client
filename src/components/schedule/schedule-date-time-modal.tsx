import * as Dialog from "@radix-ui/react-dialog";
import { Button, Input } from "../shadcn";
import { DateTimePicker } from "../ui";

interface Props {
  open: boolean;
  onClose: () => void;
  tempDate: Date | null;
  tempTime: string;
  setTempDate: (date: Date | null) => void;
  setTempTime: (time: string) => void;
  onConfirm: () => void;
}

export default function ScheduleDateTimeModal({
  open,
  onClose,
  tempDate,
  tempTime,
  setTempDate,
  setTempTime,
  onConfirm,
}: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800 text-white rounded-md shadow-lg w-[300px] p-6">
          <DateTimePicker date={tempDate} onDate={setTempDate} />
          <Input
            type="time"
            value={tempTime}
            onChange={(e) => setTempTime(e.target.value)}
            className="mt-2 w-31"
          />

          <div className="flex justify-center gap-[10px] mt-4">
            <Button
              size="lg"
              className="bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
              onClick={onClose}
            >
              취소
            </Button>
            <Button onClick={onConfirm} variant="mint" size="lg">
              추가
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
