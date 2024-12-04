import React from 'react';
import '../styles/Homehero.css';

const moduledata = [
  {
    tag: "Day 1",
    heading: "Python",
    description:
      "Develop foundational skills in Data Science using Python, NumPy, and Pandas. Understand business domains and their requirements by analyzing data, which will serve as a cornerstone for further learning.",
    topicCovered: ["Python", "NumPy", "Pandas"],
  },
  {
    tag: "Day 2",
    heading: "Data Analytics",
    description:
      "Gain confidence in Data Analysis using Pandas and visualization libraries. Dive deep into data analysis and advance customization and visualization with the Plotly library.",
    topicCovered: ["Pandas", "Viz library", "Visualization with Plotly"],
  },
];

function Modules() {
  return (
    <div className="module-container">
      <h1 className="fs-1 text-white text-center mt-5">
        What you can expect in <span className="text-main">2 days</span>?
      </h1>
      <p className="fs-6 text-center text-white px-4">
        This program is structured into three main modules: understanding business requirements, data processing, and data analysis. Each module builds on the next to prepare you for an entry-level data scientist role or specialization with further skill development.
      </p>
      <div className="container p-3">
        <div className="row align-items-center">
          {moduledata.map((item, index) => (
            <section
              className="col-12 col-sm-12 col-md-6 mb-3 h-100"
              key={index}
            >
              <div className="module p-3 h-100">
                <h4 className="m-tag fs-6 p-1">{item.tag}</h4>
                <h2 className="fs-4 text-main">{item.heading}</h2>
                <p className="fs-6">{item.description}</p>

                <h3 className="fs-5 text-main">Topics Covered</h3>
                <hr />
                <ul>
                  {item.topicCovered.map((topic, idx) => (
                    <li className="mb-2" key={idx}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modules;
