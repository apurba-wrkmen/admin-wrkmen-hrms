import { createPortal } from "react-dom";
import type { ReactElement, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../store/modalStore";
type ModalProps = {
  children: ReactNode;
  title?: string;
};

export default function Modal({ children, title }: ModalProps): ReactElement {
  const { closeModal } = useModalStore();
  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => closeModal()}
      >
        <div
          className="bg-white p-6 rounded-2xl shadow-lg w-[400px]
        "
          onClick={(e) => e.stopPropagation()}
        >
          {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
          {children}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
