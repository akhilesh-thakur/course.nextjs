"use client"

import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const dashboard = "/admin/dashboard/";
  const profile = "/admin/profile/";
  const router = useRouter()
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-bold text-2xl">Working with Links</h1>
        <Link href={dashboard}><Button btnName="Go to Dashboard"/></Link>
        <button onClick={()=> router.push(profile)} >Go to profile</button>
    </main>
  );
}
