"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <motion.h1
        className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="underline">Notion</span>, where all your <br />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex m-2"
        >
          <Image src="/icons/wikis.png" alt="wikis" width={36} height={36} />
        </motion.div>
        documents, 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex m-2"
        >
          <Image src="/icons/docs.png" alt="docs" width={32} height={26} />
        </motion.div>
        strategies, 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="inline-flex m-2"
        >
          <Image src="/icons/projects.png" alt="projects" width={42} height={42} />
        </motion.div>
        projects <br />
        converge into one cohesive entity.
      </motion.h1>

      <motion.h3
        className="text-base sm:text-xl md:text-2xl font-medium tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Notion is a connected workspace <br /> where work happens faster and better.
      </motion.h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="icon" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button asChild>
            <Link href="/documents">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      )}

      {!isAuthenticated && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <SignInButton>
            <Button>
              Join Notion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </motion.div>
      )}
    </div>
  );
};

export default Heading;
