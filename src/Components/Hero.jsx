import { Link } from '@chakra-ui/react';
import React from 'react';

export default function Hero() {
  return (
    <>
      <section className='hero'  id="home">
        <article className='flex sm-column'  style={{alignItems:'center'}}>
          <div >
            <h1 style={{textTransform: 'capitalize'}}>
              Hey There!<p>✋</p>
            </h1>
            <h1
              style={{
                textTransform: 'capitalize',
                paddingTop: '1rem',
                marginBottom: '-.5rem',
              }}
            >
              I am
            </h1>
            <h2 id="user-detail-name" style={{ fontWeight: 'bold' }}>
              Soumya Ranjan <br /> <small>Rout</small>
            </h2>
            <h3 id="user-detail-intro">
              {/* <a href='#'> */}
                <i className='fas fa-caret-right'> </i> Full Stack Web Developer
              {/* </a> */}
            </h3>
            <ul className='display-flex'>
              <li>
                <a href='https://github.com/TOFANDONNO1' target={"blank"} className='social-icon'>
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/soumya-ranjan-842169222/'
                  className='social-icon'
                  target="blank"
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/TOFANDONNO1' className='social-icon' target={"blank"}>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='ranjansoumya413@gmail.com' className='social-icon' target={"_blank"}>
                  <i className='fa-solid fa-envelope'></i>
                </a>
              </li>
              <li>
                <a href='tel:8249385352' className='social-icon' target={"blank"}>
                  <i className='fa-sharp fa-solid fa-phone'> </i>
                </a>
              </li>
            </ul>
          </div>
          <figure style={{ paddingTop: '3rem'}}>
            <img className="home-img" src='https://avatars.githubusercontent.com/u/103572396?v=4' alt='Soumya' />
          </figure>
        </article>
        {/* <button id="resume-button-2" style={{backgroundColor:'yellow'}}>
              <Link
             id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kb_M7bXCGGET0NVde1GLPsApcoG-etSK/view?usp=sharing"
                )
              }
              href={"./assets/docs/Soumya_Ranjan_Resume.pdf"}
              target={"_blank"}
              download
            >
              Resume
            </Link>
              </button>    */}
      </section>
    </>
  );
};