import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import './ideal-jobs.css'

const IdealJobs = (props) => {
  return (
    <div className="ideal-jobs-container">
      <Helmet>
        <title>Ideal Jobs - Landing Page</title>
        <meta property="og:title" content="Ideal Jobs - Landing Page" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <Banner rootClassName="banner-root-class-name2"></Banner>
      <div className="ideal-jobs-container01">
        <img
          alt="image"
          src="/playground_assets/screenshot%202022-04-18%20212326-800w.png"
          className="ideal-jobs-image"
        />
        <span className="ideal-jobs-ideal-job-text">
          <span>
            The table above demonstrates the key knowledge and career plan
            differences in our ideal jobs. As our ideal jobs are all in
            different spectrums of the IT industry, we are going to discuss the
            key differences between all aspects of the job as well.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            As we obtain our ideal job, our differences between jobs will differ
            in many ways, including our responsibilities, interactions with
            other co-workers, salaries and certifications needed for future
            potential growth. Below is an in-depth explanation of the
            differences of each of our ideal jobs, responsibilities, the
            specific career pathways and our salary ranges. We chose to not
            touch on skills here because we went in-depth on skill differences
            and similarities in Industry Data.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Database Administrator will have constant meetings with various
            teams within the company to ensure the best way to design databases
            and business logic for each team. They are responsible for
            corruption checking and solving throughout the company and will
            provide critical technical advice, contributing to developing and
            implementing new and existing systems, designing preventative
            measures, and maintaining backups. The average salary of a Database
            Administrator in Australia is $100,327, with the potential for
            growth by obtaining cloud certifications and experience, which could
            also assist them in stepping into a Database developer role and
            increase their salary by $10,000. On average, earning $100k will
            place them in the &apos;upper-middle class&apos; based on the
            Australian standard salary market.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Service Desk Analyst consists of three tiers, each holding its own
            responsibilities. A level 1 will be providing internal and external
            customer support. They typically manage simple hardware, software or
            network issues. If they cannot address the problem on their own,
            they will refer it to level 2. Level 2 is responsible for all new
            and existing IT support issues that have been escalated. They are
            also responsible for managing level 1 technicians, providing support
            in the maintenance of IT networks and systems, and handling the
            company&apos;s ticketing systems. When confronted with a problem
            they cannot solve, they can escalate it to Level 3. Level 3 is the
            first point of contact with stakeholders for troubleshooting issues,
            typically in urgent matters. They resolve the most complex issues
            and identify trends in issue reporting to develop preventative
            solutions. The average salary of a Service Desk Analyst is $73,875,
            with the potential for growth by obtaining A+, Network+ and Server+
            certifications which will assist them in stepping to a Systems
            Administrator role and increase their salary by $21,000. On average,
            earning under $100k will place them in the &apos;middle class&apos;
            based on the Australian standard salary market.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Penetration Tester will be responsible for protecting a business
            and its clients from daily risk events and theft by performing
            effective and proactive management. They will use tools such as
            Wireshark and Nmap. Their testing can be performed as either
            external or internal. External testing will be done using manual or
            automated techniques to identify and exploit flaws found on external
            assets. Internal testing will explore a company&apos;s system,
            applications, devices, services and user behaviours to identify
            vulnerabilities and security flaws. The average salary of a
            Penetration tester starts at $91,713, potentially increasing up to
            $134,638 with more experience. Their potential growth can be aided
            by obtaining a masters degree in cyber security and increasing their
            knowledge and experience with various risk assessment tools and
            methods, which will assist them in stepping into a Cyber Security
            Engineer role and increase their salary by $40,000. On average,
            earning well over $100k will place them in the &apos;upper-middle
            class&apos; based on the Australian standard salary market.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Cyber Threat Hunter will be responsible for developing
            threat-hunting hypotheses, identifying network traffic patterns,
            investigating security incidents, performing ongoing checks and
            maintenance on a company&apos;s devices and system functions, using
            well known malicious techniques and behaviours and running through
            lab attacks demos with potential customers. The average salary of a
            Cyber Threat Hunter is $119,336, with the potential for growth by
            completing a masters in cyber security and gaining seven to ten
            years of experience, which will assist them in stepping into a Chief
            Information Security Officer and increase their salary by $186,000.
            Earning well over $300k on average will place them in the
            &apos;upper class&apos; based on the Australian standard salary
            market.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Machine Learning Engineer will be responsible for keeping up to
            date with industry trends in AI and machine learning, developing and
            maintaining cloud-based platforms, contributing in a team with data
            scientists and analysts to build and maintain models, review code
            and share ownership. The average salary of a Machine Learning
            Engineer is $112,31, with the potential for growth by gaining five
            years of experience building large scale machine learning systems,
            which will assist them in stepping into a Senior Machine Learning
            Engineer role and increase their salary by $40,000. Earning over
            $100k on average will place them in the ‘upper-middle class’ based
            on the Australian standard salary market.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A Full Stack Developer will be responsible for writing reusable and
            efficient code, implementing security and data protection,
            identifying and fixing problem areas in existing code, designing and
            developing software and keeping up to date with industry trends. The
            average salary of a Full Stack Developer is $117,500, with the
            potential for growth by gaining three to five years of experience,
            which will assist them in stepping into a Senior Stack Developer
            role and increase their salary by $33,000. Earning over $100k on
            average will place them in the ‘upper-middle class’ based on the
            Australian standard salary market.
          </span>
        </span>
        <div className="ideal-jobs-container02">
          <div className="ideal-jobs-container03">
            <div className="ideal-jobs-container04">
              <div className="ideal-jobs-blayne-profile">
                <div className="ideal-jobs-thoughts">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="ideal-jobs-student-pic"
                  >
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="ideal-jobs-thoughts01">
                    <span>
                      My ideal job was as a Test Analyst. Having looked at the
                      Burning Glass data, my interest in analysis to find
                      imperfections still stands, however, my ideal job has
                      changed not due to the data itself, but rather personal
                      research on machine learning and artificial intelligence.
                      Diverting my career path interest toward AI leads to the
                      development of skills that are broadly applicable to many
                      fields of IT, including test analysis. Therefore my ideal
                      job is in the field of AI development. As we keep moving
                      into the future, AI is becoming more prevalent, in
                      interactable smartphone applications and industries
                      because it’s more efficient when performed by an algorithm
                      rather than a human thought process. The idea of a future
                      of self-driving cars and assistant robots is fascinating
                      to me, and we are already on the verge of this being a
                      reality with huge leaps in this technology. I have much to
                      learn and many skills to develop to achieve this goal, as
                      well as consideration of AI minor subjects in my Bachelor
                      of Information Technology.
                    </span>
                  </span>
                  <div className="ideal-jobs-container05">
                    <span className="ideal-jobs-student-name">Blayne</span>
                  </div>
                  <div className="ideal-jobs-container06"></div>
                </div>
                <img
                  alt="Blayne"
                  src="163f35a4-a996-41cc-bbfb-7d3bedbb7b78"
                  className="ideal-jobs-blayne"
                />
              </div>
            </div>
            <div className="ideal-jobs-burak-profile">
              <div className="ideal-jobs-thoughts02">
                <svg viewBox="0 0 1024 1024" className="ideal-jobs-icon01">
                  <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                </svg>
                <span className="ideal-jobs-thoughts03">
                  <span>
                    My ideal job is that of Full Stack Developer. After having
                    analysed the Burning Glass data this has only confirmed my
                    desire to focus my efforts on going down this career path.
                    The desire to become a full stack developer is one of the
                    factors that influenced me to study a Bachelor of IT. The
                    role encompasses a broad range of responsibilities and will
                    provide variety and interesting tasks; and most importantly
                    the role is responsible for understanding and solving
                    business problems with using code, as well as stakeholder
                    engagement, which ties in very nicely with my previous
                    career experience and qualifications. I aim to develop the
                    required skills to become a full stack developer through
                    completing programming and software development subjects in
                    the Bachelor of IT, building a portfolio of relevant
                    software projects and apps in GitHub, and to begin preparing
                    for common software development interview questions.
                  </span>
                </span>
                <div className="ideal-jobs-container07">
                  <span className="ideal-jobs-student-name1">Burak</span>
                </div>
              </div>
              <img
                alt="Burak"
                src="caface32-056a-4efd-9812-60063f239d92"
                className="ideal-jobs-burak"
              />
            </div>
          </div>
          <div className="ideal-jobs-container08">
            <div className="ideal-jobs-charlie-profile">
              <svg viewBox="0 0 1024 1024" className="ideal-jobs-icon03">
                <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
              </svg>
              <span className="ideal-jobs-thoughts04">
                <span>
                  My ideal job is a Computer Workshop Technician. Having looked
                  at the Burning Glass data, my ideal job hasn’t changed. I’ve
                  always been interested in this area, and seeing the future
                  outcomes for this line of work solidifies this. I have a lot
                  of experience with customer service, which will help me move
                  up and into a career like this. The skills I’m currently
                  lacking include Computer systems, programming, and
                  data-centred skills. My plan to complete a Bachelor of
                  Information Technology will tick off those remaining skills
                  needed and potentially a degree in business management if I
                  were to want a business of my own. I’ve already got my foot in
                  the door, but it may take a few years to become fully
                  qualified.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="ideal-jobs-profile">
                <img
                  alt="Charlie"
                  src="78614abc-be75-408d-b0ac-449f2733099e"
                  className="ideal-jobs-charlie"
                />
                <div className="ideal-jobs-container09">
                  <span className="ideal-jobs-student-name2">Charlie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ideal-jobs-container10">
          <div className="ideal-jobs-container11">
            <div className="ideal-jobs-helia-profile">
              <svg viewBox="0 0 1024 1024" className="ideal-jobs-icon05">
                <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
              </svg>
              <span className="ideal-jobs-thoughts05">
                <span>
                  My ideal job is the Cyber Threat Hunter opportunity at the
                  department of home affairs. Having looked at the burning glass
                  data, my ideal job has not changed as this job is fascinating
                  to me because I have always been interested in IT and law
                  enforcement so to combine the two things, I’m most passionate
                  about sounds very appealing to me. This job requires a high
                  level of attention and working with a broad number of
                  different technologies. Also according to my own research,
                  Australia is suffering from a cyber security skills shortage.
                  This shortage provides a unique opportunity for cyber security
                  students and demand for their skills and services will grow by
                  at least 21% by May 2023(Labour Market Insights, n.d) which
                  confirms a promising future for a career in Cyber Security. To
                  be able to qualify for this job I will need to complete a
                  Bachelor of Information Technology and also complete a Masters
                  degree in Cyber Security.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="ideal-jobs-profile1">
                <img
                  alt="Helia"
                  src="bd463eb9-663b-4e3e-a07b-1bd3f1e2f441"
                  className="ideal-jobs-helia"
                />
                <div className="ideal-jobs-container12">
                  <span className="ideal-jobs-student-name3">Helia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ideal-jobs-container13">
            <div className="ideal-jobs-container14">
              <div className="ideal-jobs-jake-profile">
                <div className="ideal-jobs-thoughts06">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="ideal-jobs-student-pic1"
                  >
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="ideal-jobs-thoughts07">
                    <span></span>
                    <br></br>
                    <span>
                      My ideal job is to become a penetration tester which falls
                      into the category of Cyber Security.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Studying the Burning Glass data, my ideal job still
                      remains the same as the industry is in dire need of more
                      Cyber Security professionals and as the world of IT
                      continues to grow, the demand will only become stronger
                      for this role. This job appeals to me strongly as it
                      requires persistence, and problem-solving and is extremely
                      flexible with job opportunities across the globe. A
                      sought-after qualification in this field is to have a
                      Bachelor of Information Technology which is why I have
                      started to complete this degree. I plan to further develop
                      my skills in parallel to a degree by continuing to educate
                      myself on the specifics required for the profession in my
                      own free time.
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                  <div className="ideal-jobs-container15">
                    <span className="ideal-jobs-student-name4">Jake</span>
                  </div>
                  <div className="ideal-jobs-container16"></div>
                </div>
                <img
                  alt="Jake"
                  src="ac9b2f22-96f7-44a4-929e-5c70a079f93b"
                  className="ideal-jobs-jake"
                />
              </div>
            </div>
            <div className="ideal-jobs-michelle-profile">
              <div className="ideal-jobs-thoughts08">
                <svg viewBox="0 0 1024 1024" className="ideal-jobs-icon08">
                  <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                </svg>
                <span className="ideal-jobs-thoughts09">
                  <span>
                    My ideal job is to be a Database Administrator. My ideal job
                    has not changed after looking at the Burning Glass data.
                    Seeing that it is not one of the most popular choices only
                    makes me want to pursue it more, as to me that means I can
                    really hone in on my skills and experience in a steady
                    field. I have a long way to go in terms of my programming
                    knowledge, and I hope to gain exposure and skill by
                    completing my Bachelor of Information Technology. I can
                    communicate well when I apply myself, and I love being
                    organised and planning everything that I do out. My teamwork
                    could be better, and it is being improved by doing this
                    course.
                  </span>
                </span>
                <div className="ideal-jobs-container17">
                  <span className="ideal-jobs-student-name5">Michelle</span>
                </div>
              </div>
              <img
                alt="Michelle"
                src="2722dc7b-2a87-4d1b-9d16-10dc9a31bf98"
                className="ideal-jobs-michelle"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default IdealJobs
