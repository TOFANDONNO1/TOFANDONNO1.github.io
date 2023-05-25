import React from 'react';
import Githubcalender from 'react-github-calendar';
import { VscGithub } from 'react-icons/vsc';

export default function Stats() {
  return (
    <>
      <section id='stats'>
        <h2> <u>Github Stats</u> </h2>
        <div className='sm-stata-div stats-div' >
          <img id="github-stats-card"
            className='img2 mn-sm-bet'
            src='https://github-readme-stats.vercel.app/api?username=TOFANDONNO1&show_icons=true&theme=dark'
            alt='TOFANDONNO1'
           
          />
          <img id="github-top-langs"
            className='img1 mn-sm-bet'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=TOFANDONNO1&layout=compact'
            alt='TOFANDONNO1'
          />
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=TOFANDONNO1" alt="Stak" />

        </div>
        <div className='git-icon'>
          <a
            className='anchor-tags'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/TOFANDONNO1'
          >
            <abbr title='Open Github Profile'>
              <VscGithub className='github-profile' />
            </abbr>
          </a>
        </div>
        {/* <div className='sm-stata-div stats-div'>
        </div> */}
        <br />

        <div margin="auto" class="react-activity-calendar">
          <Githubcalender className="c" username="TOFANDONNO1" blockSize={10} color={"rgb(81,148,240)"} />
        </div>
      </section>
    </>
  );
}