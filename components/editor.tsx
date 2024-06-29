"use client";

import {BlockNoteEditor, PartialBlock} from "@blocknote/core";
import {useCreateBlockNote} from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange : (value : string) => void;
    initialContent ?: string;
    editable?: boolean;
};

 const Editor = ({
    onChange,
    initialContent,
    editable
} : EditorProps) => {

    const {resolvedTheme} = useTheme();
    const {edgestore} = useEdgeStore();

    const handleUpload = async(file : File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });

        return response.url
    }

    const editor: BlockNoteEditor | null = useCreateBlockNote({
        initialContent: initialContent
          ? (JSON.parse(initialContent) as PartialBlock[])
          : undefined,
          uploadFile : handleUpload
      });

    const uploadToDatabase = useCallback(() => {
        if (onChange) {
          setTimeout(() => {
            onChange(JSON.stringify(editor.document));
          }, 1000);
        }
      }, [editor, onChange]);   

    return(
        <BlockNoteView
        onChange={uploadToDatabase}
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    )
}

export default Editor;