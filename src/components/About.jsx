import React from "react";
import PHP from '../assets/icons/php.png';
import SQL from '../assets/icons/mysql.png';
import kotlin from '../assets/icons/Kotlin_Icon.png'
import firebase from '../assets/icons/firebase_logo.png'
import wordpress from '../assets/icons/wordpress-logo.png'
import android from '../assets/icons/android.png'



const About = () => {
  const skillsData = [
    {
      name: `HTML`,
      logo: `https://img.icons8.com/color/48/000000/html-5.png`,
    },
    {
      name: `CSS`,
      logo: `https://img.icons8.com/color/48/000000/css3.png`,
    },
    {
      name: `JavaScript`,
      logo: `https://img.icons8.com/color/48/000000/javascript.png`,
    },
    {
      name: `Python`,
      logo: `https://vikram-myportfolio.netlify.app/Images/python.webp`,
    },
    {
      name: `PHP`,
      logo: PHP,
    },
    {
      name: `MongoDB`,
      logo: `https://vikram-myportfolio.netlify.app/Images/mongodb.webp`,
    },
    {
      name: `Java`,
      logo: `https://vikram-myportfolio.netlify.app/Images/java.webp`,
    },
    {
      name: `SQL`,
      logo: SQL,
    },
    {
      name: `Kotlin`,
      logo: kotlin,
    },
    {
      name: `Firebase`,
      logo: firebase,
    },
    {
      name: `Wordpress`,
      logo: wordpress,
    },
    {
      name: `Android Studio`,
      logo: android,
    },
  ];
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-500 ">
          Je suis un étudiant en ingénierie informatique passionné par la technologie et le développement de logiciels. Ayant acquis une solide base de connaissances en programmation et en conception de systèmes informatiques, je suis constamment à la recherche de nouvelles opportunités pour approfondir mes compétences et relever de nouveaux défis. Avec une expérience dans la création d'applications web et mobiles en utilisant une variété de technologies, notamment :          </p>
          <div className="mt-8 flex justify-center">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <img
                    className="h-10 w-10"
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <span className="mt-2 text-gray-600 font-bold">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
