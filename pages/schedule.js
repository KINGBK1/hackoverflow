import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import BlobScene from "../components/Flow";

export default function SchedulePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // run once
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
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
                {/* Basic Meta */}
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="IE=edge" />
                <title>HackOverflow 8.0</title>
                <meta
                    name="description"
                    content="HackOverflow 8.0 - NIT Durgapur's official hackathon platform"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                {/* Favicon */}
                <link rel="icon" href="/img/IMG-20240307-WA0009.jpg" type="image/jpeg" />

                {/* Bootstrap CSS */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                    crossOrigin="anonymous"
                />

                {/* Other CSS files */}
                <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/css/magnific-popup.css" />
                <link rel="stylesheet" href="/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/themify-icons.css" />
                <link rel="stylesheet" href="/css/nice-select.css" />
                <link rel="stylesheet" href="/css/flaticon.css" />
                <link rel="stylesheet" href="/css/animate.css" />
                <link rel="stylesheet" href="/css/slicknav.css" />
                <link rel="stylesheet" href="/css/style.css" />

                {/* Optional: global animation styles */}
                <style>{`
  html {
    scroll-behavior: smooth;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  
  .slider_area, .about_area, .speakers_area, .event_area {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
  }
  
  a, button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  canvas {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`}</style>
            </Head>
            <div style={{ background: '#020611' }}>
                <Navbar />
                <div>
                    <div style={{ position: 'relative', minHeight: '100vh' }}>
                        {/* 3D Background */}
                        {/* <BlobScene /> */}
                        <div className="hero-bg">
                            <img src={isMobile ? "/hero/final3.jpg" : "/hero/new_image123 (1).jpg"} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 1 }} />
                        </div>
                        {/* Original Content with positioning */}
                        <div className="slider_area" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
                            <div className="slider_text">
                                <div className="container">
                                    <div className="position_relv">
                                        <div className="row">
                                            <div className="col-xl-9">
                                                <div className="title_text ml-3">
                                                    <h3
                                                        style={{
                                                            color: '#aaffff !important',
                                                            //     textShadow: `
                                                            //     0 0 5px #0ff,
                                                            //     0 0 10px #0ff,
                                                            //     0 0 20px #0ff,
                                                            //     0 0 40px #0ff,
                                                            //     0 0 80px #0ff
                                                            //   `,
                                                            fontWeight: 'bold',
                                                            fontSize: '4rem',
                                                            WebkitTextFillColor: '#aaffff',
                                                            // filter: 'drop-shadow(0 0 10px #0ff)',
                                                        }}
                                                    >
                                                        Event Schedule
                                                    </h3>
                                                    <br />
                                                    <div className="relative flex gap-4">
                                                        <a
                                                            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+8.0&dates=20250321/20250324"
                                                            style={{
                                                                padding: '0.8rem 1.5rem',
                                                                color: '#0ff',
                                                                border: '2px solid #0ff',
                                                                borderRadius: '8px',
                                                                textTransform: 'uppercase',
                                                                fontWeight: 'bold',
                                                                boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
                                                                transition: '0.3s',
                                                                backgroundColor: 'black',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.boxShadow =
                                                                    '0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff';
                                                                e.target.style.transform = 'scale(1.05)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.boxShadow = '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff';
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            Add to your Calendar
                                                        </a>
                                                        <a
                                                            href="https://unstop.com/p/hackoverflow-80-gnulinux-users-group-nit-durgapur-1437266"
                                                            style={{
                                                                padding: '0.8rem 1.5rem',
                                                                color: 'rgba(255, 255, 255, 1)',
                                                                textShadow: '0 0 5px rgba(152, 185, 216, 1)',
                                                                border: '2px solid rgba(152, 185, 216, 1)',
                                                                borderRadius: '8px',
                                                                textTransform: 'uppercase',
                                                                fontWeight: 'bold',
                                                                boxShadow: '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f',
                                                                transition: '0.3s',
                                                                backgroundColor: 'black',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.boxShadow =
                                                                    '0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f';
                                                                e.target.style.transform = 'scale(1.05)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.boxShadow = '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f';
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            Apply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_text_mobile">
                                <div className="container flex flex-wrap flex-column justify-center">
                                    <div className="position_relv flex flex-col gap-2 items-center text-center">
                                        <h3
                                            className="md:mt-5"
                                            style={{
                                                color: '#aaffff',
                                                // textShadow: `
                                                //     0 0 5px #0ff,
                                                //     0 0 10px #0ff,
                                                //     0 0 20px #0ff,
                                                //     0 0 30px #0ff
                                                // `,
                                                fontWeight: 'bold',
                                                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                                                WebkitTextFillColor: '#aaffff',
                                                filter: 'drop-shadow(0 0 10px #0ff)',
                                                marginBottom: '0.5rem'
                                            }}
                                        >
                                            Event Schedule
                                        </h3>
                                        <div className="relative flex flex-col flex-wrap gap-4 justify-center mb-5" style={{ width: '100%', maxWidth: '400px' }}>
                                            <a
                                                href="https://unstop.com/p/hackoverflow-80-gnulinux-users-group-nit-durgapur-1437266"
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '0.8rem 1.5rem',
                                                    color: 'rgba(255, 255, 255, 1)',
                                                    border: '2px solid #f0f',
                                                    borderRadius: '8px',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold',
                                                    boxShadow: '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f',
                                                    transition: '0.3s',
                                                    textDecoration: 'none',
                                                    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                                                    textShadow: '0 0 5px rgba(152, 185, 216, 1)',
                                                    backgroundColor: 'black',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.boxShadow = '0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f';
                                                    e.target.style.transform = 'scale(1.05)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.boxShadow = '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f';
                                                    e.target.style.transform = 'scale(1)';
                                                }}
                                            >
                                                Apply
                                            </a>

                                            <a
                                                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+8.0&dates=20250321/20250324"
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '0.8rem 1.5rem',
                                                    color: '#0ff',
                                                    border: '2px solid #0ff',
                                                    borderRadius: '8px',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold',
                                                    boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
                                                    transition: '0.3s',
                                                    textDecoration: 'none',
                                                    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                                                    backgroundColor: 'black',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.boxShadow = '0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff';
                                                    e.target.style.transform = 'scale(1.05)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.boxShadow = '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff';
                                                    e.target.style.transform = 'scale(1)';
                                                }}
                                            >
                                                Add to Calendar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="monocolor-rectangle" style={{ padding: '2rem 0' }}>
                                <div className="mobile-timer flex flex-col items-center text-center"
                                    style={{
                                        marginTop: 'clamp(1.5rem, 4vw, 3rem)',
                                        marginBottom: 'clamp(2rem, 5vw, 3rem)',
                                        paddingLeft: 'clamp(1rem, 3vw, 3rem)',
                                        paddingRight: 'clamp(1rem, 3vw, 3rem)'
                                    }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            padding: '0 1rem',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <div style={{ width: '100%', maxWidth: '700px' }}>
                                            <Timer />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full"
                                        style={{
                                            gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                                            marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
                                            maxWidth: '600px'
                                        }}>
                                        <p
                                            className="font-bold neon-text"
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                marginBottom: '0',
                                                color: '#00ffff',
                                                textShadow: '0 0 10px #00ffff'
                                            }}
                                        >
                                            Online
                                        </p>
                                        <p
                                            className="font-bold neon-text"
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                marginBottom: '0',
                                                color: '#ff00ff',
                                                textShadow: '0 0 10px #ff00ff'
                                            }}
                                        >
                                            20th March, 2025
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event_area plus_padding" style={{
                    background: 'linear-gradient(180deg, #020611 0%, #041228 50%, #020611 100%)',
                    position: 'relative',
                    padding: '80px 0'
                }}>
                    {/* <h1 className="vr_text d-none d-lg-block neon-text" style={{ 
                        color: '#00ff88',
                        textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88',
                        right: '-120px',
                        zIndex: 0,
                        marginRight: '-190px'
                    }}>
                        Event Schedule
                    </h1> */}
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <div className="double_line" style={{ marginBottom: '40px' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12" style={{ marginBottom: '20px' }}>
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#00ffff',
                                            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
                                            fontSize: '1.5rem'
                                        }}>
                                            20 March, 2025
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12">
                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.6s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/finish-line.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #00ffff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 1.5s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Coding period ends
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    1:00 PM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Contestants stop the coding and submit their codes for further evaluation process.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.8s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/podium.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #ff00ff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 2s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Judges' Address
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    4:00 PM to 5:00 PM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Few words of motivation from our knowledgeable and experienced judges!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/idea.png"
                                            alt
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #00ffff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite'
                                            }}
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Application Submission Phase Starts
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    8:00 PM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Period for applications starts. Participants can submit the application on Unstop.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="double_line" style={{ marginBottom: '40px' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12" style={{ marginBottom: '20px' }}>
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#ff00ff',
                                            textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
                                            fontSize: '1.5rem'
                                        }}>
                                            21 March, 2025
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12">
                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.2s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/lightbulb.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #ff00ff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 0.5s',
                                                backgroundColor: 'white'
                                            }}
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Application Submission Phase Ends
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    6:00 PM
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="double_line" style={{ marginBottom: '40px' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12" style={{ marginBottom: '20px' }}>
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#00ff88',
                                            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88',
                                            fontSize: '1.5rem'
                                        }}>
                                            22 March, 2025
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12">
                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.4s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/shuttle.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #00ff88',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 1s',
                                                backgroundColor: 'white'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#00ff88',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Hackoverflow flags off!
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ffff',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    00:00 AM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Ready! Set! Go!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="double_line" style={{ marginBottom: '40px' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12" style={{ marginBottom: '20px' }}>
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#00ffff',
                                            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
                                            fontSize: '1.5rem'
                                        }}>
                                            23 March, 2025
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12">
                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        marginBottom: '25px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.6s'
                                    }}>
                                        <img
                                            src="/finish-line.png"
                                            style={{
                                                width: 80,
                                                height: 80,
                                                border: '3px solid #00ffff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 1.5s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>
                                                    Coding period ends
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 'bold'
                                                }}>
                                                    1:00 PM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', marginTop: '10px' }}>
                                                Contestants stop the coding and submit their codes for further evaluation process.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        marginBottom: '25px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.8s'
                                    }}>
                                        <img
                                            src="/podium.png"
                                            style={{
                                                width: 80,
                                                height: 80,
                                                border: '3px solid #ff00ff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 2s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>
                                                    Judges' Address
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 'bold'
                                                }}>
                                                    4:00 PM to 5:00 PM
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', marginTop: '10px' }}>
                                                Few words of motivation from our knowledgeable and experienced judges!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="double_line" style={{ marginBottom: '40px' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12" style={{ marginBottom: '20px' }}>
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#ff00ff',
                                            textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
                                            fontSize: '1.5rem'
                                        }}>
                                            23 March, 2025
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12">
                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '1s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/lightbulb.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #00ff88',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 2.5s',
                                                backgroundColor: 'white'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#00ff88',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Evaluation Starts
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ffff',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    2:00 pm
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Each of the top 15 teams will present their projects.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '1.2s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/podium.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #00ffff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 3s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Evaluation Completes
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    4:00 pm
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Teams will be evaluated by the judges.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker slide-in-up" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '1.4s',
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <img
                                            src="/finish-line.png"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                minWidth: 70,
                                                border: '3px solid #ff00ff',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                                animation: 'iconFloat 3s ease-in-out infinite 3.5s'
                                            }}
                                            alt
                                        />
                                        <div className="speaker-name" style={{ flex: 1, minWidth: '200px' }}>
                                            <div className="heading" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flex: 1,
                                                    minWidth: '200px'
                                                }}>
                                                    Results are Published
                                                </span>
                                                <div className="time neon-text" style={{
                                                    color: '#00ff88',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    5:00 pm
                                                </div>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7', margin: 0 }}>
                                                Results are published based on the evaluations.
                                            </p>
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
    );
}