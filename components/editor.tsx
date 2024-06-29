"use client";

import {BlockNoteEditor, PartialBlock} from "@blocknote/core";
import {useCreateBlockNote} from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";

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

    // const editor : BlockNoteEditor = useCreateBlockNote({
    //     editable ,
    //     initialContent : initialContent 
    //     ? JSON.parse(initialContent) as PartialBlock[] 
    //     : undefined,
    //     onEditorContentChange : (editor) => {
    //         onChange(JSON.stringify(editor.topLevelBlocks , null , 2))
    //     }
    // })

    const editor = useCreateBlockNote();
    return(
         <BlockNoteView editor={editor} />
    )
}