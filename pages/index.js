// my new version of index.js with 3D background and improved styling 

import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlobScene from "../components/Flow";
import Shuffle from "../components/font/Shuffle";


export default function IndexPage() {

    const [openFAQ, setOpenFAQ] = useState(1);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const [isMobile, setIsMobile] = useState(false);
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://apply.devfolio.co/v2/sdk.js";
    //     script.async = true;
    //     script.defer = true;
    //     script.onload = () => {
    //         console.log("Devfolio SDK loaded");
    //         if (window.Devfolio) {
    //             window.Devfolio.setup();
    //         }
    //     };
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // run once
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Head>
                {/* Basic Meta */}
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="IE=edge" />
                <title>HackOverflow 9.0</title>
                <meta
                    name="description"
                    content="HackOverflow 9.0 - NIT Durgapur's official hackathon platform"
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

                {/* Scripts should go outside of <Head> ideally */}
            </Head>
            <div style={{ background: '#020611' }}>
                <Navbar />
                <div>
                    <div style={{ position: 'relative', minHeight: '100vh' }}>
                        {/* 3D Background */}
                        {/* <BlobScene /> */}
                        <div className="hero-bg">
                            <img src={isMobile ? "/hero/final2.jpg" : "/hero/final3.jpg"} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 1 }} />
                        </div>


                        {/* Original Content with positioning */}
                        <div className="slider_area" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
                            <div className="slider_text">
                                <div className="container">
                                    <div className="position_relv">
                                        <div className="row">
                                            <div className="col-xl-9">
                                                <div className="title_text ml-3">
                                                    {/* <h3
                                                        style={{
                                                            color: '#aaffff !important',
                                                            fontWeight: 'bold',
                                                            fontSize: '4rem',
                                                            WebkitTextFillColor: '#aaffff',
                                                            filter: 'drop-shadow(0 0 10px #0ff)',
                                                        }}
                                                    >
                                                        HackOverflow 9.0
                                                        <br />
                                                        Aarohan, 2025
                                                    </h3> */}
                                                    <Shuffle
                                                        text="HackOverflow 9.0"
                                                        shuffleDirection="right"
                                                        duration={1}
                                                        animationMode="evenodd"
                                                        shuffleTimes={1}
                                                        ease="power3.out"
                                                        stagger={0.03}
                                                        threshold={0.1}
                                                        triggerOnce={true}
                                                        triggerOnHover={true}
                                                        // loop={true}
                                                        respectReducedMotion={true}
                                                        style={{
                                                            color: '#aaffff !important',
                                                            fontWeight: 'bold',
                                                            fontSize: '4rem',
                                                            WebkitTextFillColor: '#aaffff',
                                                            filter: 'drop-shadow(0 0 10px #0ff)',
                                                            textTransform: 'none',
                                                        }}
                                                    />
                                                    <br />
                                                    <Shuffle
                                                        text="Aarohan, 2025"
                                                        shuffleDirection="right"
                                                        duration={1}
                                                        animationMode="evenodd"
                                                        shuffleTimes={1}
                                                        ease="power3.out"
                                                        stagger={0.03}
                                                        threshold={0.1}
                                                        triggerOnce={true}
                                                        triggerOnHover={true}
                                                        respectReducedMotion={true}
                                                        style={{
                                                            color: '#aaffff !important',
                                                            fontWeight: 'bold',
                                                            fontSize: '4rem',
                                                            WebkitTextFillColor: '#aaffff',
                                                            filter: 'drop-shadow(0 0 10px #0ff)',
                                                            textTransform: 'none',
                                                        }}
                                                    />
                                                    <br />
                                                    <div className="relative flex gap-4">
                                                        <a
                                                            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+9.0&dates=20251017/20251020"
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
{/* 
                                                        <div
                                                            className="apply-button"
                                                            data-hackathon-slug="hackoverflow09"
                                                            data-button-theme="light"
                                                            style={{ height: 44, width: 312, margin: '1rem 0' }}
                                                        ></div> */}
                                                        <a
                                                            href="https://unstop.com/o/FSRT05D?lb=WeP5uM4g&utm_medium=Share&utm_source=WhatsApp"
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
{/* 
                                                        <div
                                                            className="apply-button"
                                                            data-hackathon-slug="hackoverflow09"
                                                            data-button-theme="dark"
                                                            style={{ height: 44, width: 312, margin: '1rem 0', color: 'white', borderRadius: '8px', backgroundColor: 'black' }}
                                                        ></div> */}

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
                                        {/* <h3
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
                                            HackOverflow 9.0
                                        </h3> */}
                                        <Shuffle
                                            text="HackOverflow 9.0"
                                            shuffleDirection="right"
                                            duration={1}
                                            animationMode="evenodd"
                                            shuffleTimes={1}
                                            ease="power3.out"
                                            stagger={0.03}
                                            threshold={0.1}
                                            triggerOnce={true}
                                            triggerOnHover={true}
                                            // loop={true}
                                            respectReducedMotion={true}
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
                                                marginBottom: '0.5rem',
                                                textTransform: 'none'
                                            }}
                                        />
                                        <h3
                                            style={{
                                                color: '#aaffff',
                                                // textShadow: `
                                                //     0 0 5px #0ff,
                                                //     0 0 10px #0ff,
                                                //     0 0 20px #0ff,
                                                //     0 0 30px #0ff
                                                // `,
                                                fontWeight: 'bold',
                                                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                                                WebkitTextFillColor: '#aaffff',
                                                filter: 'drop-shadow(0 0 10px #0ff)',
                                                marginBottom: '1.5rem'
                                            }}
                                        >
                                            Aarohan, 2025
                                        </h3>
                                        <div className="relative flex flex-col flex-wrap gap-4 justify-center mb-5">
                                            <a
                                                href="https://unstop.com/o/FSRT05D?lb=WeP5uM4g&utm_medium=Share&utm_source=WhatsApp"
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '0.8rem 1.5rem',
                                                    color: 'rgba(255, 255, 255, 1)',
                                                    textShadow: '0 0 5px rgba(152, 185, 216, 1)',
                                                    border: '2px solid #f0f',
                                                    borderRadius: '8px',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold',
                                                    boxShadow: '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f',
                                                    transition: '0.3s',
                                                    textDecoration: 'bold',
                                                    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
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
                                            {/* <div
                                                className="apply-button"
                                                data-hackathon-slug="hackoverflow09"
                                                data-button-theme="light"
                                                style={{ height: 400, width: 312, margin: '1rem 0' }}
                                            ></div> */}
                                            <a
                                                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+9.0&dates=20251017/20251020"
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
                                            className="font-bold text-white"
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                marginBottom: '0'
                                            }}
                                        >
                                            Online
                                        </p>
                                        <p
                                            className="font-bold text-white"
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                marginBottom: '0'
                                            }}
                                        >
                                            17th October, 2025
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="p-4 md:p-6"
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        marginTop: 'clamp(1rem, 3vw, 2rem)',
                                        marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'
                                    }}
                                >
                                    <div style={{ width: '100%', maxWidth: '350px', padding: '0 1.5rem' }}>
                                        {/* <a
                                            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+8.0&dates=20250321/20250324"
                                            className="md:my-2 block"
                                            id="register-2"
                                            style={{
                                                display: 'inline-block',
                                                width: '100%',
                                                padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
                                                color: '#0ff',
                                                border: '2px solid #0ff',
                                                borderRadius: '8px',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                                boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
                                                transition: '0.3s',
                                                textDecoration: 'none',
                                                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                                                textAlign: 'center',
                                                whiteSpace: 'normal',
                                                lineHeight: '1.4',
                                                marginTop: '0.5rem'
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
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_area" style={{ background: 'linear-gradient(180deg, #020611 0%, #041228 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div className="shape-1 d-none d-xl-block">
                        <img src="img/about/shap1.png" alt style={{ filter: 'drop-shadow(0 0 20px #00ffff)' }} />
                    </div>
                    <div className="shape-2 d-none d-xl-block">
                        <img src="img/about/shap2.png" alt style={{ filter: 'drop-shadow(0 0 20px #ff00ff)' }} />
                    </div>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-6 slide-in-left">
                                <div className="about_thumb float-animation scanline-effect" style={{
                                    border: '2px solid #00ffff',
                                    borderRadius: '20px',
                                    padding: '20px',
                                    background: 'rgba(0, 255, 255, 0.05)',
                                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(0, 255, 255, 0.1)'
                                }}>
                                    <img src="img/about/about.png" alt style={{ borderRadius: '15px' }} />
                                </div>
                            </div>
                            <div className="col-xl-5 offset-xl-1 col-md-6 slide-in-right">
                                <div className="about_info">
                                    <div className="section_title">
                                        <span className="sub_heading neon-text" style={{ color: '#00ff88', fontWeight: 'bold' }}>
                                            Welcome To
                                        </span>
                                        <h3 className="neon-text" style={{
                                            color: '#00ffff',
                                            textShadow: '0 0 4px #00ffff, 0 0 8px #00ffff',
                                            marginTop: '20px'
                                        }}>
                                            The Biggest Technical <br />
                                            Fest of the <br />
                                            Year 2025
                                        </h3>
                                    </div>
                                    <p style={{
                                        color: '#b0c4de',
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        textShadow: '0 0 5px rgba(176, 196, 222, 0.5)'
                                    }}>
                                        <br />
                                        <br />
                                        Hackoverflow 9.0 is conducted by team
                                        Aavishkar during Aarohan, the second
                                        largest techno-management of Eastern
                                        India!
                                    </p>
                                    <br />
                                    <br />
                                    <br />
                                    <a
                                        href="https://www.facebook.com/arhn.nitd/"
                                        className="boxed-btn-red neon-border"
                                        style={{
                                            background: 'linear-gradient(135deg, #866be6ff 0%, #ff0080 100%)',
                                            border: '2px solid #a0c0e5ff',
                                            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                            transition: 'all 0.3s ease',
                                            color: "white",
                                            textShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
                                            fontWeight: "bolder",
                                        }}
                                    >
                                        Learn More about Aarohan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="speakers_area" style={{ background: 'linear-gradient(180deg, #041228 0%, #020611 100%)', position: 'relative' }}>
                    <h1 className="horizontal_text d-none d-lg-block neon-text" style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff'

                    }}>
                        Judges
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="serction_title_large mb-95">
                                    <h3 className="neon-text" style={{
                                        color: '#afa2ecff',
                                        textShadow: '0 0 4px #ff00ff, 0 0 8px #ff00ff'
                                    }}>Judges</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                            {/* <div className="flex flex-col rounded-lg items-center justify-between w-72 neon-border scanline-effect float-animation"
                                style={{
                                    border: '3px solid #00ffff',
                                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0.05) 100%)',
                                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    animationDelay: '0s'
                                }}>
                                <div className="rounded-lg text-white p-4 w-full text-center italic" style={{
                                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                                    borderBottom: '2px solid #00ffff'
                                }}>

                                </div>
                                <div className="rounded-full self-start" style={{
                                    marginTop: "-2rem", marginLeft: "1rem",
                                    border: "4px solid #00ffff",
                                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
                                }}>
                                    <img
                                        src="/img/speakers/judge2025.jpeg"
                                        alt="Veer Pratap Singh"
                                        className="w-20 h-20 mx-auto rounded-full dark:bg-gray-500 aspect-square border-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 justify-start" style={{ padding: "1rem" }}>
                                    <div className="flex justify-between items-center">
                                        <div className="text-xl neon-text" style={{
                                            color: '#00ffff',
                                            fontWeight: 'bold'
                                        }}>
                                            Veer Pratap Singh
                                        </div>
                                        <a
                                            rel="noopener noreferrer"
                                            href="https://www.linkedin.com/in/veer-pratap-singh/"
                                            aria-label="LinkedIn"
                                            className="rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                            style={{ filter: 'drop-shadow(0 0 5px #00ffff)' }}
                                        >
                                            <img src="/img/linkedin.svg" alt="LinkedIn" />
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-base" style={{ color: '#b0c4de' }}>
                                            Senior Software Developer at Antier Solutions; Tech Lead; Technical Speaker
                                        </p>
                                    </div>
                                    <div>
                                        <h6>
                                            <span className="font-bold neon-text" style={{ color: '#00ff88' }}>500+</span> <span style={{ color: '#888' }}>Connections</span>
                                        </h6>
                                    </div>
                                    <div className="flex gap-2" style={{ color: '#b0c4de' }}>
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00ffff"><path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                                        <p>India</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* 
                            <div className="flex flex-col rounded-lg items-center justify-between w-72 neon-border scanline-effect float-animation"
                                style={{
                                    border: '3px solid #ff00ff',
                                    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 100%)',
                                    boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    animationDelay: '0.3s'
                                }}>
                                <div className="rounded-lg text-white p-4 w-full text-center italic" style={{
                                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                                    borderBottom: '2px solid #ff00ff'
                                }}>

                                </div>
                                <div className="rounded-full self-start" style={{
                                    marginTop: "-2rem", marginLeft: "1rem",
                                    border: "4px solid skyblue",
                                    boxShadow: '0 0 20px rgba(142, 144, 231, 0.6)'
                                }}>
                                    <img
                                        src="/img/speakers/judge2025_1.jpeg"
                                        alt="Harshavardhan Bajoria"
                                        className="w-20 h-20 mx-auto rounded-full dark:bg-gray-500 aspect-square border-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 justify-start" style={{ padding: "1rem" }}>
                                    <div className="flex justify-between items-center">
                                        <div className="text-xl neon-text" style={{
                                            color: 'skyblue',
                                            fontWeight: 'bold'
                                        }}>
                                            Harshavardhan Bajoria
                                        </div>
                                        <a
                                            rel="noopener noreferrer"
                                            href="https://www.linkedin.com/in/harshavardhan-bajoria?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                            aria-label="LinkedIn"
                                            className="rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                            style={{ filter: 'drop-shadow(0 0 5px #ff00ff)' }}
                                        >
                                            <img src="/img/linkedin.svg" alt="LinkedIn" />
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-base" style={{ color: '#b0c4de' }}>
                                            Associate Product Manager @Unstop; GitHub Campus Expert; Azure Developer Lead
                                        </p>
                                    </div>
                                    <div>
                                        <h6>
                                            <span className="font-bold neon-text" style={{ color: '#00ff88' }}>500+</span> <span style={{ color: '#888' }}>Connections</span>
                                        </h6>
                                    </div>
                                    <div className="flex gap-2" style={{ color: '#b0c4de' }}>
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff00ff"><path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                                        <p>India</p>
                                    </div>
                                </div>
                            </div> */}

                            <h1 style={{ color: '#aaffff', textAlign: 'center', margin: '2rem 0', fontSize: '2rem', fontWeight: 'bold', padding: '1rem 0', textShadow: '0 0 2px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 0px #0ff' }}>To Be Announced Soon....</h1>
                        </div>
                    </div>
                </div>

                <div className="event_area" style={{ background: 'linear-gradient(180deg, #020611 0%, #041228 100%)', position: 'relative' }}>
                    <h1 className="vr_text d-none d-lg-block neon-text" style={{
                        color: '#00ff88',
                        textShadow: '0 0 5px #00ff88, 0 0 10px #00ff88',
                        marginTop: '5rem'
                    }}>Themes List</h1>
                    <div className="container">
                        <div className="double_line">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#00ffff',
                                            textShadow: '0 0 3px #00ffff, 0 0 6px #00ffff',
                                            // marginTop: '-1.5rem'
                                        }}>
                                            Hackathon Themes
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9">
                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/blockchain.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ffff',
                                                // boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>Blockchain Technology**</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                Keeping all important data in
                                                one place is risky. So it's
                                                better to keep important data at
                                                decentralised locations. Any
                                                web/mobile app can make use of
                                                this concept.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        // boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/road-safety.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #ff00ff',
                                                // boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#7fb4f1ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>Road Safety</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                Road safety is a constant
                                                concern for public safety,
                                                particularly in developing
                                                countries. Design an effective
                                                solution that could help tackle
                                                contemporary challenges for road
                                                safety.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        // boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/healthcare.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ff88',
                                                // boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#00ff88',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>HealthCare</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                The global COVID-19 pandemic has
                                                accelerated the need for digital
                                                reinvention and the adoption of
                                                better healthcare technology.
                                                High-quality health care helps
                                                prevent diseases and improve
                                                quality of life. Build solutions
                                                to increase access to health
                                                care services.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        // boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/classroom.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ffff',
                                                // boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#00ffff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>Education</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                Our education system has not
                                                updated since long but
                                                technological advancements have
                                                been rapid. Upcoming technology
                                                can help students better grasp
                                                concepts.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        // boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/agriculture.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #ff00ff',
                                                // boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>Agriculture</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                Producing and distributing food
                                                materials is a challenge with
                                                many environmental as well as
                                                government policies affecting
                                                it. Make use of technology to
                                                ease this problem.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker scanline-effect" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px',
                                        // boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/open-sign.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ff88',
                                                // boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#00ff88',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem'
                                                }}>Open Innovation</span>
                                            </div>
                                            <p style={{ color: '#b0c4de', lineHeight: '1.7' }}>
                                                Make use of developer tools to
                                                help solve any issue in society.
                                                It can be related to health,
                                                education, environment, etc.
                                                Anything that can help the
                                                society is valid.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resister_book" style={{
                    background: 'linear-gradient(180deg, #041228 0%, #020611 100%)',
                    position: 'relative',
                    padding: '80px 0',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        opacity: 0.1,
                        background: 'radial-gradient(circle at 20% 50%, #00ffff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ff00ff 0%, transparent 50%)',
                        animation: 'pulse 4s ease-in-out infinite',
                    }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="resister_text text-center">
                                    {/* <h3 className="neon-text" style={{
                                        color: '#00ffff',
                                        // textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
                                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                                        fontWeight: 'bold',
                                        marginBottom: '3rem',
                                        // animation: 'glow 2s ease-in-out infinite alternate'
                                    }}>
                                        Specific Sponsor Track Benefits and Prizes!
                                    </h3> */}
                                    <ul style={{
                                        fontFamily: "Poppins",
                                        listStyle: 'none',
                                        padding: 0
                                    }}>


                                        {/* <li className="fade-in" style={{ animationDelay: '0.1s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.1) 0%, rgba(130, 71, 229, 0.05) 100%)',
                                                    border: '2px solid rgba(130, 71, 229, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(130, 71, 229, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(130, 71, 229, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(130, 71, 229, 0.3)';
                                                }}
                                            >
                                                <Link href="https://ethindia2024.devfolio.co">
                                                    <img
                                                        className="mb-10"
                                                        src="/ethindia-light.png"
                                                        alt="ETHINDIA LOGO"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(130, 71, 229, 0.5))',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </Link>
                                                <span style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                                                }}>
                                                    ETHIndia is empowering the Ethereum Community through its various initiatives including hackathons,
                                                    <br />
                                                    fellowships, grants, and more
                                                </span>
                                            </div>
                                        </li> */}

                                        {/* Polygon */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.1s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.1) 0%, rgba(130, 71, 229, 0.05) 100%)',
                                                    border: '2px solid rgba(130, 71, 229, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(130, 71, 229, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(130, 71, 229, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(130, 71, 229, 0.3)';
                                                }}
                                            >
                                                <Link href="https://polygon.technology/">
                                                    <img
                                                        className="mb-10"
                                                        src="/Portis_Logo-Colored.png"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(130, 71, 229, 0.5))',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </Link>
                                                <span style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                                                }}>
                                                    <strong style={{ color: '#00ffff' }}>$200</strong> for best hack built on Ethereum + Polygon
                                                    <br />
                                                    <strong style={{ color: '#00ffff' }}>$150</strong> for best hack built on Ethereum
                                                </span>
                                            </div>
                                        </li> */}

                                        {/* Replit */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.2s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 100%)',
                                                    border: '2px solid rgba(255, 0, 255, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 0, 255, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.3)';
                                                }}
                                            >
                                                <Link href="https://replit.com/">
                                                    <img
                                                        src="/Replit-light-background.png"
                                                        className="h-20 mb-4"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.5))',
                                                        }}
                                                    />
                                                </Link>
                                                <span style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                                                }}>
                                                    <strong style={{ color: '#ff00ff' }}>$50</strong> for winning Project deployed on Replit
                                                </span>
                                            </div>
                                        </li> */}

                                        {/* Filecoin */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.3s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                                                    border: '2px solid rgba(0, 255, 136, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.3)';
                                                }}
                                            >
                                                <Link href="https://filecoin.io">
                                                    <img
                                                        src="/Filecoin.png"
                                                        className="w-45 h-20 mb-6"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))',
                                                        }}
                                                    />
                                                </Link>
                                                <span style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                                                }}>
                                                    <strong style={{ color: '#00ff88' }}>$250</strong> for best use of Filecoin and/or IPFS
                                                </span>
                                            </div>
                                        </li> */}

                                        {/* Solana */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.4s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0.05) 100%)',
                                                    border: '2px solid rgba(0, 255, 255, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 255, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.3)';
                                                }}
                                            >
                                                <Link href="https://solana.com/">
                                                    <img
                                                        src="/Solana-Colored.svg"
                                                        className="w-45 h-10 mb-10"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))',
                                                        }}
                                                    />
                                                </Link>
                                                <div style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <span>
                                                        <strong style={{ color: '#00ffff' }}>$USDC 100</strong> for the best project beginners just starting out on Solana
                                                    </span>
                                                    <span>
                                                        <strong style={{ color: '#00ffff' }}>$USDC 250</strong> for the best project that goes into depth, demonstrating higher-order code
                                                    </span>
                                                    <span>
                                                        <strong style={{ color: '#00ffff' }}>$USDC 500</strong> for the best advanced project that is almost ready for full-time development
                                                    </span>
                                                </div>
                                            </div>
                                        </li> */}

                                        {/* Digital Ocean */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.5s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0.05) 100%)',
                                                    border: '2px solid rgba(0, 123, 255, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(0, 123, 255, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 123, 255, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 123, 255, 0.3)';
                                                }}
                                            >
                                                <Link href="https://www.digitalocean.com/">
                                                    <img
                                                        src="/digital_ocean.png"
                                                        className="w-45 h-12 md:h-16 mb-10"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(0, 123, 255, 0.5))',
                                                        }}
                                                    />
                                                </Link>
                                                <div style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <span>
                                                        A total of <strong style={{ color: '#007bff' }}>$2,000</strong> in credits to the winning team(s) - these can be distributed only in sums of $100, $125, and $250, per winning team
                                                    </span>
                                                    <span>
                                                        <strong style={{ color: '#007bff' }}>$50</strong>, 30-day free trial for all the attendees
                                                    </span>
                                                </div>
                                            </div>
                                        </li> */}

                                        {/* Wolfram */}
                                        {/* <li className="fade-in" style={{ animationDelay: '0.6s' }}>
                                            <div
                                                className="p-4 flex flex-col items-center justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{
                                                    marginBottom: "25px",
                                                    background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.1) 0%, rgba(255, 69, 0, 0.05) 100%)',
                                                    border: '2px solid rgba(255, 69, 0, 0.4)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 0 30px rgba(255, 69, 0, 0.3)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 69, 0, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 69, 0, 0.3)';
                                                }}
                                            >
                                                <Link href="https://www.wolfram.com/">
                                                    <img
                                                        src="/img/wolf.jpg"
                                                        className="w-45 h-20 mb-10"
                                                        style={{
                                                            filter: 'drop-shadow(0 0 10px rgba(255, 69, 0, 0.5))',
                                                            borderRadius: '10px'
                                                        }}
                                                    />
                                                </Link>
                                                <div style={{
                                                    color: '#e0e0ff',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <span>
                                                        A year of <strong style={{ color: '#ff4500' }}>Wolfram|One Personal Edition</strong> plus a one-year subscription to <strong style={{ color: '#ff4500' }}>Wolfram|Alpha Pro</strong> to all the members of top 10 teams
                                                    </span>
                                                    <span>
                                                        The value of each individual award is <strong style={{ color: '#ff4500' }}>$375.00</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section with Neon Theme */}
                <div className="faq_area" style={{
                    background: 'linear-gradient(180deg, #020611 0%, #041228 100%)',
                    position: 'relative',
                    padding: '80px 0',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        opacity: 0.05,
                        background: 'radial-gradient(circle at 50% 50%, #ff00ff 0%, transparent 50%)',
                    }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="serction_title_large mb-95 text-center">
                                    <h3 className="neon-text" style={{
                                        color: '#7799e4ff',
                                        // textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
                                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                                        fontWeight: 'bold',
                                        marginBottom: '3rem',
                                        animation: 'glow 2s ease-in-out infinite alternate'
                                    }}>
                                        Frequently Asked Questions
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div>
                                    {/* FAQ 1 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.1s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(1)}>
                                            <h5 className="mb-0" style={{
                                                color: '#ff00ff',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Do I need to have any specific qualifications to be a participant for the Hackathon?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 1 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 1 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                If you love to code, you are more than welcome to participate in the Hackathon.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.2s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(2)}>
                                            <h5 className="mb-0" style={{
                                                color: '#00ffff',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Do I need to pay any money to register for the Hackathon?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 2 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 2 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                No. You do not have to pay anything to anyone to register yourself for any Hackathon on unstop.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.3s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(3)}>
                                            <h5 className="mb-0" style={{
                                                color: '#00ff88',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>How do I submit what I have made for the Hackathon?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 3 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 3 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                You have to develop the application on your local system and submit it on unstop in tar/zip file format along with instructions to run the application and source code.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.05) 0%, rgba(130, 71, 229, 0.02) 100%)',
                                        border: '2px solid rgba(130, 71, 229, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(130, 71, 229, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.4s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(4)}>
                                            <h5 className="mb-0" style={{
                                                color: '#8247e5',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(130, 71, 229, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(130, 71, 229, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Do we need to have the entire idea fully working?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 4 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 4 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 5 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(255, 0, 255, 0.02) 100%)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.5s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(5)}>
                                            <h5 className="mb-0" style={{
                                                color: '#ff00ff',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>How do we submit our hack?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 5 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 5 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                You have to develop the entire software application on your local system and submit it on unstop in tar/zip file format along with instructions to run the application and source code. If it is a mobile app, package it as an apk and send along with the source code.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 6 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 255, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.6s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(6)}>
                                            <h5 className="mb-0" style={{
                                                color: '#00ffff',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Does one have to be online and available for the entire duration of the Hackathon?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 6 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 6 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                No, one does not need to be logged in on Unstop or be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on Unstop, on the specific challenge page.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 7 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)',
                                        border: '2px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.7s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(7)}>
                                            <h5 className="mb-0" style={{
                                                color: '#00ff88',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Since there is no specific technology mentioned, are there any restrictions on using number of pre-built libraries?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 7 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 7 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                There is no restriction to use any language, technology stack, or libraries. You can use any of them to create the web/mobile application.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 8 */}
                                    <div className="fade-in" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.05) 0%, rgba(255, 69, 0, 0.02) 100%)',
                                        border: '2px solid rgba(255, 69, 0, 0.3)',
                                        borderRadius: '15px',
                                        marginBottom: '20px',
                                        boxShadow: '0 0 20px rgba(255, 69, 0, 0.2)',
                                        transition: 'all 0.3s ease',
                                        animationDelay: '0.8s',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: 'transparent',
                                            border: 'none',
                                            padding: '20px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => toggleFAQ(8)}>
                                            <h5 className="mb-0" style={{
                                                color: '#ff4500',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                textShadow: '0 0 5px rgba(255, 69, 0, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                margin: 0
                                            }}>
                                                <img
                                                    src="img/barnd/info.png"
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        borderRadius: "50%",
                                                        filter: 'drop-shadow(0 0 10px rgba(255, 69, 0, 0.5))',
                                                        flexShrink: 0
                                                    }}
                                                    alt=""
                                                />
                                                <span style={{ flex: 1 }}>Do I need to give a demo for the product that I have built?</span>
                                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: openFAQ === 8 ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                                            </h5>
                                        </div>
                                        <div style={{
                                            maxHeight: openFAQ === 8 ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                        }}>
                                            <div style={{
                                                color: '#b0c4de',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                padding: '0 20px 20px 85px'
                                            }}>
                                                If you want you can submit a small presentation or video that demos your submission, however it's not mandatory, and only good to have. In case you are one of the winners, you might be invited to demo your application at a physical event, details of which will be shared with sufficient advance notice.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add CSS animations */}
                <style jsx>{`
            // @keyframes glow {
            //     from {
            //         text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
            //     }
            //     to {
            //         text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 50px currentColor;
            //     }
            // }

            @keyframes pulse {
                0%, 100% {
                    opacity: 0.1;
                }
                50% {
                    opacity: 0.15;
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .fade-in {
                animation: fadeIn 0.6s ease-out forwards;
                opacity: 0;
            }

            .neon-text {
                animation: glow 2s ease-in-out infinite alternate;
            }
        `}</style>

                <Footer />
            </div>
        </>
    );
}