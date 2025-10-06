import type { ReactElement, ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
}

export default function Overlay({ children }: OverlayProps): ReactElement {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="w-[70%] h-[70%] rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg border border-white/30 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
