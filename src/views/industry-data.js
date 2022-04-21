import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import './industry-data.css'

const IndustryData = (props) => {
  return (
    <div className="industry-data-container">
      <Helmet>
        <title>Industry Data - Landing Page</title>
        <meta property="og:title" content="Industry Data - Landing Page" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <Banner rootClassName="banner-root-class-name3"></Banner>
      <div className="industry-data-container1">
        <span className="industry-data-industry-data">
          <span className="industry-data-text">
            What are the Job Titles? Rank our job titles in employer demand.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Developments in technology are essential for all Australians, not
            just those employed within the IT industry now or who aim to do so
            in the future. The many technological innovations we use today
            impact our work lives, how we communicate, and how we connect.
            &apos;New and rapidly developing technologies in areas such as
            internet-of-thing (IoT), quantum computing, artificial intelligence
            and blockchain have potential to deliver significant benefits to
            society at large.&apos; (Australian Government, Australia&apos;s
            Tech Future, n.d.) All of these developments highlight the
            importance of a skilled workforce. Between 2018 and 2024, The ACS
            Australia&apos;s Digital Pulse 2019 report reveals a forecasted
            increase of 100,000 in demand for technology workers. However,
            future university graduates will likely not meet this demand as
            &apos;Australian companies have typically relied on skilled migrants
            as an important source of technology workers.&apos; (Deloitte Access
            Economics, 2019).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="Industry Data"
          src="/playground_assets/47da750ec868da8de83712c47340b18c-800w.png"
          className="industry-data-industry-data1"
        />
        <span className="industry-data-industry-data2">
          <span className="industry-data-text05"></span>
          <span className="industry-data-text06">
            How do the general skills in your required skill set rank in terms
            of demand from employers?
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            According to the Burning glass data, the general skills required in
            our ideal jobs are ranked as such: Communication (1) , Problem
            Solving (2), teamwork (5), detail-oriented (8) and time management
            (12).
          </span>
          <br></br>
          <span>
            Whilst it is crucial for everyone to have excellent communication
            skills, this skill certainly has a different meaning in IT.
            Communication skills come in various forms. The first one is
            excellent writing skills; whether from coding, documenting for a new
            project or creating database manuals, one must be able to write
            clearly. At some point, many people in IT will have to deal with
            Stakeholders and Clients, and it is crucial to be able to explain
            and help understand highly technical issues without using any
            technical terms.
          </span>
          <br></br>
          <span>
            Problem Solving is an excellent skill for someone in the IT field,
            as it trains the brain to analyse, recognise patterns and address
            risks that might cause an issue in the future. Being in the IT
            field, one will face problems daily, so to be able to tackle issues
            without feeling under pressure is a great skill to adapt. Another
            great skill to have alongside problem-solving is being
            detail-oriented, paying great attention to detail, detecting minor
            errors without asking for help and delivering the best results by
            putting great effort and time into all projects.
          </span>
          <br></br>
          <span>
            Working well and collaboratively in a team environment is very
            important in the IT field as, at some point in an IT career, one
            will either manage a team or work in a team for a project. People
            who work well in a team environment can improve efficiency, share
            better ideas, share responsibility and reduce stress.
          </span>
          <br></br>
          <span>
            Time Management is so important because time is the most treasured
            thing to humans, and unfortunately, there is not enough of it.
            Managing time correctly allows for more done in less time,
            increasing one&apos;s productivity. People who can manage their time
            efficiently have more advantages over people who do not.
          </span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="Industry Data"
          src="/playground_assets/47da750ec868da8de83712c47340b18c-800w.png"
          className="industry-data-industry-data3"
        />
        <span className="industry-data-industry-data4">
          <span className="industry-data-text15">
            What are the three highest-ranked IT-specific skills which are not
            in your required skill set?
          </span>
          <span className="industry-data-text16">
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
            According to Burning Glass Data, the three highest-ranked
            IT-specific skills which are not required in our required skills are
            Business management (7) , Graphic Design (10), and Customer service
            (14) according to the burning glass data. These skills might be the
            highest-ranked skills but they don’t play a big part in each of our
            ideal jobs. For example, customer service is a crucial skill for an
            IT help desk technician as it is expected for them to solve
            technical issues that arise from their clients but not so much for a
            Cyber Threat Hunter. Business management ranked (7) would be a
            useful skill for a Fullstack developer if managing a team of Junior
            developers otherwise it does not count as a required skill.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className="industry-data-text21">
            What are the three highest-ranked general skills which are not in
            your required skill set?
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            According to Burning Glass Data, the three highest-ranked general
            skills which are not in our required skill set are organisation
            skills(3), writing skills(4), and troubleshooting skills(6).
            Although these skills more or less play a part in our chosen ideal
            jobs, they don’t play a critical role across all of them. For
            example, troubleshooting is important for a Help Desk Analyst or
            Computer Technician who is expected to make repairs, but would very
            rarely be a requirement for a software developer. Much of the tasks
            carried out by those in the ideal roles would be categorised as
            ‘problem-solving’ or even ‘debugging’. In much the same way, a high
            level of writing capability would not be required in the ideal jobs,
            although it would play some part in writing code documentation or
            process documentation. Organisation skills would be more likely
            required within any or all of the ideal jobs if they were to take on
            a more senior capacity or attain promotion to manager.
          </span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="Industry Data"
          src="/playground_assets/47da750ec868da8de83712c47340b18c-800w.png"
          className="industry-data-industry-data5"
        />
        <span className="industry-data-industry-data6">
          Below is a table summarising each individual&apos;s ideal job and the
          required skills for each.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <img
          alt="Industry Data"
          src="/playground_assets/47da750ec868da8de83712c47340b18c-800w.png"
          className="industry-data-industry-data7"
        />
      </div>
      <Footer rootClassName="footer-root-class-name16"></Footer>
    </div>
  )
}

export default IndustryData
