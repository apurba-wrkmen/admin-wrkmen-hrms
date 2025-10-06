import { create } from "zustand";

// 👇 Define a type for your modal store
interface ModalStore {
    openModal: string | null;
    setOpenModal: (modal: string | null) => void;
    closeModal: () => void;
}

// 👇 Use the type in the Zustand store
export const useModalStore = create<ModalStore>((set) => ({
    openModal: null,
    setOpenModal: (modal) => set({ openModal: modal }),
    closeModal: () => set({ openModal: null }),
}));

interface AdvButtonStore {
    filteredList: any;
    removeFilter: () => void;
    setFilter: (ft: any) => void;
}

export const advButton = create<AdvButtonStore>((set) => ({
    filteredList: null,
    removeFilter: () => set({ filteredList: null }),
    setFilter: (ft) => set({ filteredList: ft }),
}));