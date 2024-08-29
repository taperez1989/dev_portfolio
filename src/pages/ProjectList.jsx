import React from 'react';

function ProjectList() {
  return (
    <div className='projects'>
      <h2>Project List</h2>

      <div className='projectGrid'>
        <div className='projectItem'>
          <img src="/images/fit_find.png" alt="Fitness Finder" className='projectImages' />
          <a href='https://taperez1989.github.io/Super_secret_project/'>Fitness Finder</a>
        </div>

        <div className='projectItem'>
          <img src="/images/gameChaser.png" alt="Game Chaser" className="projectImages" />
          <a href="https://gamechaser-wlza.onrender.com/">Game Chaser</a>
        </div>

        <div>
          <div id="express" >
            <div id="links">
              <a href="https://express-notes-1-9i9x.onrender.com/">link</a>
              <a href="https://github.com/taperez1989/Express_notes.git">github</a>
            </div>
          </div>
          <h4>Express Notes</h4>
        </div>

        <div>
          <div id='employee'>
            <div id='links'>
              <a href="https://taperez1989.github.io/Employ_track/">link</a>
              <a href="https://github.com/taperez1989/Employ_track.git">github</a>
            </div>
          </div>
          <h4>Employee Tracker</h4>
        </div>

        <div>
          <div id='blog'>
            <div id='links'>
              <a href="https://taperez1989.github.io/Blog_api/">link</a>
              <a href="https://github.com/taperez1989/Blog_api.git">github</a>
            </div>
          </div>
          <h4>Blog API</h4>
        </div>

        <div>
          <div id='task'>
            <div id='links'>
              <a href="https://taperez1989.github.io/2Do_tasks/">link</a>
              <a href="https://github.com/taperez1989/2Do_tasks.git">github</a>
            </div>
          </div>
          <h4>To Do Tasks</h4>
        </div>

      </div>
    </div>
  );
}

export default ProjectList;






// src = "/images/fit_find.png"