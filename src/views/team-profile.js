import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import './team-profile.css'

const TeamProfile = (props) => {
  return (
    <div className="team-profile-container">
      <Helmet>
        <title>Team Profile - Landing Page</title>
        <meta property="og:title" content="Team Profile - Landing Page" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name9"></Navbar>
      <Banner rootClassName="banner-root-class-name9"></Banner>
      <div className="team-profile-personal-reflections">
        <div className="team-profile-container01">
          <div className="team-profile-container02">
            <div className="team-profile-container03">
              <div className="team-profile-jake-reflection">
                <div className="team-profile-thoughts">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="team-profile-student-pic"
                  >
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="team-profile-reflection">
                    <span>
                      I can be an introverted person most of the time, although
                      I am still able to come out of my shell and excel when the
                      environment is more casual. I work quite well autonomously
                      and can easily blend into working collaboratively. Both of
                      these skills are essential to being a quality part of a
                      team. Being a fast learner, this could create negative
                      impacts on a team as I tend to get frustrated if others do
                      not keep up. As I continue to gain life experience, I have
                      also developed patience and I further plan on becoming
                      more mindful of other people&apos;s learning styles.
                      Having a stronger prospecting personality, I generally
                      like to consider coming up with multiple ways to complete
                      a task. This can be advantageous to a team as it could
                      help other people reason with different ideas and help the
                      decision-making. I believe that my personality would best
                      match people with similar traits and like-mindedness. I
                      would appreciate having a more extroverted person be a
                      part of my team, as there may be times when a “louder”
                      voice is needed to communicate.
                    </span>
                  </span>
                  <div className="team-profile-container04">
                    <span className="team-profile-student-name">Jake</span>
                  </div>
                  <div className="team-profile-container05"></div>
                </div>
                <img
                  alt="Jake"
                  src="/playground_assets/photoofme-200h.jpg"
                  className="team-profile-jake"
                />
              </div>
            </div>
            <div className="team-profile-michelle-reflection">
              <div className="team-profile-thoughts1">
                <svg viewBox="0 0 1024 1024" className="team-profile-icon01">
                  <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                </svg>
                <span className="team-profile-reflection1">
                  <span>
                    I think these tests show that I can be a supportive but firm
                    aspect of the group. My most significant weaknesses are
                    shyness, taking things too personally, and overloading
                    myself. The awareness of this gives me hope that I will
                    reach out to my group members if I struggle and need a
                    morale boost. My goal is to be a positive influence on my
                    group members and help push everyone in the right direction
                    so we can all achieve our best. I enjoy helping people
                    learn, whether by contributing with them or teaching them
                    how to do things they’re stuck on. This is an excellent
                    quality to contribute to a team because it will help push
                    the group forward when some people might be stuck. I enjoy
                    being organised and perfecting everything I do; I feel like
                    this can be good and bad in a group setting. Good because it
                    helps set up standards for the team to reach, which I take
                    joy in assisting others to achieve. Bad because some people
                    might find it overbearing or annoying. I’d hate to consider
                    myself a hindrance to my team with any of my actions; I just
                    want to put my best foot forward and hope it pays off.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="team-profile-container06">
                  <span className="team-profile-student-name1">Michelle</span>
                </div>
              </div>
              <img
                alt="Michelle"
                src="/playground_assets/michelle-200h.jpg"
                className="team-profile-michelle"
              />
            </div>
          </div>
          <div className="team-profile-container07">
            <div className="team-profile-helia-reflection">
              <svg viewBox="0 0 1024 1024" className="team-profile-icon03">
                <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
              </svg>
              <span className="team-profile-reflection2">
                <span>
                  As an extrovert, I&apos;m not afraid to share my opinions.
                  This could be very helpful in a team environment to bring new
                  ideas and challenge everyone. However, the downfall of being
                  an extrovert is I’m not always the best listener and can get
                  overly excited to share my thoughts and opinions. This could
                  affect me in a team environment when team discussions occur. I
                  also enjoy discussing topics that might be out of the box and
                  uncomfortable, which introverted-type personalities might not
                  be comfortable with. I need to bear in mind that I should work
                  on being a better listener in a team environment and let
                  everyone share their ideas freely. As a debater, I’m a rapid
                  thinker and can shift views quickly, indicating that I have
                  difficulty focusing on a topic as the initial excitement
                  slowly wears off. This could be ineffective in a group
                  environment, explicitly working on group projects. I need to
                  consider that I have responsibilities, and other teammates
                  rely on me to solve this problem.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="team-profile-profile">
                <img
                  alt="Helia"
                  src="/playground_assets/helia%20photo-200w.png"
                  className="team-profile-helia"
                />
                <div className="team-profile-container08">
                  <span className="team-profile-student-name2">Helia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-profile-personal-reflections1">
        <div className="team-profile-container09">
          <div className="team-profile-container10">
            <div className="team-profile-charlie-reflection">
              <svg viewBox="0 0 1024 1024" className="team-profile-icon05">
                <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
              </svg>
              <span className="team-profile-reflection3">
                <span></span>
                <br></br>
                <span>
                  As an introvert, it’s said that that comes with emotional
                  intelligence. I’m able to assess situations from (more so) the
                  emotional side, allowing me to see patterns and somewhat
                  predict people&apos;s choices and future behaviour. I find
                  this very helpful if I do these things and be a support person
                  for a team. I love helping people, which I believe will be
                  another strength. A downfall of this personality type is I
                  tend to see the best in people who can also be described as
                  having a blurred viewpoint. This personality type is also
                  described as having a very high standard of how things should
                  go, and with a susceptible nervous system, this can lead to
                  things that go against my instincts and tendencies. This
                  should be a relatively straightforward process to overcome by
                  trusting the process and the team. I easily take on other
                  points of view to allow space for other ideas. Having a high
                  standard for things can also be a pro, as this means I’m
                  willing to go above and beyond to help my team reach our goal.
                </span>
                <br></br>
                <span></span>
              </span>
              <div className="team-profile-profile1">
                <img
                  alt="Charlie"
                  src="/playground_assets/charlie-200w.jpg"
                  className="team-profile-charlie"
                />
                <div className="team-profile-container11">
                  <span className="team-profile-student-name3">Charlie</span>
                </div>
              </div>
            </div>
          </div>
          <div className="team-profile-container12">
            <div className="team-profile-container13">
              <div className="team-profile-blayne-reflection">
                <div className="team-profile-thoughts2">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="team-profile-student-pic1"
                  >
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="team-profile-reflection4">
                    <span>
                      These results determine that my personality leans towards
                      reserved and introverted. I can see this leading to
                      difficulty asking for assistance in group settings;
                      however, I will endeavour to stay on top of my work and
                      not hold back from discussion with my group. A positive to
                      being reserved is that individual portions of work will be
                      greatly focused on, and my drive to get things done is
                      solid. From the Myers Briggs test results, the strategy of
                      constant improvement combined with the Logician type
                      demonstrates that I will hopefully be able to help reason
                      positively with my group and apply continuous improvement,
                      achieving great success. Within a team setting, I would
                      describe the role I slot into as the quieter, behind the
                      scene’s worker, doing all tasks required of me and
                      adapting to direction changes with no issues.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                  <div className="team-profile-container14">
                    <span className="team-profile-student-name4">Blayne</span>
                  </div>
                  <div className="team-profile-container15"></div>
                </div>
                <img
                  alt="Blayne"
                  src="/playground_assets/blayne-200w.jpg"
                  className="team-profile-blayne"
                />
              </div>
            </div>
            <div className="team-profile-burak-reflection">
              <div className="team-profile-thoughts3">
                <svg viewBox="0 0 1024 1024" className="team-profile-icon08">
                  <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                </svg>
                <span className="team-profile-reflection5">
                  <span>
                    I am highly visual, extraverted, and expressive, driven by
                    rational thought and intuitive decision making, and lean
                    heavily toward optimism. These traits naturally influence me
                    to get along with team members who are also like myself and
                    have similar characteristics. I need to be sensitive and
                    considerate of more introverted people, as they tend to
                    consider feelings and intricate details when
                    decision-making. I also need to be on the lookout for a
                    potential clash with low-openness team members who prefer a
                    more tightly structured, traditional approach to a task.
                    When forming a team, I believe it is essential to balance
                    personality types and take advantage of varied talents and
                    skillset to achieve the synergy of a well-rounded team. It
                    is vital to foster a team spirit of respect, collaboration,
                    and striving towards a common goal.
                  </span>
                  <br></br>
                  <span></span>
                </span>
                <div className="team-profile-container16">
                  <span className="team-profile-student-name5">Burak</span>
                </div>
              </div>
              <img
                alt="Burak"
                src="/playground_assets/burak-200h.jpg"
                className="team-profile-burak"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="team-profile-container17">
        <div className="team-profile-team-profile"></div>
        <div className="team-profile-team-profile1"></div>
        <div className="team-profile-gallery">
          <div
            id="blayne's test results"
            className="team-profile-blaynes-test-results"
          >
            <img
              alt="Blayne's Test Results"
              src="/playground_assets/blayne%20test%20results-1400w.png"
              className="team-profile-blaynes-test-results1"
            />
            <h2 className="team-profile-blaynes-test-results2">
              <span>Blayne&apos;s Test Results</span>
            </h2>
          </div>
          <div className="team-profile-buraks-test-results">
            <img
              id="burak's test results"
              alt="Burak's Test Results"
              src="/playground_assets/burak's%20test%20results-1400w.png"
              className="team-profile-buraks-test-results1"
            />
            <h2 className="team-profile-buraks-test-results2">
              Burak&apos;s Test Results
            </h2>
          </div>
          <div className="team-profile-charlies-test-results">
            <img
              id="charlie's test results"
              alt="Charlie's Test Results"
              src="/playground_assets/charlie's%20test%20results-1400w.png"
              className="team-profile-charlies-test-results1"
            />
            <h2 className="team-profile-charlies-test-results2">
              Charlie&apos;s Test Results
            </h2>
          </div>
          <div className="team-profile-helias-test-results">
            <img
              id="helia's test results"
              alt="Helia's Test Results"
              src="/playground_assets/helia's%20test%20results-1400w.png"
              className="team-profile-helias-test-results1"
            />
            <h2 className="team-profile-helias-test-results2">
              Helia&apos;s Test Results
            </h2>
          </div>
          <div className="team-profile-jakes-test-results">
            <img
              id="jake's test results"
              alt="Jake's Test Results"
              src="/playground_assets/jake's%20test%20results-1400w.png"
              className="team-profile-jakes-test-results1"
            />
            <h2 className="team-profile-jakes-test-results2">
              Jake&apos;s Test Results
            </h2>
          </div>
          <div className="team-profile-michelles-test-results">
            <img
              id="michelle's test results"
              alt="Michelle's Test Results"
              src="/playground_assets/michelle's%20test%20results-1400w.png"
              className="team-profile-michelles-test-results1"
            />
            <h2 className="team-profile-michelles-test-results2">
              Michelle&apos;s Test Results
            </h2>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default TeamProfile
