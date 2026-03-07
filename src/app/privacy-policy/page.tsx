import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Piece Work Pro. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              Privacy Policy
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
            <h2>Introduction</h2>
            <p>
              Piece Work Pro LLC (&quot;Piece Work Pro,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
              committed to protecting your personal data. This privacy policy
              explains how we collect, use, and safeguard your information when
              you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address, and
                company name when you create an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                services, including time tracking data, piece work entries, and
                payroll reports you generate.
              </li>
              <li>
                <strong>Device Information:</strong> Device type, operating
                system, browser type, and IP address.
              </li>
              <li>
                <strong>Location Data:</strong> GPS data collected when crew
                members clock in and out, only when location permissions are
                granted.
              </li>
              <li>
                <strong>Communication Data:</strong> Information you provide when
                you contact us through our website or email.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process time tracking and payroll data</li>
              <li>Send you important account and service updates</li>
              <li>Respond to your requests and support inquiries</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information
              with:
            </p>
            <ul>
              <li>
                Service providers who help us operate our platform (hosting,
                analytics, payment processing)
              </li>
              <li>
                Legal authorities when required by law or to protect our rights
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including encryption in transit and at rest, secure access
              controls, and regular security assessments. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as
              needed to provide services. You can request deletion of your data
              at any time by contacting us.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use essential cookies to operate our website and optional
              analytics cookies to understand how visitors use our site. You can
              control cookie preferences through your browser settings.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of material changes by posting the updated policy on our
              website and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your personal
              data, contact us at:
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
