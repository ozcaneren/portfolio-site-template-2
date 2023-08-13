import React from "react";
import Link from "next/link";
import ContactSection from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/About";

const Home = () => {
  return (
    <div className="min-h-screen p-1 bg-gray-100">
      {/* Header */}
      <Header />

      {/* About Me */}
      <AboutMe />

      {/* Work Experience */}
      <section className="bg-gray-100 py-12 px-2 lg:px-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="grid grid-cols-1 md:h-[240px] md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://www.github.com/ozcaneren"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet
                </h3>
                <h2 className="text-lg cursor-pointer font-semibold">
                  Lorem ipsum dolor sit amet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Link>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://www.github.com/ozcaneren"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet
                </h3>
                <h2 className="text-lg cursor-pointer font-semibold">
                  Lorem ipsum dolor sit amet
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum voluptatibus modi nostrum sequi eveniet exercitationem!
                </p>
              </Link>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://www.github.com/ozcaneren"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet
                </h3>
                <h2 className="text-lg cursor-pointe font-semibold">
                  Lorem ipsum dolor sit amet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, perspiciatis. Officia consequatur deserunt
                  perspiciatis laudantium commodi facere blanditiis aliquam.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-2 lg:px-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 h-[204px] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
