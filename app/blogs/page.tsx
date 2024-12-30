import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function Home() {
  const blogs = [
    {
      title: "For Parents",
      slug: "parents"
    },
    {
      title: "My First Startup Failed",
      slug: "first-fail"
    },
    {
      title: "The Answer To The Universe",
      slug: "universe"
    },
    {
      title: "The Perfect Day",
      slug: "perfect"
    },
    {
      title: "Being In A Frat",
      slug: "frat"
    },
    {
      title: "Personality Tests",
      slug: "personality"
    },
    {
      title: "My First Blog",
      slug: "first"
    }
  ];

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-lexend-bold text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.9)] drop-shadow-[0_0_30px_rgba(74,222,128,0.6)] mb-4">
              BLOGS
            </h1>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>

          <ul className="space-y-6">
            {blogs.map((blog, index) => (
              <li key={index}>
                <Link 
                  href={`/blogs/${blog.slug}`}
                  className="text-xl hover:text-gray-400 transition-colors duration-200"
                >
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <Footer />
      </div>
    </>
  );
}
