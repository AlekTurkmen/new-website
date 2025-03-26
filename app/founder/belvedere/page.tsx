'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  Belvedere
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  September 2024 - November 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <h3 className="text-2xl font-lexend-bold text-white">$100 / 10 Days Challenge</h3>
                <p className="text-gray-300">
                  <Link href="https://www.notion.so/alekturkmen/1st-Attempt-Project-Belvedere-Ended-1360c1259cce8014b2c1db6d89874096" target="_blank" className="text-purple-400 hover:text-purple-300">Link to the challenge</Link>
                </p>
                <div className="w-full h-[1px] bg-gray-800"></div>

                  <div className="absolute bottom-2 right-2 bg-black/50 p-2 text-xs text-gray-300 rounded">
                    Project name inspired by Belvedere Castle in Central Park NYC. Photo credits: Central Park Conservancy
                  </div>

                <h3 className="text-2xl font-lexend-bold text-white">Overview / TLDR</h3>
                <p className="text-gray-300">
                  During college, I became pretty good at securing desirable internships and networking. This led me to consider creating a business to teach other college students these skills.
                </p>
                <p className="text-gray-300">
                  Inspired by Alex Hormozi's principles on{' '}
                  <Link href="https://www.acquisition.com/training" target="_blank" className="text-purple-400 hover:text-purple-300">
                    Lead Generation and Offer Creation
                  </Link>
                  , I applied his strategies in a real-world context. The plan was simple: create an offer, and if people showed interest, build it out; if not, only minimal time would be lost.
                </p>
                <p className="text-gray-300">
                  In March 2024, I gathered a Cooper alumni database of ~2,500 profiles, I then segmented alumni into career categories (e.g., Bioengineering, Finance) and utilized cold emailing to reach ~220 students, achieving a 20% open rate and 20% paying conversion rate. By September 2024, had validated the concept with initial users, refining aspects like pricing and marketing. To appeal broadly, I printed and distributed psychology-based flyers. My business model charged a fee only upon successful job placement, with a referral option to waive the fee.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">September 2024</h3>
                <h4 className="text-xl font-lexend-bold text-gray-200 mt-4">Validating The Concept</h4>
                <p className="text-gray-300">
                  After getting the alumni database up and running, I focused on validating the concept and gathering early user feedback. I connected with some initial users who provided valuable insights about the system. For instance, one user expressed a desire for a custom-tailored list of alumni from specific fields like "Biomed," emphasizing the importance of targeted outreach options. This user also suggested lowering the price from $100 to $75, which highlighted the need for flexibility in pricing. Another piece of feedback praised the money-back guarantee, reinforcing the idea that users appreciate a safety net when trying something new. I also learned about marketing strategies; one user suggested creating a more straightforward flyer, noting that a logical, step-by-step design appealed more to engineers but might not resonate as well with a broader audience. This input helped me see the potential for a natural referral mechanism to drive client growth, as users expressed willingness to help in exchange for discounts, making it clear that fostering relationships can enhance the value of the offering.
                </p>

                <h4 className="text-xl font-lexend-bold text-gray-200">Offer Creation</h4>
                <p className="text-gray-300">
                  When creating the offer, I leaned on some of Alex Hormozi's principles to make sure it was designed for Cooper Union students looking for summer internships with minimal hassle.
                </p>
                <p className="text-gray-300">
                  The "Dream Outcome" which is something Hormozi mentions a bunch, was obvious: land a solid summer internship without the usual stress. Students don't want tons of networking or outreach; they just want the internship. So, I turned common problems—like the social awkwardness of cold emailing and not knowing where to start—into easy solutions, offering to handle outreach and simplifying the process as much as possible.
                </p>
                <p className="text-gray-300">Here are some concepts I took away from Hormozi's courses.</p>

                {/* Hormozi Concepts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/belvedere/Hormozileadgen2.webp"
                      alt="Hormozi Lead Gen 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/belvedere/Hormozioffergen2.webp"
                      alt="Hormozi Offer Gen 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/belvedere/Hormozileadgen.webp"
                      alt="Hormozi Lead Gen"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/belvedere/Hormozioffergen.webp"
                      alt="Hormozi Offer Gen"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">October 2024</h3>
                <h4 className="text-xl font-lexend-bold text-gray-200 mt-4">Lead Generation</h4>
                <p className="text-gray-300">
                  For lead generation, I scraped data on nearly 220 students from the engineering class body on Microsoft Teams. Then, I cold emailed every one of them, reaching a decent level of engagement with a 50% open rate and a 10% response rate. Out of those who responded, about 20% converted, which helped me start building a core user base from this first outreach effort.
                </p>
                <p className="text-gray-300">
                  To reach different groups, I made two flyers: one geared towards a more male, logical audience with a clear, step-by-step layout that engineers would find easy to follow, and another for a female, more emotional audience, with a simple "yes or no" flow and softer visuals. This split approach helped make the offer feel accessible, tailored to how different people might look at the work and the value they'd get.
                </p>

                {/* Flyers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/belvedere/belvedere-male.webp"
                        alt="Male/Logic Targeting Flyer"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Male/Logic Targeting Flyer</p>
                  </div>
                  <div className="space-y-2">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/belvedere/belvedere-female.webp"
                        alt="Female/Emotional Targeting Flyer"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Female/Emotional Targeting Flyer</p>
                  </div>
                </div>

                <h4 className="text-xl font-lexend-bold text-gray-200">Money Model & Networking Effect</h4>
                <p className="text-gray-300">
                  The money model was designed to make the offer as accessible and low-risk as possible for college students. I set a $100 fee, only charged if they actually landed a job, with a money-back guarantee if the service didn't deliver. Knowing that students often have limited funds but plenty of friends, time, and hard work to invest, I added a networking element: students could skip the $100 fee by referring a friend and leaving a positive review. This approach tapped into college culture, making the offer both affordable and highly spreading.
                </p>
                <p className="text-gray-300">
                  Depending on the student personality I was working with, I could push some of these students to get me 10+ highly qualified referalls as a way for them to bypass the $100 fee.
                </p>
                <p className="text-gray-300">
                  And on the flip side, some students had tons of disposable income and $100 was actually a low ball. I would say something like, "this program is going to cost $100" and they would respond with "sounds good, here's the money."
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">November 2024</h3>
                <h4 className="text-xl font-lexend-bold text-gray-200 mt-4">Where I Left The Business</h4>
                <p className="text-gray-300">
                  The business is something that I can put casual time into, and make some money with. I don't actively look for students anymore, but from the networking effects and fee waiving procedure I get a couple converted students a week.
                </p>

                <h4 className="text-xl font-lexend-bold text-gray-200">And Lessons I Learned</h4>
                <p className="text-gray-300">
                  The business quickly turned into something I could run casually (which is exactly what I wanted). However, the income per client—around $100 for about 10 hours of work—meant I was making roughly $10 per hour, which wasn't ideal long-term. This experience taught me a key lesson: the value of targeting clients who are less price-sensitive and can afford a premium service, ultimately allowing for higher earnings with fewer time constraints. Basically, don't make your clientel broke college students.
                </p>
                <p className="text-gray-300">
                  The networking effect is over powered on any business model. Having a constant flow of customers without doing manual outreach is literally a god send in terms of time and effort saved.
                </p>
                <p className="text-gray-300">
                  Clients are extremely price/work sensitive. Some will pay in their time, some will pay with money, some will pay with their own networks. It's your job to differentiate the client types and take advantage of the things that they are willing to give.
                </p>
                <p className="text-gray-300">
                  Validation is key. User feedback is key. Never build until somebody opens their wallet for the concept of the service/product you offered them.
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}