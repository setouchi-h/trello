import { OrgControl } from "./_components/org-control";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default layout;
