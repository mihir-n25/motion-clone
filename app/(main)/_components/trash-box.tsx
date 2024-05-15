"use client"

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useParams , useRouter } from "next/navigation"
import { useState } from "react";

export const TrashBox = () => {

    const params = useParams();
    const router = useRouter();
    const documents = useQuery(api.document.getTrash)
    const restore = useMutation(api.document.restore)
    const remove = useMutation(api.document.remove)

    const [search, setSearch] = useState("")

//    const filterDocuments = documents?.filter((document: { title: string; }) => {
//     return document.title.toLowerCase().includes(search.toLowerCase());
//    })

   const onClick = (documentId : string) => {
    router.push(`/documents/${documentId}`)
   }


    return (
        <div>
            TrashBox
        </div>
    )
}