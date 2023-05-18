import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "2018-2019",
      cardTitle: "Baccalauréat",
      cardSubtitle:
        "Baccalauréat scientifique",
      cardDetailedText:
        "Baccalauréat Sciences Expérimentales filière Physique Chimie:Mention très bien",
    },
    {
      title: "2020-2022",
      cardTitle: "Cycle préparatoire",
      cardSubtitle:
"Cycle préparatoire intégré",
      cardDetailedText:
        "Cycle préparatoire intégré à l'École Nationale des Sciences Appliquées à El Jadida",
    },
    {
      title: "2022-Présent",
      cardTitle: "Cycle d'ingenieur",
      cardSubtitle:
"Cycle d'ingénieur à l'ENSAJ",
      cardDetailedText:
"Cycle d'ingénieur à l'École Nationale des Sciences Appliquées à El Jadida : Ingénierie en informatique et technologies émergente (2ITE)"
   },
  ];

  return (
    <section id="timeline" className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Timeline
        </h2>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Chrono
            items={items}
            mode="VERTICAL"
            slideShow
            slideItemDuration={3000}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
