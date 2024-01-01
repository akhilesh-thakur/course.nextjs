import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const dashboard = "/admin/dashboard/";
  const WikiLink = "https://www.wikipedia.org";
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-bold text-2xl">Working with Links</h1>
      <Link href={dashboard}>
        <Button btnName={"Go to Dashboard"} />
      </Link>

      <a target="_blank" rel="noopener noreferrer" href={WikiLink}>
        <Button btnName={"Go to Wikipedia"} />
      </a>
    </main>
  );
}
