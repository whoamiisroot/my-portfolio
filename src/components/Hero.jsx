import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div>
            <img src="me2.png" alt="Your Image" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
Erasekh Youssef         
 </h1>
          <h2 className="italic text-neutral-600">
          ❝ An idiot admires complexity, a genius admires simplicity. ❞
          </h2>
          <p className="mt-5 text-xl text-gray-500 ">
          Étudiant en ingénierie informatique et technologies émergentes à l'ENSAJ, avec une passion pour l'innovation et une volonté de créer des technologies de pointe qui transforment le monde.          </p>
          <div className="mt-10">
            <a
              href="https://www.linkedin.com/in/youssef-erasekh-858b51262/"
              className="bg-indigo-500 transition duration-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-md"
            >
              Contactez moi
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
