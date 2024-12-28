import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function Home() {
  const blogs = [
    {
      title: "My First Startup Failed",
      slug: "example-blog"
    },
    {
      title: "The Answer To The Universe",
      slug: "example-blog"
    },
    {
      title: "The Perfect Day",
      slug: "example-blog"
    },
    {
      title: "Being In A Frat",
      slug: "example-blog"
    },
    {
      title: "Personality Tests",
      slug: "example-blog"
    },
    {
      title: "My First Blog",
      slug: "example-blog"
    }
  ];

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
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
