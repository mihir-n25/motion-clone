"use client";

import {BlockNoteEditor, PartialBlock} from "@blocknote/core";
import {useCreateBlockNote} from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useCallback } from "react";

interface EditorProps {
    onChange : (value : string) => void;
    initialContent ?: string;
    editable?: boolean;
};

export const Editor = ({
    onChange,
    initialContent,
    editable
} : EditorProps) => {


    const editor: BlockNoteEditor | null = useCreateBlockNote({
        initialContent: initialContent
          ? (JSON.parse(initialContent) as PartialBlock[])
          : undefined,
      });

    const uploadToDatabase = useCallback(() => {
        if (onChange) {
          setTimeout(() => {
            onChange(JSON.stringify(editor.document));
          }, 1000);
        }
      }, [editor, onChange]);

    
    const {resolvedTheme} = useTheme();

    return(
        <BlockNoteView
        onChange={uploadToDatabase}
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    )
}