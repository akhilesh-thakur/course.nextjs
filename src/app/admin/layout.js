import AdminHeader from "@/components/AdminHeader";

export default function layout({ children }) {
  return (
    <>
      <AdminHeader />
      <div>{children}</div>
    </>
  );
}
