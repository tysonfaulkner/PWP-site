import { Metadata } from "next";
import { PricingContent } from "@/components/sections/PricingContent";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pricing — Simple Plans for Contractors",
  description:
    "Free for solo users. $10/user/mo for teams. No contracts. No hidden fees. Start tracking piece work and running payroll in minutes.",
};

const pricingFaqs = [
  {
    question: "Is there really a free plan?",
    answer:
      "Yes. The Solo plan is free forever for one user. You get unlimited projects, piece work tracking, time tracking, and payroll reports. No credit card required to start.",
  },
  {
    question: "What happens when I add team members?",
    answer:
      "When you add your first team member, you move to the Team plan at $10 per user per month, or $8 per user per month on yearly billing. You are only charged for the users you add.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts. No cancellation fees. If you cancel, you keep access through the end of your billing period. Your data stays available if you decide to come back later.",
  },
  {
    question: "Do my crew members need to pay?",
    answer:
      "No. You pay per user on your account. Your crew members download the app and log in with the accounts you create for them. They do not pay anything.",
  },
  {
    question: "Is there a free trial for the Team plan?",
    answer:
      "Yes. You get a full free trial of the Team plan so you can try every feature with your crew before you are charged. Set up your team, track some piece work, and run a payroll report — all before paying a dime.",
  },
];

export default function PricingPage() {
  return (
    <>
      <FAQPageJsonLd faqs={pricingFaqs} />
      <PricingContent />
    </>
  );
}
