import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <Banner rootClassName="banner-root-class-name"></Banner>
      <div id="inspiration" className="index-features">
        <div className="index-features1">
          <Link to="/about-us" className="index-navlink">
            <div className="index-about-us-card">
              <div className="index-icon-container">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="index-icon"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
              </div>
              <div className="index-text-container">
                <span className="index-about-us card-Heading">About us</span>
                <span className="index-info card-Text">
                  <span>
                    Here you will find more personal information on each of our
                    team members.
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/team-profile" className="index-navlink1">
            <div className="index-team-profile-card">
              <div className="index-icon-container1">
                <svg
                  viewBox="0 0 1316.5714285714284 1024"
                  className="index-icon02"
                >
                  <path d="M1013.714 477.714l10.286 180.571c4.571 80.571-164 146.286-365.714 146.286s-370.286-65.714-365.714-146.286l10.286-180.571 328 103.429c9.143 2.857 18.286 4 27.429 4s18.286-1.143 27.429-4zM1316.571 292.571c0 8-5.143 14.857-12.571 17.714l-640 201.143c-2.286 0.571-4 0.571-5.714 0.571s-3.429 0-5.714-0.571l-372.571-117.714c-32.571 25.714-55.429 88.571-60 165.714 21.714 12.571 36 35.429 36 62.286 0 25.714-13.143 48-33.143 61.143l33.143 247.429c0.571 5.143-1.143 10.286-4.571 14.286s-8.571 6.286-13.714 6.286h-109.714c-5.143 0-10.286-2.286-13.714-6.286s-5.143-9.143-4.571-14.286l33.143-247.429c-20-13.143-33.143-35.429-33.143-61.143 0-27.429 15.429-50.857 37.143-63.429 3.429-66.857 20.571-138.857 56-188.571l-190.286-59.429c-7.429-2.857-12.571-9.714-12.571-17.714s5.143-14.857 12.571-17.714l640-201.143c2.286-0.571 4-0.571 5.714-0.571s3.429 0 5.714 0.571l640 201.143c7.429 2.857 12.571 9.714 12.571 17.714z"></path>
                </svg>
              </div>
              <div className="index-text-container1">
                <span className="index-team-profile card-Heading">
                  Team Profile
                </span>
                <span className="index-info1 card-Text">
                  <span>
                    Here you will find our test results along with our thoughts
                    on the results and how they will impact our group work.
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/ideal-jobs" className="index-navlink2">
            <div className="index-ideal-jobs-card">
              <div className="index-icon-container2">
                <svg viewBox="0 0 1024 1024" className="index-icon04">
                  <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                </svg>
              </div>
              <div className="index-text-container2">
                <span className="index-ideal-jobs card-Heading">
                  Ideal Jobs
                </span>
                <span className="index-info2">
                  Here you will find our ideal jobs along with comparisons and
                  industry data.
                </span>
              </div>
            </div>
          </Link>
          <Link to="/tools" className="index-navlink3">
            <div className="index-tools-card">
              <div className="index-icon-container3">
                <svg viewBox="0 0 1152 1024" className="index-icon06">
                  <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
                </svg>
              </div>
              <div className="index-text-container3">
                <span className="index-tools card-Heading">
                  <span>Tools</span>
                </span>
                <span className="index-info3 card-Text">
                  <span>
                    Here you will find our meeting records and notes along with
                    comments about GitHub audit log.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/i-t-technologies" className="index-navlink4">
            <div className="index-i-t-technologies-card">
              <div className="index-icon-container4">
                <svg viewBox="0 0 1024 1024" className="index-icon09">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="index-text-container4">
                <span className="index-i-t-technologies card-Heading">
                  IT Technologies
                </span>
                <span className="index-info4">
                  <span>
                    Here you will find research reports on our 4 chosen IT
                    technology fields.
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/i-t-interview" className="index-navlink5">
            <div className="index-interview-card">
              <div className="index-icon-container5">
                <svg viewBox="0 0 1152 1024" className="index-icon11">
                  <path d="M480 128c-50.666 0-99.582 7.95-145.386 23.628-42.924 14.694-81.114 35.436-113.502 61.646-60.044 48.59-93.112 110.802-93.112 175.174 0 35.99 10.066 70.948 29.92 103.898 20.686 34.34 51.898 65.794 90.26 90.958 30.44 19.968 50.936 51.952 56.362 87.95 0.902 5.99 1.63 12.006 2.18 18.032 2.722-2.52 5.424-5.114 8.114-7.794 24.138-24.040 56.688-37.312 90.322-37.312 5.348 0 10.718 0.336 16.094 1.018 19.36 2.452 39.124 3.696 58.748 3.696 50.666 0 99.58-7.948 145.384-23.628 42.926-14.692 81.116-35.434 113.504-61.644 60.046-48.59 93.112-110.802 93.112-175.174s-33.066-126.582-93.112-175.174c-32.388-26.212-70.578-46.952-113.504-61.646-45.804-15.678-94.718-23.628-145.384-23.628zM480 0v0c265.096 0 480 173.914 480 388.448s-214.904 388.448-480 388.448c-25.458 0-50.446-1.62-74.834-4.71-103.106 102.694-222.172 121.108-341.166 123.814v-25.134c64.252-31.354 116-88.466 116-153.734 0-9.106-0.712-18.048-2.030-26.794-108.558-71.214-177.97-179.988-177.97-301.89 0-214.534 214.904-388.448 480-388.448zM996 870.686c0 55.942 36.314 104.898 92 131.772v21.542c-103.126-2.318-197.786-18.102-287.142-106.126-21.14 2.65-42.794 4.040-64.858 4.040-95.47 0-183.408-25.758-253.614-69.040 144.674-0.506 281.26-46.854 384.834-130.672 52.208-42.252 93.394-91.826 122.414-147.348 30.766-58.866 46.366-121.582 46.366-186.406 0-10.448-0.45-20.836-1.258-31.168 72.57 59.934 117.258 141.622 117.258 231.676 0 104.488-60.158 197.722-154.24 258.764-1.142 7.496-1.76 15.16-1.76 22.966z"></path>
                </svg>
              </div>
              <div className="index-text-container5">
                <span className="index-interview card-Heading">Interview</span>
                <span className="index-info5 card-Text">
                  <span>
                    Here you will find a video recording of our interview along
                    with a write-up of the interview.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/our-project" className="index-navlink6">
            <div className="index-our-project-card">
              <div className="index-icon-container6">
                <svg viewBox="0 0 1024 1024" className="index-icon13">
                  <path d="M726 682v-84h256v84q0 42-24 74t-62 46v180h-86v-180q-84-30-84-120zM554 86v170h86v256h-256v-256h86v-170q0-18 12-31t30-13 30 13 12 31zM896 256h86v256h-256v-256h84v-170q0-18 13-31t31-13 30 13 12 31v170zM42 682v-84h256v84q0 90-84 120v180h-86v-180q-38-14-62-46t-24-74zM384 682v-84h256v84q0 42-24 74t-62 46v180h-84v-180q-38-14-62-46t-24-74zM214 86v170h84v256h-256v-256h86v-170q0-18 12-31t30-13 31 13 13 31z"></path>
                </svg>
              </div>
              <div className="index-text-container6">
                <span className="index-our-project card-Heading">
                  Our Project
                </span>
                <span className="index-info6 card-Text">
                  <span>Here you will find more about our project idea.</span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/reflections" className="index-navlink7">
            <div className="index-reflections-card">
              <div className="index-icon-container7">
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className="index-icon15"
                >
                  <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
                </svg>
              </div>
              <div className="index-text-container7">
                <span className="index-reflections card-Heading">
                  <span>Reflections</span>
                </span>
                <span className="index-info7 card-Text">
                  <span>
                    Here you will find our personal reflections along with our
                    group reflections.
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <Link to="/references" className="index-navlink8">
            <div className="index-references-card">
              <div className="index-icon-container8">
                <svg viewBox="0 0 1024 1024" className="index-icon17">
                  <path d="M810 298v-84h-426v84h426zM640 640v-86h-256v86h256zM810 470v-86h-426v86h426zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h512zM170 256v598h598v84h-598q-34 0-59-25t-25-59v-598h84z"></path>
                </svg>
              </div>
              <div className="index-text-container8">
                <span className="index-references card-Heading">
                  <span>References</span>
                </span>
                <span className="index-info8 card-Text">
                  <span>
                    Here you will find a list of the websites, articles,
                    journals, papers, etc; that we used to create this website
                    and our report.
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="index-team-name">
        <h2 className="index-team-name1 section-Heading">Meet our team</h2>
        <div className="index-section-separator"></div>
      </div>
      <div className="index-team">
        <div className="index-cards-container">
          <div className="index-blayne">
            <div className="index-blayne1">
              <div className="index-blayne2"></div>
              <span className="index-blayne3 card-Heading">Blayne</span>
              <span className="index-student-number">s3941659</span>
              <a
                href="https://btmurray1.github.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github"
              >
                <span className="index-text15">Website</span>
              </a>
            </div>
          </div>
          <div className="index-burak">
            <div className="index-burak1">
              <div className="index-burak2"></div>
              <span className="index-burak3 card-Heading">Burak</span>
              <span className="index-student-number1">
                <span className="index-text16">s3955557</span>
              </span>
              <a
                href="https://s3955557.github.io/assignment_one_profile/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github1"
              >
                <span className="index-text17">Website</span>
              </a>
            </div>
          </div>
          <div className="index-charlie">
            <div className="index-charlie1">
              <div className="index-charlie2"></div>
              <span className="index-charlie3 card-Heading">Charlie</span>
              <span className="index-student-number2">
                <span>s3941830</span>
              </span>
              <a
                href="https://charliefinn13.github.io/assignment-one/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github2"
              >
                <span className="index-text19">Website</span>
              </a>
            </div>
          </div>
          <div className="index-helia">
            <div className="index-helia1">
              <div className="index-helia2"></div>
              <span className="index-helia3 card-Heading">Helia</span>
              <span className="index-student-number3">s3954482</span>
              <a
                href="https://heliamoosavi11.github.io/Assigment-one/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github3"
              >
                <span className="index-text20">Website</span>
              </a>
            </div>
          </div>
          <div className="index-jake">
            <div className="index-jake1">
              <div className="index-jake2"></div>
              <span className="index-jake3 card-Heading">Jake</span>
              <span className="index-student-number4">s3941659</span>
              <a
                href="https://palmerjake.github.io/Assignment-1/projectidea.html"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github4"
              >
                <span className="index-text21">Website</span>
              </a>
            </div>
          </div>
          <div className="index-michelle">
            <div className="index-michelle1">
              <div className="index-michelle2"></div>
              <span className="index-michelle3 card-Heading">Michelle</span>
              <span className="index-student-number5">s3954055</span>
              <a
                href="https://michelletowers.github.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="index-student-github5"
              >
                <span className="index-text22">Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Index
