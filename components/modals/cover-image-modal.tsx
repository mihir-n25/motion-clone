"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog"

import { useCoverImage } from "@/hooks/use-image-cover";

import { SingleImageDropzone } from "../single-image-dropzone";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
    const params = useParams();

    const update = useMutation(api.document.update);

    const [file, setFile] = useState<File>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {edgestore} = useEdgeStore();

    const coverImage = useCoverImage();

    const onclose = () => {
        setFile(undefined)
        setIsSubmitting(false)
        coverImage.onClose()
    }

    const onChange = async(file?:File) => {
        if(file){
            setIsSubmitting(true);
            setFile(file);

            const res = await edgestore.publicFiles.upload({
                file
            });

            await update({
                id : params.documentID as Id<"documents">,
                coverImage : res.url,
            })

            onclose();
        }
    }

    return(
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
               <SingleImageDropzone
               className="w-full outline-none"
               disabled={isSubmitting}
               value={file}
               onChange={onChange}
               >

               </SingleImageDropzone>
            </DialogContent>
        </Dialog>
    )
}
