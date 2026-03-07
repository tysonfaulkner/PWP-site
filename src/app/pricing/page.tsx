import { Metadata } from "next";
import { PricingContent } from "@/components/sections/PricingContent";

export const metadata: Metadata = {
  title: "Pricing — Simple Plans for Contractors",
  description:
    "Free for solo users. $10/user/mo for teams. No contracts. No hidden fees. Start tracking piece work and running payroll in minutes.",
};

export default function PricingPage() {
  return <PricingContent />;
}
