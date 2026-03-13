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
              Last updated: November 08, 2024
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-body prose-li:text-text-body prose-strong:text-text-primary">
            <h2>Agreement to Our Legal Terms</h2>
            <p>
              We are Piece Work Pro LLC, a company registered in Idaho, United
              States, at 2785 W Seltice Way, Suite A, Post Falls, ID 83854. We
              operate the website{" "}
              <a href="https://pieceworkpro.com">pieceworkpro.com</a>, the
              mobile application Piece Work Pro, and related services
              (collectively, the &quot;Services&quot;).
            </p>
            <p>
              You can contact us by email at{" "}
              <a href="mailto:support@pieceworkpro.com">support@pieceworkpro.com</a>{" "}
              or by mail to the address above.
            </p>
            <p>
              You must be at least 18 years old to use our Services. By
              accessing the Services, you agree to be bound by these Legal
              Terms. If you do not agree with all of these Legal Terms, then you
              are expressly prohibited from using the Services and you must
              discontinue use immediately.
            </p>
            <p>
              We reserve the right to make changes to these Legal Terms at any
              time and for any reason. Changes are effective upon posting. It is
              your responsibility to periodically review these Legal Terms.
            </p>

            <h2>1. Our Services</h2>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country. The
              Services are not tailored to comply with industry-specific
              regulations (HIPAA, FISMA, etc.), so if your interactions would be
              subjected to such laws, you may not use the Services.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <h3>Our Intellectual Property</h3>
            <p>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              &quot;Content&quot;), as well as the trademarks, service marks,
              and logos contained therein (the &quot;Marks&quot;). Our Content
              and Marks are protected by copyright and trademark laws.
            </p>
            <h3>Your Use of Our Services</h3>
            <p>
              Subject to your compliance with these Legal Terms, we grant you a
              non-exclusive, non-transferable, revocable license to access the
              Services and download or print a copy of any portion of the
              Content to which you have properly gained access solely for your
              internal business purposes. No part of the Services, Content, or
              Marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, transmitted, sold, or
              exploited for any commercial purpose whatsoever without our
              express prior written permission.
            </p>
            <h3>Your Submissions and Contributions</h3>
            <p>
              By submitting suggestions, creative ideas, or other materials
              (&quot;Submissions&quot;) directly to us, you agree that we shall
              own all rights in such Submissions and are entitled to
              unrestricted use without acknowledgment or compensation to you.
            </p>
            <p>
              By posting Contributions (text, video, audio, photos, graphics,
              comments, etc.) to any part of the Services, you grant us an
              unrestricted, unlimited, irrevocable, perpetual, non-exclusive,
              transferable, royalty-free, fully-paid, worldwide right and
              license to use, copy, reproduce, distribute, sell, resell,
              publish, broadcast, retitle, store, publicly perform, publicly
              display, reformat, translate, excerpt, and exploit your
              Contributions for any purpose, commercial or otherwise. You waive
              any moral rights in your Contributions.
            </p>

            <h2>3. User Representations</h2>
            <p>By using the Services, you represent and warrant that:</p>
            <ul>
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update it as needed</li>
              <li>You have the legal capacity and you agree to comply with these Legal Terms</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Services through automated or non-human means</li>
              <li>You will not use the Services for any illegal or unauthorized purpose</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>

            <h2>4. User Registration</h2>
            <p>
              You may be required to register to use the Services. You agree to
              keep your password confidential and will be responsible for all
              use of your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </p>

            <h2>5. Purchases and Payment</h2>
            <p>We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal.</p>
            <p>
              You agree to provide current, complete, and accurate purchase and
              account information for all purchases made via the Services. You
              further agree to promptly update account and payment information,
              including email address, payment method, and payment card
              expiration date. Sales tax will be added to the price of purchases
              as deemed required by us. We may change prices at any time. All
              payments shall be in US dollars.
            </p>
            <p>
              You agree to pay all charges at the prices then in effect for your
              purchases and you authorize us to charge your chosen payment
              provider for any such amounts upon placing your order. We reserve
              the right to correct any errors or mistakes in pricing, even if we
              have already requested or received payment.
            </p>

            <h2>6. Subscriptions</h2>
            <h3>Billing and Renewal</h3>
            <p>
              Your subscription will continue and automatically renew unless
              canceled. You consent to our charging your payment method on a
              recurring basis without requiring your prior approval for each
              recurring charge, until such time as you cancel the applicable
              order.
            </p>
            <h3>Cancellation</h3>
            <p>
              All purchases are non-refundable. You can cancel your
              subscription by logging into your account. Your cancellation will
              take effect at the end of the current paid term. If you have any
              questions, contact us at{" "}
              <a href="mailto:support@pieceworkpro.com">support@pieceworkpro.com</a>.
            </p>
            <h3>Fee Changes</h3>
            <p>
              We may, from time to time, make changes to the subscription fee
              and will communicate any price changes in accordance with
              applicable law.
            </p>

            <h2>7. Prohibited Activities</h2>
            <p>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us. As a user
              of the Services, you agree not to:
            </p>
            <ul>
              <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us</li>
              <li>Trick, defraud, or mislead us and other users</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
              <li>Engage in unauthorized framing of or linking to the Services</li>
              <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party&apos;s uninterrupted use and enjoyment of the Services</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
              <li>Delete the copyright or other proprietary rights notice from any Content</li>
              <li>Attempt to impersonate another user or person or use the username of another user</li>
              <li>Upload or transmit any material that acts as a passive or active information collection or transmission mechanism</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents</li>
              <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services</li>
              <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code</li>
              <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Services</li>
              <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means</li>
              <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise</li>
              <li>Sell or otherwise transfer your profile</li>
            </ul>

            <h2>8. User Generated Contributions</h2>
            <p>
              The Services may invite you to chat, contribute to, or participate
              in blogs, message boards, online forums, and other functionality
              during which you may create, submit, post, display, transmit,
              publish, distribute, or broadcast content and materials to us or
              through the Services, including but not limited to text, writings,
              video, audio, photographs, music, graphics, comments, reviews,
              rating suggestions, personal information, or other material
              (&quot;Contributions&quot;).
            </p>
            <p>
              Any Contribution you transmit may be treated as non-confidential
              and non-proprietary. You represent and warrant that your
              Contributions do not infringe any third-party rights, are accurate
              and not misleading, do not constitute unsolicited advertising or
              spam, and do not contain obscene, harassing, violent, or otherwise
              objectionable material.
            </p>

            <h2>9. Contribution License</h2>
            <p>
              By posting your Contributions to any part of the Services, you
              automatically grant, and you represent and warrant that you have
              the right to grant, to us an unrestricted, unlimited, irrevocable,
              perpetual, non-exclusive, transferable, royalty-free, fully-paid,
              worldwide right and license to: host, use, copy, reproduce,
              disclose, sell, resell, publish, broadcast, retitle, archive,
              store, cache, publicly perform, publicly display, reformat,
              translate, transmit, excerpt (in whole or in part), and distribute
              such Contributions for any purpose, commercial, advertising, or
              otherwise.
            </p>
            <p>
              This license also includes the right to prepare derivative works
              of, or incorporate into other works, such Contributions, and to
              grant and authorize sublicenses of the foregoing.
            </p>

            <h2>10. Mobile Application License</h2>
            <h3>Use License</h3>
            <p>
              If you access the Services via the mobile application, we grant
              you a revocable, non-exclusive, non-transferable, limited right to
              install and use the mobile application on wireless electronic
              devices owned or controlled by you, and to access and use the
              mobile application on such devices strictly in accordance with the
              terms and conditions of this mobile application license.
            </p>
            <p>You shall not:</p>
            <ul>
              <li>Decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application</li>
              <li>Make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application</li>
              <li>Violate any applicable laws, rules, or regulations in connection with your access or use of the application</li>
              <li>Remove, alter, or obscure any proprietary notice posted by us or the licensors of the application</li>
              <li>Use the application for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended</li>
              <li>Make the application available over a network or other environment permitting access or use by multiple devices or users at the same time</li>
              <li>Use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application</li>
              <li>Use any proprietary information or any of our interfaces or other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application</li>
            </ul>
            <h3>Apple and Android Devices</h3>
            <p>
              The following terms apply when you use the mobile application
              obtained from either the Apple Store or Google Play (each an
              &quot;App Distributor&quot;): the license granted to you for our
              mobile application is limited to a non-transferable license to use
              the application on a device that utilizes the Apple iOS or Android
              operating systems, as applicable, and in accordance with the usage
              rules set forth in the applicable App Distributor&apos;s terms of
              service. We are responsible for providing any maintenance and
              support services with respect to the mobile application. App
              Distributors have no obligation to provide maintenance and support
              services. You must comply with applicable third-party terms of
              agreement when using the mobile application.
            </p>

            <h2>11. Services Management</h2>
            <p>We reserve the right, but not the obligation, to:</p>
            <ul>
              <li>Monitor the Services for violations of these Legal Terms</li>
              <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms</li>
              <li>Refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof, in our sole discretion and without limitation</li>
              <li>Remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems, without limitation, notice, or liability</li>
              <li>Otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services</li>
            </ul>

            <h2>12. Privacy Policy</h2>
            <p>
              We care about data privacy and security. Please review our Privacy
              Policy at{" "}
              <a href="/privacy-policy">pieceworkpro.com/privacy-policy</a>. By
              using the Services, you agree to be bound by our Privacy Policy,
              which is incorporated into these Legal Terms. The Services are
              hosted in the United States. If you access the Services from any
              other region of the world with laws or other requirements
              governing personal data collection, use, or disclosure that differ
              from applicable laws in the United States, then through your
              continued use of the Services, you are transferring your data to
              the United States, and you expressly consent to have your data
              transferred to and processed in the United States.
            </p>

            <h2>13. Term and Termination</h2>
            <p>
              These Legal Terms shall remain in full force and effect while you
              use the Services. Without limiting any other provision of these
              Legal Terms, we reserve the right to, in our sole discretion and
              without notice or liability, deny access to and use of the
              Services (including blocking certain IP addresses) to any person
              for any reason or for no reason, including without limitation for
              breach of any representation, warranty, or covenant contained in
              these Legal Terms or of any applicable law or regulation. We may
              terminate your use or participation in the Services or delete your
              account and any content or information that you posted at any
              time, without warning, in our sole discretion.
            </p>

            <h2>14. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. We have no obligation to update any information on
              our Services. We will not be liable to you or any third party for
              any modification, price change, suspension, or discontinuance of
              the Services. We cannot guarantee the Services will be available
              at all times.
            </p>

            <h2>15. Governing Law</h2>
            <p>
              These Legal Terms are governed by and interpreted following the
              laws of the State of Idaho, and the use of the United Nations
              Convention of Contracts for the International Sale of Goods is
              expressly excluded. If your habitual residence is in the EU, and
              you are a consumer, you additionally possess the protection
              provided to you by obligatory provisions of the law in your
              country of residence.
            </p>

            <h2>16. Dispute Resolution</h2>
            <h3>Informal Negotiations</h3>
            <p>
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms, the Parties
              agree to first attempt to negotiate any dispute informally for at
              least thirty (30) days before initiating arbitration. Such
              informal negotiations commence upon written notice from one Party
              to the other Party.
            </p>
            <h3>Binding Arbitration</h3>
            <p>
              Any dispute arising out of or in connection with these Legal Terms
              shall be referred to and finally resolved by binding arbitration
              under the rules of the American Arbitration Association (AAA).
              The arbitration shall be conducted in Kootenai, Idaho. The
              arbitrator&apos;s decision shall be binding and may be entered as
              a judgment in any court of competent jurisdiction.
            </p>
            <h3>Restrictions</h3>
            <p>
              The Parties agree that any arbitration shall be limited to the
              dispute between the Parties individually. To the full extent
              permitted by law: (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <h3>Exceptions to Arbitration</h3>
            <p>
              The following disputes are not subject to the above provisions
              concerning binding arbitration: any disputes seeking to enforce or
              protect intellectual property rights; any dispute related to, or
              arising from, allegations of theft, piracy, invasion of privacy,
              or unauthorized use; and any claim for injunctive relief. These
              disputes may be brought before the state and federal courts
              located in Kootenai, Idaho.
            </p>

            <h2>17. Corrections</h2>
            <p>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions. We reserve the
              right to correct any errors, inaccuracies, or omissions and to
              change or update information on the Services at any time, without
              prior notice.
            </p>

            <h2>18. Disclaimer</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES.
            </p>

            <h2>19. Limitations of Liability</h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
              LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
              FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
              PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR
              TO ANY CAUSE OF ACTION ARISING.
            </p>

            <h2>20. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys&apos; fees and expenses, made by any third party due to
              or arising out of: (1) your Contributions; (2) use of the
              Services; (3) breach of these Legal Terms; (4) any breach of your
              representations and warranties set forth in these Legal Terms; (5)
              your violation of the rights of a third party, including but not
              limited to intellectual property rights; or (6) any overt harmful
              act toward any other user of the Services with whom you connected
              via the Services.
            </p>

            <h2>21. User Data</h2>
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>

            <h2>22. Electronic Communications, Transactions, and Signatures</h2>
            <p>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. You hereby
              agree to the use of electronic signatures, contracts, orders, and
              other records, and to electronic delivery of notices, policies,
              and records of transactions initiated or completed by us or via
              the Services.
            </p>

            <h2>23. SMS Text Messaging</h2>
            <h3>Opting Out</h3>
            <p>
              If at any time you wish to stop receiving SMS messages from us,
              simply reply to the text with &quot;STOP.&quot; You may receive an
              SMS message confirming your opt out.
            </p>
            <h3>Message and Data Rates</h3>
            <p>
              Please be aware that message and data rates may apply to any SMS
              messages sent or received. The rates are determined by your
              carrier and the specifics of your mobile plan.
            </p>
            <h3>Support</h3>
            <p>
              If you have any questions or need assistance regarding our SMS
              communications, please email us at{" "}
              <a href="mailto:support@pieceworkpro.com">support@pieceworkpro.com</a>.
            </p>

            <h2>24. California Users and Residents</h2>
            <p>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>

            <h2>25. Miscellaneous</h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision.
            </p>
            <p>
              These Legal Terms operate to the fullest extent permissible by
              law. We may assign any or all of our rights and obligations to
              others at any time. We shall not be responsible or liable for any
              loss, damage, delay, or failure to act caused by any cause beyond
              our reasonable control.
            </p>
            <p>
              If any provision or part of a provision of these Legal Terms is
              determined to be unlawful, void, or unenforceable, that provision
              or part of the provision is deemed severable from these Legal
              Terms and does not affect the validity and enforceability of any
              remaining provisions.
            </p>
            <p>
              There is no joint venture, partnership, employment, or agency
              relationship created between you and us as a result of these
              Legal Terms or use of the Services.
            </p>

            <h2>26. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <p>
              <strong>Piece Work Pro LLC</strong>
              <br />
              2785 W Seltice Way, Suite A
              <br />
              Post Falls, ID 83854
              <br />
              United States
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@pieceworkpro.com">
                support@pieceworkpro.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
