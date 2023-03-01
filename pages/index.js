import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Sponsors from '../components/sponsors'
import Link from 'next/link'
import { useEffect } from 'react'

export default function IndexPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Hackoverflow 5.0</title>
        <meta name='description' content />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='img/aarohan-logo.png'
        />

        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href='/css/owl.carousel.min.css' />
        <link rel='stylesheet' href='/css/magnific-popup.css' />
        <link rel='stylesheet' href='/css/font-awesome.min.css' />
        <link rel='stylesheet' href='/css/themify-icons.css' />
        <link rel='stylesheet' href='/css/nice-select.css' />
        <link rel='stylesheet' href='/css/flaticon.css' />
        <link rel='stylesheet' href='/css/animate.css' />
        <link rel='stylesheet' href='/css/slicknav.css' />
        <link rel='stylesheet' href='/css/style.css' />

        <script src='/js/vendor/modernizr-3.5.0.min.js'></script>
        <script src='//code.jquery.com/jquery-1.11.2.min.js'> </script>
        <script src='/js/popper.min.js'></script>
        <script src='/js/bootstrap.min.js'></script>
        <script src='/js/owl.carousel.min.js'></script>
        <script src='/js/isotope.pkgd.min.js'></script>
        <script src='/js/ajax-form.js'></script>
        <script src='/js/waypoints.min.js'></script>
        <script src='/js/jquery.counterup.min.js'></script>
        <script src='/js/imagesloaded.pkgd.min.js'></script>
        <script src='/js/scrollIt.js'></script>
        <script src='/js/jquery.scrollUp.min.js'></script>
        <script src='/js/wow.min.js'></script>
        <script src='/js/nice-select.min.js'></script>
        <script src='/js/jquery.magnific-popup.min.js'></script>
        <script src='/js/jquery.countdown.js'></script>
        <script src='/js/plugins.js'></script>
        <script src='/js/contact.js'></script>
        <script src='/js/jquery.ajaxchimp.min.js'></script>
        <script src='/js/jquery.form.js'></script>
        <script src='/js/jquery.validate.min.js'></script>
        <script src='/js/mail-script.js'></script>
        <script src='/js/main.js'></script>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21495576.js"></script>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0'
          crossOrigin='anonymous'
        ></script>
        <script src='/js/jquery.slicknav.min.js'></script>
      </Head>
      <div>
        <Navbar />
        <div className='slider_area slider_bg_1'>
          <div className='slider_text'>
            <div className='container'>
              <div className='position_relv'>
                <div className='row'>
                  <div className='col-xl-9'>
                    <div className='title_text ml-3'>
                      <h3>
                        HackOverflow 6.0
                        <br />
                        Aarohan, 2023
                      </h3>
                      <br />
                      <a
                        href='https://calendar.google.com/calendar/r/eventedit?text=Hackoverflow+5.0&dates=20220304/20220306'
                        className='boxed-btn-white'
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
                        className='apply-button'
                        data-hackathon-slug='hackoverflow5'
                        data-button-theme='dark'
                        style={{ height: 44, width: 312 }}
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
                  className='apply-button'
                  data-hackathon-slug='hackoverflow5'
                  data-button-theme='dark'
                  style={{ height: 44, width: 312 }}
                />
                <h3>Hackoverflow 5.0</h3>
                <br />
                <h3>Aarohan 2022</h3>
              </div>
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
                    <span>4th March, 2022</span>
                  </div>
                </div>
                <div className='col-xl-4 col-md-12 col-lg-12 flex flex-wrap justify-center'>
                  <Timer />
                </div>
              </div>
            </div>
          </div> */}
          <div className='flex flex-col items-center md:items-start px-6 lg:px-52 text-center md:text-left my-6'>
            <Timer/>
            <div className='flex flex-col md:flex-row justify-between gap-4 mt-4'>
            <p className='text-2xl font-bold text-white'>Online</p>
            <p className='text-2xl font-bold text-white'>9th March, 2023</p>

            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <a
              className='boxed-btn-white'
              href='https://discord.gg/srz2gvnRtR'
              id='register-2'
            >
              Join Discord
            </a>
            &nbsp; &nbsp; &nbsp;
            <a className='boxed-btn-white' href='/schedule' id='register-2'>
              Schedule
            </a>
            <div>
              <a
                href='https://calendar.google.com/calendar/r/eventedit?text=Hackoverflow+5.0&dates=20220304/20220306'
                className='boxed-btn-white my-2 sm:ml-3 block'
                id='register-2'
              >
                Add to your Calendar
              </a>
            </div>
          </div>
        </div>

        <div className='about_area'>
          <div className='shape-1 d-none d-xl-block'>
            <img src='img/about/shap1.png' alt />
          </div>
          <div className='shape-2 d-none d-xl-block'>
            <img src='img/about/shap2.png' alt />
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-xl-6 col-md-6'>
                <div className='about_thumb'>
                  <img src='img/about/about.png' alt />
                </div>
              </div>
              <div className='col-xl-5 offset-xl-1 col-md-6'>
                <div className='about_info'>
                  <div className='section_title'>
                    <span className='sub_heading'>Welcome To</span>
                    <h3>
                      The Biggest Technical <br />
                      Fest of the <br />
                      Year 2022
                    </h3>
                  </div>
                  <p>
                    <br />
                    <br />
                    Hackoverflow 5.0 is conducted by team Aavishkar during
                    Aarohan, the second largest techno-management of Eastern
                    India!
                  </p>
                  <br />
                  <br />
                  <br />
                  <a
                    href='https://www.facebook.com/arhn.nitd/'
                    className='boxed-btn-red'
                  >
                    Learn More about Aarohan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='speakers_area'>
          <h1 className='horizontal_text d-none d-lg-block'>Judges</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='serction_title_large mb-95'>
                  <h3>Judges</h3>
                </div>
              </div>
            </div>
            <div className='row justify-center'>
              <div className='col-xl-3 col-md-4'>
                <div className='single_speaker'>
                  <div className='speaker_thumb'>
                    <img src='/img/sabyasachi.jpeg' alt />
                    <div className='hover_overlay'>
                      <div className='social_icon'>
                        <a href='https://in.linkedin.com/in/sabyasachi-mukhopadhyay-303a1027'>
                          <i className='fa fa-linkedin-square' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='speaker_name text-center'>
                    <h3>Sabyasachi Mukhopadhyay</h3>
                    <p style={{ color: 'blue' }}>
                      Intel Software Innovator
                      <br /> Google Developer Expert in ML,Champion Innovator(Google)
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-md-4'>
                <div className='single_speaker'>
                  <div className='speaker_thumb'>
                    <img src='/img/aditya.jpeg' alt />
                    <div className='hover_overlay'>
                      <div className='social_icon'>
                        <a href='https://www.linkedin.com/in/adityaoberai1/'>
                          <i className='fa fa-linkedin-square' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='speaker_name text-center'>
                    <h3>Aditya Oberoi</h3>
                    <p style={{ color: 'blue' }}>
                      DevRel Engineer @ Appwrite | MLH Coach
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-md-4'>
                <div className='single_speaker'>
                  <div className='speaker_thumb'>
                    <img src='/img/rajith.jpeg' alt />
                    <div className='hover_overlay'>
                      <div className='social_icon'>
                        <a href='https://www.linkedin.com/in/rajiths/'>
                          <i className='fa fa-linkedin-square' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='speaker_name text-center'>
                    <h3>Rajith Shaji</h3>
                    <p style={{ color: 'blue' }}>
                      Co-founder & CEO at Volopay
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className='single_speaker'>
                  <div className='speaker_thumb'>
                    <img src='/img/Dagar.JPG' alt />
                    <div className='hover_overlay'>
                      <div className='social_icon'>
                        <a href='https://www.linkedin.com/in/anupamdagar/'>
                          <i className='fa fa-linkedin-square' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='speaker_name text-center'>
                    <h3>Anupam Dagar</h3>
                    <p style={{ color: 'blue' }}>SWE, Deutsche Telekom</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-5 offset-xl-2 col-md-6'>
                <div className='single_speaker'>
                  <div className='speaker_thumb'>
                    <img src='/img/Gautham.png' alt />
                    <div className='hover_overlay'>
                      <div className='social_icon'>
                        <a href='https://fb.com/gauthamzz'>
                          <i className='fa fa-facebook' />
                        </a>
                        <a href='https://www.instagram.com/gauthamzz/'>
                          <i className='fa fa-instagram' />
                        </a>
                        <a href='https://twitter.com/gauthamzzz'>
                          <i className='fa fa-twitter' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='speaker_name text-center'>
                    <h3>Gautham Santhosh</h3>
                    <p style={{ color: 'blue' }}>ML Engineer, JustWatch</p>
                  </div>
                </div> */}
              {/* <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="/default.webp" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Judge 4</h3>
                    <p style={{ color: "blue", }}>Position</p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
        <div className='event_area'>
          <h1 className='vr_text d-none d-lg-block'>Themes List</h1>
          <div className='container'>
            <div className='double_line'>
              <div className='row'>
                <div className='col-xl-3 col-lg-3'>
                  <div className='date' style={{ color: 'blue' }}>
                    <h3 style={{ color: 'blue' }}>Hackathon Themes</h3>
                  </div>
                </div>
                <div className='col-xl-8 col-lg-9'>
                  <div className='single_speaker'>
                    <img
                      src='/blockchain.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>Blockchain Technology**</span>
                      </div>
                      <p>
                        Keeping all important data in one place is risky. So
                        it’s better to keep important data at decentralised
                        locations. Any web/mobile app can make use of this
                        concept.{' '}
                      </p>
                    </div>
                  </div>

                  <div className='single_speaker'>
                    <img
                      src='/road-safety.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>Road Safety</span>
                      </div>
                      <p>
                        Road safety is a constant concern for public safety, particularly
                        in developing countries. Design an effective solution that could
                        help tackle contemporary challenges for road safety.{' '}
                      </p>
                    </div>
                  </div>

                  <div className='single_speaker'>
                    <img
                      src='/healthcare.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>HealthCare</span>
                      </div>
                      <p>
                        The global COVID-19 pandemic has accelerated the need for digital reinvention
                        and the adoption of better healthcare technology. High-quality health care
                        helps prevent diseases and improve quality of life. Build solutions
                        to increase access to health care services.{' '}
                      </p>
                    </div>
                  </div>

                  <div className='single_speaker'>
                    <img
                      src='/classroom.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>Education</span>
                      </div>
                      <p>
                        Our education system has not updated since long but
                        technological advancements have been rapid. Upcoming
                        technology can help students better grasp concepts.{' '}
                      </p>
                    </div>
                  </div>
                  <div className='single_speaker'>
                    <img
                      src='/agriculture.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>Agriculture</span>
                      </div>
                      <p>
                        Producing and distributing food materials is a challenge
                        with many environmental as well as government policies
                        affecting it. Make use of technology to ease this
                        problem.
                      </p>
                    </div>
                  </div>
                  <div className='single_speaker'>
                    <img
                      src='/open-sign.png'
                      style={{
                        height: '90px',
                        width: '90px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className='speaker-name'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <span>Open Innovation</span>
                      </div>
                      <p>
                        Make use of developer tools to help solve any issue in
                        society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sponsors />
        <div className='resister_book resister_bg_1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='resister_text text-center'>
                  <h3>Specific sponsor track benefits and prizes!</h3>
                  <ul style={{ fontFamily: 'Poppins' }}>
                    <li>
                      <div
                        className='p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow'
                        style={{ marginBottom: '15px' }}
                      >
                        <Link href='https://polygon.technology/'>
                          <img src='/Portis_Logo-Colored.png' />
                        </Link>
                        <span className='text-black'>
                          ₹10,000 for the best hack built on Ethereum!
                          <br />
                          ₹15,000 for the best hack built on Ethereum + Polygon!
                          <br />
                          Eligibility to apply for internship/full-time roles
                          and <br />
                          seed funding of up to 5,000 USD for winners!
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        className='p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow'
                        style={{ marginBottom: '15px' }}
                      >
                        <Link href='https://tezos.com/'>
                          <img src='/tezos.png' className='w-45 h-20' />
                        </Link>
                        <span className='text-black'>
                          Best Dapp built on Tezos gets ₹20,000 !
                          <br /> Continuity grant opportunity up to 5,000 USD for an outstanding project!
                          <br /> Every <a href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff#f4bf92eacb9f47bcbe1f1e63d09e6736">valid submission</a> made in the Tezos track will be rewarded with exclusive Schwag Kits.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        className='p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow'
                        style={{ marginBottom: '15px' }}
                      >
                        <Link href='https://celo.org'>
                          <img src='/Celo_Logo_Color.png' className='w-45 h-20' />
                        </Link>
                        <span className='text-black'>
                          20000 INR for best Dapp built on Celo
                          <br />
                          <br />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        className='p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow'
                        style={{ marginBottom: '15px' }}
                      >
                        <Link href='https://filecoin.io'>
                          <img src='/Filecoin.png' className='w-45 h-20' />
                        </Link>
                        <span className='text-black'>
                          20000 INR for best use of IPFS and/or Filecoin
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='faq_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='serction_title_large mb-95'>
                  <h3>Frequently Asked</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-12'>
                <div id='accordion'>
                  <div className='card'>
                    <div className='card-header' id='headingTwo'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Do I need to pay any money to register for the
                          Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapseTwo'
                      className='collapse'
                      aria-labelledby='headingTwo'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        No. You do not have to pay anything to anyone to
                        register yourself for any Hackathon on Devfolio.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='headingOne'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link'
                          data-toggle='collapse'
                          data-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />
                          Do I need to have any specific qualifications to be a
                          participant for the Hackathon?{' '}
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapseOne'
                      className='collapse show'
                      aria-labelledby='headingOne'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        If you love to code, you are more than welcome to
                        participate in the Hackathon.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='headingThree'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          How do I submit what I have made for the Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapseThree'
                      className='collapse'
                      aria-labelledby='headingThree'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        You have to develop the application on your local system
                        and submit it on DevFolio in tar/zip file format along
                        with instructions to run the application and source
                        code.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='heading_4'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapse_4'
                          aria-expanded='false'
                          aria-controls='collapse_4'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Do we need to have the entire idea fully working?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapse_4'
                      className='collapse'
                      aria-labelledby='heading_4'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        The entire idea need not be fully implemented however,
                        the submission should be functional so that it can be
                        reviewed by the judges.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='heading_5'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapse_5'
                          aria-expanded='false'
                          aria-controls='collapse_5'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Do we need to have the entire idea fully working?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapse_5'
                      className='collapse'
                      aria-labelledby='heading_5'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        You have to develop the entire software application on
                        your local system and submit it on Devfolio in tar/zip
                        file format along with instructions to run the
                        application and source code. If it is a mobile app,
                        package it as an apk and send along with the source
                        code.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='heading_6'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapse_6'
                          aria-expanded='false'
                          aria-controls='collapse_6'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Does one have to be online and available for the
                          entire duration of the Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapse_6'
                      className='collapse'
                      aria-labelledby='heading_6'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        No, one does not need to be logged in on DevFolio or be
                        online for the entire duration. You can develop the
                        application on your local system based on the given
                        themes and then submit it on DevFolio, on the specific
                        challenge page.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='heading_7'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapse_7'
                          aria-expanded='false'
                          aria-controls='collapse_7'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Since there is no specific technology mentioned, are
                          there any restrictions on using number of pre-built
                          libraries?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapse_7'
                      className='collapse'
                      aria-labelledby='heading_7'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        There is no restriction to use any language, technology
                        stack, or libraries. You can use any of them to create
                        the web/mobile application.
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' id='heading_8'>
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          data-toggle='collapse'
                          data-target='#collapse_8'
                          aria-expanded='false'
                          aria-controls='collapse_8'
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                          }}
                        >
                          <img
                            src='img/barnd/info.png'
                            style={{
                              height: '50px',
                              width: '50px',
                              borderRadius: '50%',
                              float: 'left'
                            }}
                            alt
                          />{' '}
                          Do I need to give a demo for the product that I have
                          built?
                        </button>
                      </h5>
                    </div>
                    <div
                      id='collapse_8'
                      className='collapse'
                      aria-labelledby='heading_8'
                      data-parent='#accordion'
                      style={{}}
                    >
                      <div className='card-body'>
                        If you want you can submit a small presentation or video
                        that demos your submission, however it's not mandatory,
                        and only good to have. In case you are one of the
                        winners, you might be invited to demo your application
                        at a physical event, details of which will be shared
                        with sufficient advance notice.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
