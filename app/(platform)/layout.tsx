import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default layout;
