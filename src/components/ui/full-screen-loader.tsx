// components/ui/FullScreenLoader.tsx
import { Loader2 } from "lucide-react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Loader2 className="w-10 h-10 text-white animate-spin" />
    </div>
  );
};

export default FullScreenLoader;
