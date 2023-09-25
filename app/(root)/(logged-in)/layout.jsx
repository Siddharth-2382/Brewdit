import LeftSidebar from "@components/shared/LeftSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <section className="w-full flex gap-4">
      <LeftSidebar />
      {children}
    </section>
  );
};

export default DashboardLayout;
