"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog"

import { useCoverImage } from "@/hooks/use-image-cover";

export const CoverImageModal = () => {
    const coverImage = useCoverImage();

    return(
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
                <div>
                    TODO : UploadImage
                </div>
            </DialogContent>
        </Dialog>
    )
}
