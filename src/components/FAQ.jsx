import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "Is this bootcamp suitable for beginners?",
        "ans": "Yes, this bootcamp is designed for beginners as well as professionals looking to enhance their skills in conversational AI. Basic programming knowledge will help, but we provide foundational resources to get you started."
    },
    {
        "title": "quest2",
        "quest": "Are there any prerequisites for this bootcamp?",
        "ans": "There are no strict prerequisites, but having a GitHub profile and familiarity with Python programming is recommended for a smoother learning experience."
    },
    {
        "title": "quest3",
        "quest": "What is required to earn a certificate?",
        "ans": "To earn a certificate, you must complete individual assignments, participate in live sessions, and submit a final chatbot project. A minimum cumulative score of 60% is needed to qualify."
    },
    {
        "title": "quest4",
        "quest": "What kind of certificate will I receive?",
        "ans": "You will receive a verified digital certificate of completion that can be shared on LinkedIn, GitHub, and other platforms."
    },
    {
        "title": "quest5",
        "quest": "Can I request a hard copy of the certificate?",
        "ans": "No, only digital certificates will be issued. These are verifiable and shareable on professional networks."
    },
    {
        "title": "quest6",
        "quest": "Do I gain alumni status after completing the bootcamp?",
        "ans": "Alumni status is not granted for this bootcamp. However, completing this program may provide credits toward advanced certifications or full-time programs."
    },
    {
        "title": "quest7",
        "quest": "How long will I have access to the learning materials?",
        "ans": "You will have access to the learning platform and study materials (excluding videos) for 3 months after the bootcamp concludes. Access is restricted to registered participants."
    }
  ]
};

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-white mb-5">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                        allFaqs.faq.map((item,index) => {
                          return (
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}>
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed  border bg-main mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-white"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-black text-justify"> { item.ans } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ
