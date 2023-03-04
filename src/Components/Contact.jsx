import React from 'react';

export default function Contact() {
  return (
    <>
      <section id='contact'>
        <h4 style={{ marginBottom: '4rem' }}> <u>Get In Touch</u> </h4>
        <div className='contact-box   sm-center   mn-flex-start '>
          <div className='flex-20 sm-flex-50' style={{marginTop: "5px"}}>
            <h3 className='contact-h3 '>Let's Connect Here ! </h3>

            <div className='contact-icon-div' style={{marginTop: "15px"}}>
              <a  id="contact-linkedin"
                href='https://www.linkedin.com/in/soumya-ranjan-842169222/'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://twitter.com/TOFANDONNO1' target='blank'>
                {' '}
                <i className='fa-brands fa-square-twitter'></i>
              </a>
              <a id="contact-github" href='https://github.com/TOFANDONNO1' target='blank'>
                {' '}
                <i className='fa-brands fa-square-github'></i>{' '}
              </a>
              <a
                href='http://api.whatsapp.com/send?phone=8249385352'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-square-whatsapp'></i>{' '}
              </a>
            </div>
          </div>

          <div className='flex-50 sm-flex-50 sm-between '>
            <h3 className='contact-h3 center'>
              Make Something Amazing Together
            </h3>

            <div className='contact-mail sm-bet'>
              <div className='flex-65 view-box sm-flex-60'>
                <a
                id="contact-email"
                  className='mail'
                  target='blank'
                  href='mailto:ranjansoumya413@gmail.com  '
                >
                  Mail Me : ranjansoumya413@gmail.com
                </a>
              </div>
              <div className='flex-40 view-box sm-flex-35'>
                {' '}
                <a  id="contact-phone" className='tel' target='blank' href='tel:8249385352'>
                  Call Me : +918249385352
                </a>
              </div>
            </div>
          </div>
  


  
          <div className='flex-20 sm-flex-50 '>
            <h3 className='contact-h3'> Want To Know More !</h3>
            <div className='resume '>
              <div className='view-box sm-flex-45 '>
                <a   id="resume-link-2" href='./assets/docs/Soumya_Ranjan_Resume.pdf' download>
                  Download Resume{' '}
                </a>
              </div>
              <div className='view-box  sm-flex-45 '>
                <a  id="resume-link-1"
                  target='blank'
                  href='https://drive.google.com/file/d/1kb_M7bXCGGET0NVde1GLPsApcoG-etSK/view?usp=sharing'
                >
                  View Resume{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}