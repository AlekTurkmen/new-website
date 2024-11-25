import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <main className="max-w-4xl mx-auto py-16">
            {/* Center the title and add divider */}
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                Terms of Service
              </h1>
              
              <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                Last updated: November 24, 2024
              </p>

              {/* Light horizontal line */}
              <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
            </div>

            <div className="space-y-8 font-lexend-regular">
              <p className="text-gray-300">
                Please read these terms and conditions carefully before using Our Service.
              </p>
  
              <h2 className="text-2xl font-lexend-bold mb-6">
                Interpretation and Definitions
              </h2>
  
              <h3 className="text-xl font-lexend-bold mb-4">
                Interpretation
              </h3>
  
              <p className="text-gray-300">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
  
              <h3 className="text-xl font-lexend-bold mb-4">
                Definitions
              </h3>
  
              <p className="text-gray-300 mb-4">
                For the purposes of these Terms and Conditions:
              </p>
  
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li><strong className="font-lexend-bold">Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Friday</li>
                <li><strong className="font-lexend-bold">Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</li>
                <li><strong className="font-lexend-bold">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong className="font-lexend-bold">Country</strong> refers to: New York, United States</li>
                <li><strong className="font-lexend-bold">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to [legal company name], [legal company address].</li>
                <li><strong className="font-lexend-bold">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong className="font-lexend-bold">Service</strong> refers to the Application.</li>
                <li><strong className="font-lexend-bold">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong className="font-lexend-bold">Third-party Social Media Service</strong> means any services or content provided by a third-party that may be displayed, included or made available by the Service.</li>
                <li><strong className="font-lexend-bold">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Acknowledgment
              </h2>

              <p className="text-gray-300 mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>

              <p className="text-gray-300 mb-4">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>

              <p className="text-gray-300 mb-4">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>

              <p className="text-gray-300 mb-4">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Links to Other Websites
              </h2>

              <p className="text-gray-300 mb-4">
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>

              <p className="text-gray-300 mb-4">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Termination
              </h2>

              <p className="text-gray-300 mb-4">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>

              <p className="text-gray-300 mb-4">
                Upon termination, Your right to use the Service will cease immediately.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Limitation of Liability
              </h2>

              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Governing Law
              </h2>

              <p className="text-gray-300 mb-4">
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Changes to These Terms and Conditions
              </h2>

              <p className="text-gray-300 mb-4">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>

              <p className="text-gray-300 mb-4">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>

              <h2 className="text-2xl font-lexend-bold mb-6">
                Contact Us
              </h2>

              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms and Conditions, You can contact us: <a href="mailto:founders@relevancy.ai" className="underline hover:opacity-80">founders@relevancy.ai</a>
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
}