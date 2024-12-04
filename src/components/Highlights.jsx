import React from 'react'
import '../styles/highlights.css'

const highlights = [
    {
        image: "https://cdn-icons-png.flaticon.com/128/10789/10789560.png",
        title: "Actionable AI Insights",
        content: "Gain practical experience in building context-aware chatbots with LangChain and LLMs."
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/7257/7257539.png",
        title: "Live Q&A Sessions",
        content: "Have your questions answered in real time by seasoned experts in AI and chatbot development."
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/9464/9464456.png",
        title: "AI Industry Relevance",
        content: "Understand the growing demand for conversational AI and its applications in the current job market."
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/11060/11060995.png",
        title: "Learn Anywhere",
        content: "Attend our live bootcamp sessions from the comfort of your home with flexible scheduling options."
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/3660/3660781.png",
        title: "Interactive Learning",
        content: "Collaborate with industry professionals and peers to enhance your chatbot-building skills."
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/3387/3387740.png",
        title: "Certificates & Resources",
        content: "Receive a certificate of completion and access comprehensive study materials to support your learning."
    },
];


function Highlights() {
  return (
    <section className='highlights text-center mt-5' id='highlight'>
        <h1 className="heading text-white mb-5">Data Science   <br /> Bootcamp <span className='text-main'>Highlights</span></h1>
        <div className="container mt-3">
            <div className="row">
            {
                highlights.map((item)=>(
                    <div className="col-6 col-md-6 col-lg-4 mb-3">
                        <div className="highlight-card h-100">
                            <div className="h-card-header text-center">
                                <img src={item.image} alt="" className="" />
                            </div>
                            <div className="h-card-body">
                                <h1 className="p-large-xl text-700"> <i class="bi bi-stars  mx-2"></i>{item.title}</h1>
                                <p className="p-large">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="text-center mt-5">
        <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del className='text-danger'>1000/-</del> <big>Free</big></button></a>
        </div>
    </section>
  )
}

export default Highlights
