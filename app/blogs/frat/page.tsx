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
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  Being In A Frat
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  September 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <h3 className="text-xl font-lexend-bold mb-4">
                  Introduction
                </h3>

                <p className="text-gray-300">
                  I am very fortunate to have the college experience I had; I go to The Cooper Union, a highly respected institution that houses, educates, and develops New York Cities' finest engineers while also being a brother of NYU's AEPI Alpha Chapter. Yes, I am part of an NYU fraternity and yes, it's completely allowed. AEPI is considered an "off-campus" fraternity and we can recruit non-nyu students.
                </p>

                <p className="text-gray-300">
                  I have a massive appreciation for Greek Life, and I believe it can positively impact almost anyone. It's not just great for the outgoing extroverts who want to party in college; it's also great for those quieter introverts who manage to get involved too. It's actually way more beneficial to join a frat as an introvert compared to an extrovert, but I digress.
                </p>

                <p className="text-gray-300">
                  Coming into college I knew I wasn't going to be a party person, but during my freshman year I knew I needed at least some type of social life outside of school. Cooper Union has a <em>very</em> dry social atmosphere and coincidentally, through a friend, I found out about the fraternity. At the very last minute and on a whim, I went to one of AEPI's rush events in the spring of my freshman year and I loved it. I loved the atmosphere, the people, the work ethic, and the cumulative wealth of our alumni. (Yes, Mark Zuckerburg has a big portion of that).
                </p>

                <div className="w-full h-[1px] bg-gray-800 my-8"></div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Social & Rush Chair
                </h3>

                <p className="text-gray-300">
                  I tend to take extreme ownership over the things I do and I have a very obsessive personality. So naturally, I ran for and got my hands on some positions in the fraternity. I am currently the social chair and used to be a rush chair the semester before. Some of the things I do now are, finding venues, planning events, inviting people, graphic design of flyers, delegating tasks, repairing speakers mid party, risk mitigation, decorations, aesthetics, automation, finances, and many more.
                </p>

                <p className="text-gray-300">
                  Some interesting takeaways (and things I've learned) from being social and rush chair:
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Theme is king.
                </h3>

                <p className="text-gray-300">
                  Choosing the right theme is the most crucial aspect of being a social chair. Which means, effective marketing is your greatest asset. While you can dedicate countless hours to reaching out to potential attendees and researching the best venues and decorations, the key to success lies in making the invitation both appealing and unique. Additionally, ensure the theme is easy to dress for; otherwise, people simply won't attend. From experience, the best parties have been themed Euphoria, Outer Banks, Whiteout, and Barbie. All of which were popular shows or movies at the time, making it easy for guests to dress by taking inspiration from actor wardrobes seen in shows/movies.
                </p>

                {/* First 2x2 Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/1.webp"
                      alt="Frat poster 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/2.webp"
                      alt="Frat poster 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/3.webp"
                      alt="Frat poster 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/4.webp"
                      alt="Frat poster 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Automation.
                </h3>

                <p className="text-gray-300">
                  Always look for the fastest and easiest way possible to your end goals. For me, one of my goals was to invite our entire guest list in a less time consuming way. I was spending close to 3-4 hours sending individualized messages that I would hand type on instagram.
                </p>

                <p className="text-gray-300">
                  I started using API and third-party softwares which made my life so much easier. But I saw a drop in attendance due to the lack of individualization. I know this may seem pedantic, but guests <em>really</em> like seeing their name in the message. "Hi, Alek! How are you?" goes <em>way</em> further than "We are having a party…". The issue is that API's and general automation have difficulty adding in this feature so I had to build my own.
                </p>

                <p className="text-gray-300">
                  Instagram's TOS doesn't entirely allow for this, but if hypothetically I came up with a solution that I ended up using, all I would need are the user's colloquial name and instagram ID feeding from an excel file into Instagram's Graph API framework with a cookie cutter message.
                </p>

                <p className="text-gray-300">
                  Spreadsheets are your best friend, I could track everything clearly, quickly, and efficiently. After about a year in the social chair business, I now have a spreadsheet of 1200+ guests I've reached out to. I can't tell you how right Benjamin Franklin was when he said "for every minute spent in organizing, an hour is earned."
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  People get bored.
                </h3>

                <p className="text-gray-300">
                  Boredom is a hard problem to solve. Offering and creating constantly new and appealing things is challenging and striking the balance requires experience and discipline. Giving too much can lead to boredom. And in a very un-intuitive way, you actually want people frustrated with not having enough events rather than having too many.
                </p>

                <p className="text-gray-300">
                  When people would ask me "why is our next event so far away?" I knew I was doing the right thing. Hunger is what makes you get up and work. If you feel full and satiated, it's almost as if that internal drive/need for things evaporates.
                </p>

                <div className="w-full h-[1px] bg-gray-800 my-8"></div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Graphic Design
                </h3>

                <p className="text-gray-300">
                  I realized that we didn't have any graphic designers in the frat, so I took it upon myself to become one. It took time and effort to get decent at graphic design, but that applies to literally any worthwhile skill in life.
                </p>

                <p className="text-gray-300">
                  I started off simple and my work was nothing special, but hours and hours of practice later, I can confidently say I made some damn good posters.
                </p>

                <p className="text-gray-300">
                  Here are my favorites:
                </p>

                {/* 3x3 Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/a.webp"
                      alt="Frat poster design 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/b.webp"
                      alt="Frat poster design 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/c.webp"
                      alt="Frat poster design 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/d.webp"
                      alt="Frat poster design 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/e.gif"
                      alt="Frat poster design 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/f.gif"
                      alt="Frat poster design 6"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/g.webp"
                      alt="Frat poster design 7"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/h.webp"
                      alt="Frat poster design 8"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/frat/i.webp"
                      alt="Frat poster design 9"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  These posters should be as visually appealing as possible and I've gained quite a familiarity with tools like PIXLR, Adobe Illustrator, Adobe Creative Cloud, and Adobe Photoshop that help me create these designs.
                </p>

                <p className="text-gray-300">
                  One more thing to note: the fewer words and the more captivating the visuals, the better. The average viewer spends only 5-10 seconds looking at these posters. And since I have a limited time to get the vital information across, I have to make it clear, concise, and visually appetizing as Steve Jobs said "We made the buttons on the screen look so good you'll want to lick them."
                </p>

              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }