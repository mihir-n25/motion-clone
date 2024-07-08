"use client"

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Heading = () => {
    const {isLoading , isAuthenticated} = useConvexAuth();
    return ( 
        <div className="max-w-3xl space-y-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            Welcome to <span className="underline">Notion</span>, where all your <br/> 
            <Image
            src="/icons/wikis.png"
            alt="wikis"
            width={36}
            height={36}
            className="inline-flex m-2"
            />
            documents , 
            <Image
            src="/icons/docs.png"
            alt="docs"
            width={32}
            height={26}
            className="inline-flex m-2"
            />
            strategies , 
            <Image
            src="/icons/projects.png"
            alt="projects"
            width={42}
            height={42}
            className="inline-flex m-2"
            />
            projects <br/>
            converge into one cohesive entity.</h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium tracking-tight">
                Notion is a connected workspace <br/> where work happens faster and better .
            </h3>
            {
                isLoading && (
                    <div className="w-full flex items-center justify-center">
                        <Spinner size="icon"/>
                    </div>
                )
            }
            {
                isAuthenticated && !isLoading && (
                    <Button asChild>
                        <Link href="/documents">
                            Get Started 
                        <ArrowRight className="h-4 w-4 ml-2"/>
                        </Link>
                    </Button>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <SignInButton>
                    <Button>
                    Join Notion
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
                </SignInButton>
                )
            }
           
        </div>
     );
}
 
export default Heading;