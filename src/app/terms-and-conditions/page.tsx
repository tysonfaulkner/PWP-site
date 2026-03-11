import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using Piece Work Pro. Covers subscriptions, data ownership, acceptable use, cancellation, and contractor responsibilities.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              Terms and Conditions
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-text-on-dark-muted">
              Last updated: January 1, 2025
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-body prose-li:text-text-body prose-strong:text-text-primary">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Piece Work Pro website and services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, you may not use our services.
            </p>

            <h2>Description of Service</h2>
            <p>
              Piece Work Pro provides a web-based platform for tracking piece
              work, time tracking, payroll reporting, and job costing for
              contractors and construction companies. Our services include
              mobile and web applications for crew members and administrators.
            </p>

            <h2>Account Registration</h2>
            <p>
              To use our services, you must create an account and provide
              accurate, complete information. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>

            <h2>Acceptable Use</h2>
            <p>You agree to use our services only for lawful purposes. You may not:</p>
            <ul>
              <li>Use the service to violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or its infrastructure</li>
              <li>Use automated tools to scrape or extract data from the service</li>
              <li>Impersonate another person or misrepresent your affiliation</li>
            </ul>

            <h2>Subscription and Payment</h2>
            <p>
              Piece Work Pro offers free and paid subscription plans. Paid plans
              are billed monthly or annually as selected at the time of
              purchase. You may cancel your subscription at any time. Refunds
              are handled on a case-by-case basis.
            </p>

            <h2>Data Ownership</h2>
            <p>
              You retain ownership of all data you enter into Piece Work Pro,
              including time tracking records, piece work entries, employee
              information, and payroll data. We do not claim ownership of your
              data.
            </p>

            <h2>Data Accuracy</h2>
            <p>
              Piece Work Pro provides tools for tracking and calculating pay.
              You are responsible for verifying the accuracy of all data and
              calculations before using them for payroll or other business
              purposes. Piece Work Pro is not liable for errors in data entry or
              resulting payroll calculations.
            </p>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high availability of our services but do not
              guarantee uninterrupted access. We may perform maintenance or
              updates that temporarily affect service availability. We will
              provide reasonable notice when possible.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Piece Work Pro LLC shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use our services, including but not limited to lost
              profits, data loss, or business interruption.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Piece Work Pro LLC and
              its officers, directors, employees, and agents from any claims,
              damages, or expenses arising from your use of the service or
              violation of these terms.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Piece Work Pro name, logo, website design, and software are
              the intellectual property of Piece Work Pro LLC. You may not copy,
              modify, distribute, or create derivative works from our
              intellectual property without written permission.
            </p>

            <h2>Termination</h2>
            <p>
              We may suspend or terminate your access to our services at any
              time for violation of these terms or for any other reason at our
              discretion. Upon termination, you may request a copy of your data
              within 30 days.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Idaho. Any
              disputes shall be resolved in the courts of Kootenai County,
              Idaho.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify users
              of material changes via email or through the service. Continued
              use of the service after changes are posted constitutes acceptance
              of the updated terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these terms, contact us at:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:support@pieceworkpro.com">
                  support@pieceworkpro.com
                </a>
              </li>
              <li>
                Address: Piece Work Pro LLC, 2785 W Seltice Way, Ste A, Post Falls, ID 83854
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
