"use client";
import TransferWizard from "@/components/transfer_wizard/TransferWizard";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-black">Transferir</h1>
      <section>
        <TransferWizard currentStep={2} />
      </section>
    </>
  );
}
