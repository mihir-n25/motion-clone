"use client";

import {BlockNoteEditor, PartialBlock} from "@blocknote/core";
import {useCreateBlockNote} from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";




export const Editor = () => {

    const editor = useCreateBlockNote();
    const {resolvedTheme} = useTheme();
    return(
         <BlockNoteView editor={editor}
         theme={resolvedTheme === "dark" ? "dark" : "light"}
         />
    )
}

