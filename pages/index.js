import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";
import Link from "next/link";
import { useEffect } from "react";
import BlobScene from "../components/Flow";

export default function IndexPage() {
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
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
          50% { text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 50px currentColor; }
        }
        .neon-text { animation: neonPulse 2s ease-in-out infinite; }
      `}</style>

                {/* Scripts should go outside of <Head> ideally */}
            </Head>
            <div style={{ background: '#020611' }}>
                <Navbar />
                <div>
                    <div style={{ position: 'relative', minHeight: '100vh' }}>
                        {/* 3D Background */}
                        <BlobScene />

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
                                                            color: '#aaffff',
                                                            textShadow: `
        0 0 5px #0ff,
        0 0 10px #0ff,
        0 0 20px #0ff,
        0 0 40px #0ff,
        0 0 80px #0ff
      `,
                                                            fontWeight: 'bold',
                                                            fontSize: '4rem',
                                                        }}
                                                    >
                                                        HackOverflow 8.0
                                                        <br />
                                                        Aarohan, 2025
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
                                                                color: '#f0f', // neon pink
                                                                border: '2px solid #f0f',
                                                                borderRadius: '8px',
                                                                textTransform: 'uppercase',
                                                                fontWeight: 'bold',
                                                                boxShadow: '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f',
                                                                transition: '0.3s',
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
                                        <h3 className="md:mt-5" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                                            Hackoverflow 8.0
                                        </h3>
                                        <h3 style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Aarohan 2025</h3>
                                        <div className="relative">
                                            <a
                                                href="https://unstop.com/p/hackoverflow-80-gnulinux-users-group-nit-durgapur-1437266"
                                                className="boxed-btn-white"
                                            >
                                                Apply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="monocolor-rectangle">
                                <div className="mobile-timer flex flex-col items-center md:items-start md:px-6 lg:px-52 text-center md:text-left md:my-8">
                                    <Timer />
                                    <div className="flex flex-col md:flex-row justify-between md:gap-4 md:mt-4">
                                        <p className="text-2xl font-bold text-white">
                                            Online
                                        </p>
                                        <p className="text-2xl font-bold text-white">
                                            20th March, 2025
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2"
                                    style={{
                                        width: "100%",
                                        height: "100px",
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+8.0&dates=20250321/20250324"
                                            className="boxed-btn-white md:my-2 sm:ml-3 block"
                                            id="register-2"
                                        >
                                            Add to your Calendar
                                        </a>
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
                                            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
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
                                        Hackoverflow 8.0 is conducted by team
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
                                            background: 'linear-gradient(135deg, #ff00ff 0%, #ff0080 100%)',
                                            border: '2px solid #ff00ff',
                                            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                                            transition: 'all 0.3s ease'
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
                        textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff'
                    }}>
                        Judges
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="serction_title_large mb-95">
                                    <h3 className="neon-text" style={{
                                        color: '#ff00ff',
                                        textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff'
                                    }}>Judges</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                            <div className="flex flex-col rounded-lg items-center justify-between w-72 neon-border scanline-effect float-animation"
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
                            </div>

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
                                    border: "4px solid #ff00ff",
                                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)'
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
                                            color: '#ff00ff',
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event_area" style={{ background: 'linear-gradient(180deg, #020611 0%, #041228 100%)', position: 'relative' }}>
                    <h1 className="vr_text d-none d-lg-block neon-text" style={{
                        color: '#00ff88',
                        textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88'
                    }}>Themes List</h1>
                    <div className="container">
                        <div className="double_line">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="date">
                                        <h3 className="neon-text" style={{
                                            color: '#00ffff',
                                            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
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
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
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
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/road-safety.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #ff00ff',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span className="neon-text" style={{
                                                    color: '#ff00ff',
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
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/healthcare.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ff88',
                                                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
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
                                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/classroom.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ffff',
                                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
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
                                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/agriculture.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #ff00ff',
                                                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
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
                                        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img
                                            src="/open-sign.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                                border: '3px solid #00ff88',
                                                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
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

                <Footer />
            </div>
        </>
    );
}