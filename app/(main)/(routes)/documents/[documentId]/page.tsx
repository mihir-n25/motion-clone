"use client";

import { useQuery } from "convex/react";

import {api} from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { Editor } from "@/components/editor";

interface DocumentIdPageProps {
    params : {
        documentId : Id<"documents">
    }
}

const DocumentIdPage = ({
    params
} : DocumentIdPageProps) => {

    const document = useQuery(api.document.getById , {
        documentId : params.documentId
    })

    if (document === undefined){
        return (
            <div>
                <Cover.Skeleton/>
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <Skeleton className="h-14 w-[50%]"/>
                    <Skeleton className="h-4 w-[80%]"/>
                    <Skeleton className="h-4 w-[40%]"/>
                    <Skeleton className="h-4 w-[60%]"/>
                </div>
            </div>
        )
    }
    if (document === null){
        return (
            <div>
                ummm..Not found
            </div>
        )
    }
    return ( 
        <div className="pb-40">
            <Cover url={document.coverImage}/>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document}/>
                <Editor
                onChange={() => {}}
                initialContent={document.content}
                />
            </div>
        </div>
     );
}
 
export default DocumentIdPage;

