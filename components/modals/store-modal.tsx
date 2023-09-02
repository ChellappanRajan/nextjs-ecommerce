"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModals =()=>{
    const storeModal = useStoreModal();
    return(
        <Modal
        title="add product"
        description="test des"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        ></Modal>
    )
}