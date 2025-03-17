import React from 'react';
import { useNavigate } from 'react-router-dom';
function About() {

  const navigate = useNavigate();

  const signUp = () => {
    navigate('/signup');
  };


  return (
    <div className="about-container">
      <div className="two-column-layout">
        {/* Left Column remains always visible */}
        <div className="left-column">
          <h1>Founder's Bio</h1>
          <div className="about-content">
            <p>
              <strong>Antoine McDonald</strong> is a Rochester native and proud product of the Rochester City School District. After graduating from Wilson Magnet High School in 2010, McDonald earned his Bachelor's Degree in Mass Communications – Print and Broadcast Journalism from The Lincoln University in Pennsylvania. McDonald also earned his Master's Degree in Library Science – Academic Concentration from North Carolina Central University.
            </p>
            <p>
              McDonald is a Reference Librarian in the Local History and Genealogy Division where he currently serves as the only Black male librarian in the Rochester Public Library system, and Project Manager for the Archive of Black History and Culture. McDonald enjoys traveling, exercising, reading and spending time with family and friends.
            </p>
          </div>
          
        </div>

        {/* Right Column with Book Club History and Agenda */}
        <div className="right-column">
            <div className="contact-info">
                <h1>Contact Information</h1>
                <p>Email: <a href="mailto:twaanllc@gmail.com">twaanllc@gmail.com</a></p>
                <p>Instagram: <a href="https://www.instagram.com/twaanllc">@mtwaanllc</a></p>
                <p>Facebook: <a href="https://www.facebook.com/twaanllc">TWAAN LLC</a></p>
                <p>linktree: <a href="https://linktr.ee/twaanllc">linktree</a></p>
                <p>linkedin: <a href="https://www.linkedin.com/in/antoine-a-mcdonald-9b7ab2124">linkedin</a></p>
            </div>
        </div>
      </div>
      <div className="two-column-layout">
        {/* Left Column remains always visible */}
        <div className="left-column">
        <div className="book-club-history">
            <h1>Book Club History</h1>
            <p>
              The Total Wellness, Academic and Advocacy Network (T.W.A.A.N) was developed because of my experiences working with teens as a Youth Services Librarian. I often struggled with how to provide our teens with educational and meaningful engagement while also providing a fun and cool experience. Being in a library, with an infinite supply of books and digital resources, naturally, I started a book club.
            </p>
            <p>
              We met once a week and grew from one or two attendees to five or six and then ten. At our peak we averaged about 20 young men attending on a regular basis. Originally TWAAN's Book Club started out with just young men, but due to popular demand, we expanded to include young women.
            </p>
            <p>
              Health and Fitness has always been an important component of the book club sessions from the very beginning. In addition to keeping our participants mentally engaged, we also wanted to ensure that they are remaining physically active which is why I included a mini workout into our meetings. In the past, we have collaborated with athletes and yoga instructors to facilitate physical activities and further engage our youth.
            </p>
            <p>
              As time passed, and we began garnering more momentum among new and existing participants, the world shut down due to COVID-19. I was working from home for over five months causing the Book Club to transition to meeting online via ZOOM.
            </p>
            <p>
              During the pandemic, morale was down in the world and the thoughts and feelings of our young people were being pushed aside and/or forgotten. The Mental Health Check-In's were introduced during this time to provide a platform for our youth to express themselves and talk about anything on their mind. At this same time, we also introduced the Local / World News Discussion allowing participants to stay abreast of current topics locally and around the world during a time where everyone felt isolated.
            </p>
            <p>
              The Total Wellness, Academic and Advocacy Network (T.W.A.A.N) was born out of the idea that I, as a young librarian can single handedly "Make Reading Cool Again", but the fact is, reading has never been viewed as the "cool" thing to do, but with TWAAN Book Club, I'm hoping to change that!
            </p>
            <p>
              I'm hoping to teach our young people that reading can enhance your personal literacy skills, your confidence, and your knowledge, and show them that it is very cool!
            </p>
          </div>
        </div>

        {/* Right Column with Book Club History and Agenda */}
        <div className="right-column">
        <div className="book-club-agenda-container">
          <div className="book-club-agenda">
            <h2>Book Club Agenda</h2>
            <h3>Mental Health Check – In (10 min.)</h3>
            <p>Each participant can answer these questions but not required to:</p>
            <ul>
              <li>How do you feel?</li>
              <li>What's new? What have you learned?</li>
              <li>What are you looking forward too?</li>
              <li>Care to Share? (This can be anything; for example, what is your current short-term goal?)</li>
            </ul>

            <h3>Local / World News Discussion (10 min.)</h3>
            <ul>
              <li>Participants discuss a topic with a local focus. (5 min.)</li>
              <li>Participants discuss a topic with a national or world focus. (5 min.)</li>
            </ul>

            <h3>Workout (10 min.)</h3>
            <ul>
              <li>Light Calisthenics such as Jumping Jacks, Jog in place, High Knees</li>
              <li>Moderate exercises such as Push-ups, Sit-ups, Squats</li>
              <li>Yoga – Meditation, and Stretching</li>
            </ul>

            <h3>Group Reading (30 min.)</h3>
            <ul>
              <li>All participants are provided their own copy of the reading material either digital or physical.</li>
              <li>All participants are strongly encouraged to read out loud and participate in group reading.</li>
              <li>All participants are provided a free TWAAN journal for note taking, vocabulary list, etc.</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      
      <button className="signup-button" onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default About;
