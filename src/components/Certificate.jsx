import React from 'react';
import certificate from '../images/badge.svg';

function Certificate() {
  return (
    <section className="container py-4 mt-5" id="certificate">
      <h1 className="text-center text-white mb-5">
        Receive a <span className="text-main">Certificate of Completion</span> for participating in an<br />
        Intensive Bootcamp by <span className="text-main">Be-Practical</span>
      </h1>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <img src={certificate} alt="Certificate Badge" className="w-100 certificate border-0" />
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <h2 className="p-large-xl text-900 text-main mb-3 mt-4">
            Certificate of Achievement:
          </h2>
          <p className="text-white p-large">
            This certificate is awarded to participants in recognition of their active engagement, dedication, 
            and successful completion of the <strong>Data Science Bootcamp</strong>. Participants gained 
            valuable insights and hands-on experience in key Data Science concepts and tools.
          </p>
          <h2 className="p-large-xl text-900 text-main mb-3">Data Science Bootcamp:</h2>
          <p className="p-large text-white">
            The bootcamp was conducted on <strong>9<sup>th</sup> - 10<sup>th</sup> Dec 2024</strong> and spanned a total 
            duration of <strong>4 hours</strong>. The program provided ample opportunities for participants to acquire 
            practical skills and knowledge essential for excelling in the field of Data Science.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
