import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";
// import './a.css'
export default function SchedulePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Hackoverflow 6.0</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="img/aarohan-logo.png"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/nice-select.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/slicknav.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="js/vendor/jquery-1.12.4.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/isotope.pkgd.min.js"></script>
        <script src="js/ajax-form.js"></script>
        <script src="js/waypoints.min.js"></script>
        <script src="js/jquery.counterup.min.js"></script>
        <script src="js/imagesloaded.pkgd.min.js"></script>
        <script src="js/scrollIt.js"></script>
        <script src="js/jquery.scrollUp.min.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/nice-select.min.js"></script>
        <script src="js/jquery.slicknav.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery.countdown.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>
        <script src="js/jquery.form.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="js/mail-script.js"></script>
        <script src="js/main.js"></script>
      </Head>
      <div>
        <div>
          <Navbar />
          <div className="slider_area slider_bg_1">
            <div className="slider_text">
              <div className="container">
                <div className="position_relv">
                  <div className="row">
                    <div className="col-xl-9">
                      <div className="title_text ml-3">
                        <h3>Event Schedule</h3>
                        <br />
                        <a
                          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+6.0&dates=20230310/20230312"
                          className="boxed-btn-white"
                        >
                          Add to your Calendar
                        </a>
                        <br />
                        <br />
                        {/* <a
                        className="boxed-btn-white"
                        id="register-2"
                      >
                        Register
                      </a> */}
                        <div
                          className="apply-button"
                          data-hackathon-slug="hackoverflow06"
                          data-button-theme="dark"
                          style={{ height: 44, width: 312, zIndex: 100 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider_text_mobile">
              <div className="container flex flex-wrap flex-column justify-center">
                <div className="position_relv text-center">
                  <div
                    className="apply-button"
                    data-hackathon-slug="hackoverflow06"
                    data-button-theme="dark"
                    style={{ height: 44, width: 312 }}
                  />
                  <h3>Event Schedule</h3>
                  <br />
                  <h3>Aarohan 2023</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start px-6 lg:px-52 text-center md:text-left my-6">
              <Timer />
              <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
                <p className="text-2xl font-bold text-white">Online</p>
                <p className="text-2xl font-bold text-white">9th March, 2023</p>
              </div>
            </div>
            {/* <div className='countDOwn_area'>
                            <div className='container'>
                                <div className='row align-items-center justify-center'>
                                    <div className='col-xl-4 col-md-6 col-lg-6 flex flex-wrap justify-center'>
                                        <div className='single_date'>
                                            <i className='ti-location-pin' />
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-md-6 col-lg-6 flex flex-wrap justify-center'>
                                        <div className='single_date'>
                                            <i className='ti-alarm-clock' />
                                            <span>9th March, 2023</span>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-md-12 col-lg-12 flex flex-wrap justify-center'>
                                        <Timer />
                                    </div>
                                </div>
                            </div>
                        </div> */}
            <div
              style={{
                width: "100%",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                className="boxed-btn-white"
                href="https://discord.com/invite/tVesEFkR"
                id="register-2"
              >
                Join Discord
              </a>
              &nbsp; &nbsp; &nbsp;
              <a className="boxed-btn-white" href="/schedule" id="register-2">
                Schedule
              </a>
              <div>
                <a
                  href="https://calendar.google.com/calendar/r/eventedit?text=Hackoverflow+5.0&dates=20220304/20220306"
                  className="boxed-btn-white my-2 sm:ml-3 block"
                  id="register-2"
                >
                  Add to your Calendar
                </a>
              </div>
            </div>
          </div>

          <div className="event_area plus_padding">
            <h1 className="vr_text d-none d-lg-block">Event Schedule</h1>
            <div className="container">
              <div className="double_line">
                <div className="row">
                  <div className="col-xl-3 col-lg-3">
                    <div className="date">
                      <h3 style={{ color: "blue" }}>4 March, 2023</h3>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="single_speaker">
                      <img
                        src="/idea.png"
                        alt
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Application Submission Phase Starts</span>
                          <div className="time">12:00 AM</div>
                        </div>
                        <p>
                          Period for applications starts. Participants can
                          submit the application on Devfolio.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double_line">
                <div className="row">
                  <div className="col-xl-3 col-lg-3">
                    <div className="date">
                      <h3 style={{ color: "blue" }}>9 March, 2023</h3>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="single_speaker">
                      <img
                        src="/lightbulb.png"
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Application Submission Phase Ends</span>
                          <div className="time">11:59 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double_line">
                <div className="row">
                  <div className="col-xl-3 col-lg-3">
                    <div className="date">
                      <h3 style={{ color: "blue" }}>10 March, 2023</h3>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="single_speaker">
                      <img
                        src="/shuttle.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Hackoverflow flags off!</span>
                          <div className="time">12:00 AM</div>
                        </div>
                        <p>Ready! Set! Go!</p>
                      </div>
                    </div>
                    <div className="single_speaker">
                      <img
                        src="/podium.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Judges' Address</span>
                          {/* <div className="time">
                                                        06:00 PM to 8:00 PM
                                                    </div> */}
                        </div>
                        <p>
                          Few words of motivation from our knowledgeable and
                          experienced judges!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double_line">
                <div className="row">
                  <div className="col-xl-3 col-lg-3">
                    <div className="date">
                      <h3 style={{ color: "blue" }}>11 March, 2023</h3>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="single_speaker">
                      <img
                        src="/finish-line.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Coding period ends</span>
                          <div className="time">11:59 PM</div>
                        </div>
                        <p>
                          Contestants stop the coding and submit their codes for
                          further evaluation process.
                        </p>
                      </div>
                    </div>

                    {/* <div className="single_speaker">
                                            <img src="/keyboard.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Typing Race</span>
                                                    <div className="time">
                                                        04:00 PM
                                                    </div>
                                                </div>
                                                <p>Whose fingers are the fastest in the west?</p>
                                            </div>
                                        </div> */}
                    <div className="single_speaker">
                      <img
                        src="/podium.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Judges' Address</span>
                          {/* <div className="time">
                                                        Afternoon
                                                    </div> */}
                        </div>
                        <p>
                          Few words of motivation from our knowledgeable and
                          experienced judges!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double_line">
                <div className="row">
                  <div className="col-xl-3 col-lg-3">
                    <div className="date">
                      <h3 style={{ color: "blue" }}>12 March, 2023</h3>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="single_speaker">
                      <img
                        src="/lightbulb.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Evaluation Starts</span>
                          <div className="time">9:00 am</div>
                        </div>
                        <p>
                          Each of the top 15 teams will present their projects.
                        </p>
                      </div>
                    </div>

                    <div className="single_speaker">
                      <img
                        src="/podium.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Evaluation Completes</span>
                          <div className="time">1:00 pm</div>
                        </div>
                        <p>Teams will be evaluated by the judges.</p>
                      </div>
                    </div>
                    <div className="single_speaker">
                      <img
                        src="/finish-line.png"
                        style={{ width: 80, height: 80 }}
                        alt
                      />
                      <div className="speaker-name">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <span>Results are Published</span>
                          <div className="time">6:00 pm</div>
                        </div>
                        <p>Results are published based on the evaluations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="brand_area">
    <div class="container">
<div class="row">
  <div class="w-full pt-4 md:pt-16 md:pb-8 flex md:flex-row flex-col items-center md:justify-around"
    style="display: flex; justify-content: center; align-items: center;">
    <div class="p-3">
      <img src="/devfolio.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/tezos.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/portis.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/Portis_Logo-Colored.png" />
    </div>
  </div>
</div>
    </div>
  </div> */}
          <Sponsors />

          <Footer />
        </div>
      </div>
    </>
  );
}
