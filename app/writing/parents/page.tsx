'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';

export default function Home() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section with consistent width */}
              <div className="text-center mb-8">
                <h1 className="text-6xl sm:text-7xl text-white font-lexend-bold mb-4">
                  For Parents
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  December 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="font-lexend-regular">
                <div className="space-y-2 mb-16">
                  <p className="text-gray-300 italic">
                    This essay is for the parents of young entrepreneurs and founders.
                  </p>

                  <p className="text-gray-300 italic">
                    Point of view of Gen Z entrepreneurs to their—Gen X or Millennial—parents.
                  </p>
                </div>

                {/* First Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-lexend-bold mb-6">
                    Why Gen Z is so Entrepreneurial
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      To shed a little light on the Gen Z perspective.
                    </p>

                    <p className="text-gray-300">
                      The average Gen Z child was raised in a household that most likely had both parents working 9-5 jobs. On average both parents went to college.
                    </p>

                    <p className="text-gray-300">
                      Both parents are working towards retirement. They aim to have 1-2 million in retirement through a retirement fund 401k, ROTH IRA, etc. Giving them a well earned retirement from ~65 to ~80.
                    </p>

                    <p className="text-gray-300">
                      Both parents have been working since their college graduations. ~30 years of working in the past, ~15 years to go. Once Gen Z child, now Gen Z young adult, realizes that ~45 years of working is completely unreasonable given their short attention spans, amplified ambitions through social media, and amplified dopamine requirements.
                    </p>

                    <p className="text-gray-300">
                      Average Gen Z child is also much more aware of entrepreneurship and "getting rich quick" mentality.
                    </p>

                    <p className="text-gray-300">
                      Because of upbringing and environmental conditions, Gen Z want the following for their careers:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Attaining financial freedom early</li>
                      <li>Freedom to experiment (with profession, hobbies, interests, relationships, etc.)</li>
                      <li>Being your own boss, taking on responsibilities early, extreme ownership</li>
                      <li>Ability to pivot a bunch, avoiding life pigeon holes</li>
                    </ul>
                  </div>
                </div>

                {/* Second Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-lexend-bold mb-6">
                    What it's like to be an Entrepreneur
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Being an entrepreneur is like having each day pan out into a completely unique series of events.
                    </p>

                    <p className="text-gray-300">
                      It's multi-role. It's entertaining. It's very fulfilling. Volatile. Unstable. Rollercoaster. Scary.
                    </p>

                    <p className="text-gray-300">
                      It's very scary because of how much control you have to give up in the life path you will take.
                    </p>

                    <p className="text-gray-300">
                      You might not have anything go right for an entire year. You might lose $10k/month for a year and then miraculously start making a steady $1M/month. Then lose everything again and have to couch surf your friends apartments. The plans for the next week are blurry, and the plans a year out are completely unpredictable.
                    </p>

                    <p className="text-gray-300">
                      The stories and memories you make are incredible. You get to work with incredibly gifted people. Build world changing technologies. Spend all-nighters because your clients want every problem solved by tomorrow morning. Forget to eat food for the entire day because you are so obsessed.
                    </p>

                    <p className="text-gray-300">
                      The good news is that if you maintain an entrepreneurial mindset for <span className="font-bold">long enough</span>, you will ALWAYS be rewarded with success. <span className="font-bold">Long enough</span> could means 10 years, could mean 20.
                    </p>

                    <p className="text-gray-300">
                      If 9/10 startups fail. And only 1/10 startups succeed. You just need to build a startup 10 times.
                    </p>

                    <p className="text-gray-300">
                      But, this lifestyle for the majority of the population is too extreme.
                    </p>

                    <p className="text-gray-300">
                      Which for many parents—who are Gen X or Millennials—is deemed very risky and "not worth it."
                    </p>

                    <p className="text-gray-300">
                      This is true. It's very risky. But I only get one life. So I may as well pursue the best version of myself. The most extreme version. The version that at least has the chance to change the world. The version that will send shockwaves through history. The version that turns my family name into an empire.
                    </p>
                  </div>
                </div>

                {/* Third Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-lexend-bold mb-6">
                    What you can do to support your entrepreneur child
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Let go.
                    </p>

                    <p className="text-gray-300 pl-16">
                      Part of being a great parent is not letting go of your child early. The fact that you are hesitant to let them be an entrepreneur is completely normal.
                    </p>

                    <p className="text-gray-300 pl-16">
                      You'd actually be a pretty shit parent if what I said above wasn't true.
                    </p>

                    <p className="text-gray-300">
                      Let them learn through fire and hard times.
                    </p>

                    <p className="text-gray-300 pl-16">
                      I understand that it's much more reassuring knowing your child is working a 9-5 with a stable income. And it's painful thinking that your child has an unstable income with at best a foggy roadmap of what their next month will be like.
                    </p>

                    <p className="text-gray-300 pl-16">
                      But they will learn so much through hard times.
                    </p>

                    <p className="text-gray-300">
                      They chose this path. They should deal with the consequences.
                    </p>

                    <p className="text-gray-300 pl-16">
                      If it all goes to hell because of their naive decision making skills. Let it. They will learn immensely from this. Rock bottom is a great teacher and a blessing in disguise.
                    </p>

                    <p className="text-gray-300 pl-16">
                      In fact, it's the only way for them to learn. They don't have the life experience you possess yet.
                    </p>

                    <p className="text-gray-300 pl-16">
                      So let them catch up to you in life experiences by taking the guard rails off.
                    </p>

                    <p className="text-gray-300">
                      Give them no backups.
                    </p>

                    <p className="text-gray-300 pl-16">
                      Or at latest give them a guise that you won't be their backup. There is a possibility that I need to crash the couch for a week just to get myself back together again.
                    </p>

                    <p className="text-gray-300">
                      And lastly, come to terms with the fact that you did a great fucking job raising your kid.
                    </p>

                    <p className="text-gray-300 pl-16">
                      They are prepared, ready, and risk tolerant to what life will throw at them. They know you love them. And they love you back even more.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }