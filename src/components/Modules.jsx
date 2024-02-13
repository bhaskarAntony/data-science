import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"day1",
        heading:"Configuring API",
        description:"You will develop foundational skills in api configuration. You’ll also create your own personal account in API Service provider to generate auth key to access the service of the api provider.",
        topicCovered:["API Configuration", "API Services", "API Providers"]
    },
    {
        tag:"day2",
        heading:"App Development",
        description:"You will work with React, React Router, axios and Bootstrap to become confident in the React API Handling. You will learn the essentials for working in the cloud, automation, and deployment for a solid foundation in React. You will learn how to build React applications and how to implement and deploy them on real time hosting.",
        topicCovered:["React", "Bootstrap", "Rest API", "Hoisting & deployment "]
    }
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="fs-6 text-center text-white px-4">
    This program is organized into three main modules using the React and Configuring Third Party API. Each module builds on the next, and is designed to prepare you to enter the job market as an entry-level React developer, or to specialize in one of these areas with further skill development.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100">
            <h4 className="m-tag fs-6 p-1">{item.tag}</h4>
        <h1 className="fs-4 text-main">{item.heading}</h1>
        <p className="fs-6">{item.description}</p>
        
        <h4 className="fs-4 text-main">Topics Covered</h4>
        <hr />
      <ul>
      {
            item.topicCovered.map((item1, index1)=>(
                <li className='mb-2'>{item1}</li>
            ))
        }
      </ul>
 
            </div>
            </section>
    ))
   }
    </div>
  </div>
   </div>
  )
}

export default Modules
