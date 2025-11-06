"use client";
import { useGlobal } from "@/context/GlobalContext";

export default function DashboardPage() {
  const { accountsData } = useGlobal();

  return (
    <>
      <h1 className="text-black">Transferencias</h1>
      <pre>{JSON.stringify(accountsData, null, 2)}</pre>
    </>
  );
}
