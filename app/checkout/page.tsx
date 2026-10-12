import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { ShippingForm } from "@/components/checkout/ShippingForm";

export const metadata: Metadata = {
  title: "الشحن والتواصل",
  description: "أدخلي عنوان الشحن ومعلومات التواصل لإتمام الطلب.",
};

export default function CheckoutPage() {
  return (
    <AppShell>
      <header className="px-5 pb-1 pt-5">
        <h1 className="font-arabic text-[1.7rem] font-extrabold text-ink">
          إتمام الشراء
        </h1>
      </header>
      <ShippingForm />
    </AppShell>
  );
}
