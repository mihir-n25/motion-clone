"use client";

import Image from "next/image"

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = () => {
    return ( 
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <Image
        src={"/error.png"}
        height={300}
        alt="Error"
        width={300}
        className="dark:hidden"
        />
        <Image
        src={"/error-dark.png"}
        height={300}
        alt="Error"
        width={300}
        className="hidden dark:block"
        />
        <h2 className="text-xl font-medium">
            Something went wrong
        </h2>
        <Button asChild>
            <Link href="/documents"
            >
                Go Back Simon
            </Link>
        </Button>
    </div> );
}
 
export default Error;