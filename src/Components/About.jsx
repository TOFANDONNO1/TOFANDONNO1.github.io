
import React from 'react';

function About() {
  return (
    <>
      <section  id="about" className="about-section about section">
        <article>
          <h2   className="about section"> <u>About Me</u> </h2>
          <p className='abuot-p'>
            I am <a style={{color: '#c12020',fontWeight: 'bold', fontSize: '1.5rem'}} href='#contact'>Soumya Ranjan Rout.</a>
            <br/>
             I am a MERN stack developer.
          </p>
          {/* <div className='view-box sm-flex-45 '> */}
                {/* <a   id="resume-link-2" href='./assets/docs/Soumya_Ranjan_Resume.pdf' download>
                  Download Resume{' '}
                </a> */}
              {/* </div> */}
               <button id="resume-button-2" style={{backgroundColor:'yellow'}}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gaANNDjHx1_rVRdzMl_y96Dj4dRPTCgG/view?usp=sharing"
                  )
                }
               >
              <a
             id="resume-link-2"
             
              href={"./assets/docs/Soumya_Ranjan_Resume.pdf"}
              target="_blank"
              rel='noreferrer'
              download="Soumya_Ranjan_Resume.pdf"
            >
              Resume
            </a>
              </button> 
              {/* <div><button id="resume-button-2"  onclick="window.open('https://drive.google.com/file/d/1kb_M7bXCGGET0NVde1GLPsApcoG-etSK/view?usp=sharing')">
              <a href="./assets/docs/Soumya_Ranjan_Resume.pdf" id="resume-link-2"

                            download="Soumya_Ranjan_Resume">Download Resume</a>
              </button>
                           
                                   
                        </div> */}
          <p className='abuot-p'> I learnd Full Stack Web Development from <a style={{color: '#c12020', fontWeight: 'bold' ,fontSize: '1.5rem'}} href='https://www.masaischool.com/' target="blank">Masai School. </a>
          <br/>
          I am comfortable with both Frontend and Backend.
           </p>
          <p className='abuot-p'>
            {' '}
            <strong> Backend : </strong> Learned Node.js, MongoDB, Express.js.
            Continued with learning Authentication, Authorization, OAuth and much more.
          </p>
          <p className='abuot-p' id="user-detail-intro">
            {' '}
            <strong> Frontend : </strong> HTML,CSS,JavaScript,Learned React, React Router, React
            Router Dom, Redux. Continued with Functional Components, Class
            Components, State, Props, Context API, HOC, Render Props , Hooks and
            much more.
          </p>

          <ul>
            <li className='brand flex'>
              {/* <a href=''></a> */}
              <a href='home'>
                {'<'} <strong>Soumya</strong>
                {' />'}
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default About;