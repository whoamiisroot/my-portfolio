import React from "react";
import alztrack from "../assets/imgs/AlzTrack.jpg"
import shell from "../assets/imgs/Shell-logo.jpg"
import sidibennour from "../assets/imgs/FP-Sidi-Bennour.png"
import pokedex from "../assets/imgs/pokedex.png"

const Project = () => {
  const projectsData = [
    {
      name: 'Application mobile  - AlzTrack',
      description: `Application mobile pour la surveillance automatique des personnes
      atteintes d'Alzheimer en utilisant GPS. `,
      image: alztrack,
      link: `https://github.com/whoamiisroot/AlzTrack`,
    },
    {
      name: `Shortest Path - Shell`,
      description: `Application desktop pour trouver le plus court chemin entre tous les stations de shell à Casablanca`,
      image: shell,
      link: `https://github.com/whoamiisroot`,
    },
    {
      name: `Site Web Wordpress - FPSidiBennour`,
      description: `Site web pour la Faculté Polydisciplinaire de sidi Bennour en utilisant Wordpress.`,
      image: sidibennour,
      link: `https://github.com/whoamiisroot`,
    },
    {
      name: `Application mobile  - PokeDex`,
      description: `Une application mobile Pokedex simple avec React Native en utilisant PokeAPI.`,
      image: pokedex,
      link: `https://github.com/whoamiisroot/ensaj-pokedex`,
    },
  ];
  return (
    <section id="project" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg cursor-pointer overflow-hidden shadow-lg transition duration-700 hover:bg-gray-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.name}
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target={"_blank"}
                    className="text-indigo-500 font-semibold transition text-lg hover:text-indigo-600"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
