import Button from "@/components/Button";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-bold text-2xl">Admin Dashboard Page</h1>
      <Link href="/">
        <Button btnName={"Go to Home"} />
      </Link>
      </main>
    </>
  );
}
