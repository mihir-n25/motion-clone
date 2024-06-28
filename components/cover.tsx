"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface coverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: coverImageProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {
        !!url && (
            <Image
            src={url}
            fill
            alt="cover"
            className="object-cover"
            />
        )
      }
    </div>
  );
};
