'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";

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
                  My First Blog
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  June 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  Hi, my name is Alek Turkmen. I’m currently 20 years old and I’m about to go into my junior year of college at The Cooper Union in New York City where I study mechanical engineering. I’ve always loved anything relating to math, science, technology, problem solving, and I’m naturally very curious. One of the first things you’ll notice when getting to know me is how straightforward I am and how different my way of thinking is.
                </p>

                <p className="text-gray-300">
                  I’m originally from Istanbul, Turkey (although I was born in the States) so I have a pretty holistic view of the world and get along with people of any background. My first language was Turkish but since I moved to the US when I was 7, I’ve since forgotten most of it and my English is so good you wouldn’t be able to tell it wasn’t my first language.
                </p>

                <p className="text-gray-300">
                  I’m introverted by nature, however I’m a better extrovert. I like to think I’ve struck a great balance between intro/extroversion since I can be the life of a party, but I prefer to be alone. I also think the ability to consciously think for long periods at a time in one’s head is paramount to success. I get my ideas, direction and (trying not to sound braggy but also) my intelligence from how disciplined my mind is. Discipline in my opinion goes hand in hand with motivation.
                </p>
    
                <h3 className="text-xl font-lexend-bold mb-4">
                  What makes me motivated
                </h3>
    
                <p className="text-gray-300">
                  Motivation doesn’t just come from nowhere. There is always a source to someone’s motivation. It might be that someone is just trying to provide for their family. Someone is trying to look physically beach ready for their vacation. Or some people are motivated by the chance of making someone else’s life better. Whatever it may be, everyone has their motivation, there are no exceptions to this and no matter what, you can find someone or something out there to be stellar and have a purpose for this world.
                </p>

                <p className="text-gray-300">
                  I’ve been very motivated as a result of the environment I was brought up in. My father is a disciplined and extremely stubborn man, he is stubborn to the point of compulsion and a good portion of that has rubbed off on me. It’s taken me a very long time to realize the value this has for me and the mindset it’s induced on me. The compulsive stubbornness works wonders when I won’t give up on a problem or the project I’m working on isn’t nearly perfect enough.
                </p>

                <p className="text-gray-300">
                  Both sides of my family ancestry worked their asses off in other countries to get me a life in the US and I feel like it would be a complete disservice to them to be anything but average in my lifespan.
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  What I see my future as
                </h3>

                <p className="text-gray-300">
                  As I said before, I really enjoy math and science. And I have no doubt that what I settle on in life is going to be related to those two.
                </p>

                <p className="text-gray-300">
                  I am mesmerized by space. Specifically, space exploration. I’ve watched countless hours of the popular television series "Cosmos" as a kid with my Dad. My dream job would be working for a leading edge space company like SpaceX or NASA.
                </p>

                <p className="text-gray-300">
                  I also love the idea of working in a startup or leading a startup. I regularly attend small tech conventions and check news outlets like Hacker News daily. I want to be at the leading-edge of technology and grind for a specific purpose. I have a fire in me that allows me to work hard at the things I do and I’m willing to spend years of my life working day and night to get things done. I want to put my career into my own hands and be able to reap the benefits after having outworked others. Since the school I go to is in the center of Manhattan, I plan to take full advantage of this and meet as many entrepreneurial new yorkers as I can.
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Why I beleive in myself
                </h3>

                <p className="text-gray-300">
                  I tend to make many more mistakes than the average person. I’m always trying new things. Testing out crazy hypotheses. I like making mistakes. I learn from them, then adapt. It speeds up my learning process.
                </p>

                <p className="text-gray-300">
                  I bring a unique persona to engineering. Most engineers are geniuses, but when it comes to social ability they usually fall quite short. Here’s where I come in. I’m a great engineer and an even better socializer and networker.
                </p>

                <p className="text-gray-300">
                  Finally, I want to live a life that I can look back on and be extremely proud of. The legacy I leave behind and the way others view me is very important in the way I manage my life. I take extreme ownership of everything I do.
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }