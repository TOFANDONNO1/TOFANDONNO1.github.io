import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'
export default function Header() {
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

//   console.log(flag);

  return (
    <>
      <header className='flex' id="nav-menu" >
        <div id="sticky">
          <ul>
            <li className='main-brand'>
              <a id="user-detail-name" href='#home'>
                {'<'} <strong>Soumya</strong> {'/>'}
              </a>
            </li>
          </ul>
          <label htmlFor='toggle' className='bar'>
            {flag ? <i onClick={handleClick} className='fas fa-bars'></i> : <ImCross onClick={handleClick} />}
          </label>
          <input type='checkbox' id='toggle' />
          <nav className='nav'>
            <ul className='flex sm-column'>
              <li className='list'>
                <a class="nav-link home" href='#home'>Home</a>
              </li>

              <li className='list'>
                <a  class="nav-link about" href='#about'>About</a>
              </li>

              <li className='list'>
                <a  class="nav-link skills" href='#skills'>Skills</a>
              </li>

              <li className='list'>
                <a href='#tool'>Tools</a>
              </li>

              <li className='list'>
                <a class="nav-link projects" href='#projects'>Projects</a>
              </li>

              <li className='list'>
                <a class="nav-link contact" href='#contact'>Contact</a>
              </li>

              <li className='active'>
                <a class="nav-link resume"  id="resume-button-1" href='./assets/docs/Soumya_Ranjan_Resume.pdf' download>
                  Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}