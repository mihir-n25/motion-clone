"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentPage = () => {
  const { isSignedIn, user } = useUser();

  const create = useMutation(api.document.create);

  const onCreate = () => {
    const promise = create({title : "Untitled"})
    toast.promise(promise , {
      success : "New Note Created",
      loading : "Creating a new note ..",
      error : "Failed to create a note"
    })
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />

<h2 className="text-lg font-medium">
    Welcome to {isSignedIn && user?.fullName ? `${user.fullName}'s` : ''} Motion
</h2>

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentPage;
