"use client"

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
    const {isLoading , isAuthenticated} = useConvexAuth();
    return ( 
        <div className="max-w-3xl sapce-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Welcome to <span className="underline">Motion</span>, where all your documents , strategies converge into one cohesive entity.</h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Motion is a connected workspace <br/> where work happens faster and better .
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
                    Join Motion
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
                </SignInButton>
                )
            }
           
        </div>
     );
}
 
export default Heading;