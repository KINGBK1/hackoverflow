import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";
import Link from "next/link";
import { useEffect } from "react";
import { BorderAll } from "@material-ui/icons";

export default function IndexPage() {
    useEffect(() => {
        const script = document.createElement("script");
        //script.src = "https://apply.devfolio.co/v2/sdk.js";
        script.async = true;
        script.defer = true;

        // script.onload = () => {
        //     console.log("Devfolio SDK loaded");
        //     if (window.Devfolio) {
        //         window.Devfolio.setup(); // Ensure it initializes after loading
        //     }
        // };

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
                <title>Hackoverflow 8.0</title>
                <meta name="description" content />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="img/IMG-20240307-WA0009.jpg"
                />

                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/css/magnific-popup.css" />
                <link rel="stylesheet" href="/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/themify-icons.css" />
                <link rel="stylesheet" href="/css/nice-select.css" />
                <link rel="stylesheet" href="/css/flaticon.css" />
                <link rel="stylesheet" href="/css/animate.css" />
                <link rel="stylesheet" href="/css/slicknav.css" />
                <link rel="stylesheet" href="/css/style.css" />

                <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.2.min.js"> </script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/isotope.pkgd.min.js"></script>
                <script src="/js/ajax-form.js"></script>
                <script src="/js/waypoints.min.js"></script>
                <script src="/js/jquery.counterup.min.js"></script>
                <script src="/js/imagesloaded.pkgd.min.js"></script>
                <script src="/js/scrollIt.js"></script>
                <script src="/js/jquery.scrollUp.min.js"></script>
                <script src="/js/wow.min.js"></script>
                <script src="/js/nice-select.min.js"></script>
                <script src="/js/jquery.magnific-popup.min.js"></script>
                <script src="/js/jquery.countdown.js"></script>
                <script src="/js/plugins.js"></script>
                <script src="/js/contact.js"></script>
                <script src="/js/jquery.ajaxchimp.min.js"></script>
                <script src="/js/jquery.form.js"></script>
                <script src="/js/jquery.validate.min.js"></script>
                <script src="/js/mail-script.js"></script>
                <script src="/js/main.js"></script>
                <script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js-na1.hs-scripts.com/21495576.js"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
                    crossOrigin="anonymous"
                ></script>
                <script src="/js/jquery.slicknav.min.js"></script>
            </Head>
            <div>
                <Navbar />
                <div>
                    <div className="slider_area slider_bg_1">
                        <div className="slider_text">
                            <div className="container">
                                <div className="position_relv">
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <div className="title_text ml-3">
                                                <h3>
                                                    HackOverflow 8.0
                                                    <br />
                                                    Aarohan, 2025
                                                </h3>
                                                <br />
                                                <div className="relative flex gap-4">
                                                    <a
                                                        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Hackoverflow+8.0&dates=20250321/20250324"
                                                        className="boxed-btn-white"
                                                    >
                                                        Add to your Calendar
                                                    </a>
                                                    <a
                                                        href="https://unstop.com/p/hackoverflow-80-gnulinux-users-group-nit-durgapur-1437266"
                                                        className="boxed-btn-white"
                                                    >
                                                        Apply
                                                    </a>
                                                </div>
                                                <br />
                                                <br />
                                                {/* <a
                                                 className="boxed-btn-white"
                                                  id="register-2"
                                                                   >
                                                    Register
                                                     </a> */}
                                                {/* <div
                                                    className="apply-button"
                                                    data-hackathon-slug="hackoverflow08"
                                                    data-button-theme="dark"
                                                    style={{
                                                        height: 44,
                                                        width: 312,
                                                    }}
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slider_text_mobile">
                            <div className="container flex flex-wrap flex-column justify-center">
                                <div className="position_relv flex flex-col gap-2 items-center text-center">
                                    <h3 className="md:mt-5">
                                        Hackoverflow 8.0
                                    </h3>

                                    <h3>Aarohan 2025</h3>

                                    <div className="relative">

                                        <a
                                            href="https://unstop.com/p/hackoverflow-80-gnulinux-users-group-nit-durgapur-1437266"
                                            className="boxed-btn-white"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                    {/* <div
                                        // className="apply-button"
                                        // data-hackathon-slug="hackoverflow08"
                                        // data-button-theme="dark"

                                        style={{ height: 44, width: 300 }}
                                    /> */}

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
                        <div className="monocolor-rectangle">
                            <div className="mobile-timer flex flex-col items-center md:items-start md:px-6 lg:px-52 text-center md:text-left md:my-8"

                            >
                                <Timer />
                                <div className="flex flex-col md:flex-row justify-between md:gap-4 md:mt-4">
                                    {/* <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-4 md:mt-4"> */}
                                    <p className="text-2xl font-bold text-white">
                                        Online
                                    </p>
                                    <p className="text-2xl font-bold text-white">
                                        {/* <p className="text-2xl font-bold text-white -mt-2"> */}
                                        21st March, 2025
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
                                        className="  boxed-btn-white md:my-2 sm:ml-3 block"
                                        id="register-2"
                                    >
                                        Add to your Calendar
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* <a
                                className="boxed btn-white"
                                href="https://discord.gg/aUpg65Er"
                                id="register-2"
                            >
                                Join Discord
                            </a>
                            &nbsp; &nbsp; &nbsp;
                            <a
                                className="boxed-btn-white"
                                href="/schedule"
                                id="register-2"
                            >
                                Schedule
                            </a> */}

                    </div>
                </div>

                <div className="about_area">
                    <div className="shape-1 d-none d-xl-block">
                        <img src="img/about/shap1.png" alt />
                    </div>
                    <div className="shape-2 d-none d-xl-block">
                        <img src="img/about/shap2.png" alt />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-6">
                                <div className="about_thumb">
                                    <img src="img/about/about.png" alt />
                                </div>
                            </div>
                            <div className="col-xl-5 offset-xl-1 col-md-6">
                                <div className="about_info">
                                    <div className="section_title">
                                        <span className="sub_heading">
                                            Welcome To
                                        </span>
                                        <h3>
                                            The Biggest Technical <br />
                                            Fest of the <br />
                                            Year 2025
                                        </h3>
                                    </div>
                                    <p>
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
                                        className="boxed-btn-red"
                                    >
                                        Learn More about Aarohan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="speakers_area">
                    <h1 className="horizontal_text d-none d-lg-block">
                        Judges
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="serction_title_large mb-95">
                                    <h3>Judges</h3>
                                </div>
                            </div>
                        </div>

                        {/* <h2 className="text-3xl">To be Announced...</h2> */}

                        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                            {/* <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mb-10 md:mr-10 bg-purple-100">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait?3"
                                    alt=""
                                    class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div class="space-y-4 text-center divide-y divide-gray-700">
                                    <div class="my-2 space-y-1">
                                        <h2 class="text-xl font-semibold sm:text-2xl">
                                            Leroy Jenkins
                                        </h2>
                                        <p class="px-5 text-xs sm:text-base dark:text-gray-400">
                                            Full-stack developer
                                        </p>
                                    </div>
                                    <div class="flex justify-center pt-2 space-x-4 align-center">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="GitHub"
                                            class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                        >
                                            <svg
                                                viewBox="0 0 496 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 fill-current"
                                            >
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Dribble"
                                            class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                        >
                                            <svg
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 fill-current"
                                            >
                                                <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Twitter"
                                            class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                        >
                                            <svg
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 fill-current"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Email"
                                            class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                        >
                                            <svg
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 fill-current"
                                            >
                                                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mb-10 md:mr-10 bg-purple-100 hover:bg-white hover:shadow-lg transition">
                                <img
                                    src="/img/Vipul_Tiwari.png"
                                    alt="Vipul Tiwari"
                                    class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div class="space-y-4 text-center divide-y divide-gray-700">
                                    <div class="my-2 space-y-1">
                                        <h2 class="text-xl font-semibold sm:text-2xl">
                                            Vipul Tiwari
                                        </h2>
                                        <p class="px-1 text-xs sm:text-base dark:text-gray-400">
                                            SIH Judge'2020, Twice RPA Hackathon
                                            winner, Amazonian
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-center pt-2 space-x-4 align-center">
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/vipul-tiwari-7277a2146/"
                                        aria-label="GitHub"
                                        class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                    >
                                        <img src="/img/linkedin.svg"></img>
                                    </a>
                                </div>
                            </div> */}

                            {/* Judges */}
                            <div class="flex flex-col rounded-lg items-center justify-between w-72 border-4 border-white" style={{ outline: "1px solid rgba(54, 69, 79,0.2)" }}>
                                <div class="rounded-lg bg-gray-800 text-white p-4 w-full text-center italic">
                                    
                                </div>
                                <div class="rounded-full self-start  " style={{
                                    marginTop: "-2rem", marginLeft: "1rem",
                                    border: "4px solid white",

                                }}>
                                    <img
                                        src="/img/speakers/judge2025.jpeg"
                                        alt="Veer Pratap Singh"
                                        class="w-20 h-20 mx-auto rounded-full dark:bg-gray-500 aspect-square border-white"
                                    />

                                </div>
                                <div class="flex flex-col gap-2 justify-start" style={{ padding: "1rem" }}>
                                    <div class="flex justify-between items-center">
                                        <div class="text-xl">
                                        Veer Pratap Singh
                                        </div>

                                        <a
                                            rel="noopener noreferrer"
                                            href="https://www.linkedin.com/in/veer-pratap-singh/"
                                            aria-label="GitHub"
                                            class="rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                        >
                                            <img src="/img/linkedin.svg"></img>
                                        </a>


                                    </div>
                                    <div>
                                        <p class="text-xs sm:text-base dark:text-gray-400">
                                        Senior Software Developer at Antier Solutions; Tech Lead; Technical Speaker
                                        </p>

                                    </div>
                                    <div>
                                        <h6 class="">
                                            <span class="font-bold">500+</span>  <span class="text-gray-500">Connections</span>
                                        </h6>
                                    </div>
                                    <div class="flex gap-2">
                                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54, 69, 79,0.4)"><path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                                        <p class="">India</p>
                                    </div>


                                </div>

                            </div>




                            {/* <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mb-10 bg-purple-100 hover:bg-white hover:shadow-lg transition ">
                                <img
                                    src="/img/Shamik_Guha.jpeg"
                                    alt="Shamik Guha"
                                    class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div class="space-y-4 text-center divide-y divide-gray-700">
                                    <div class="my-2 space-y-1">
                                        <h2 class="text-xl font-semibold sm:text-2xl">
                                            Shamik Guha
                                        </h2>
                                        <p class="px-2 text-xs sm:text-base dark:text-gray-400">
                                            Co-Founder & CEO at Altor, Shark
                                            Tank India, Smart mobility
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-center pt-2 space-x-4 align-center">
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/shamik-guha/"
                                        aria-label="GitHub"
                                        class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                    >
                                        <img src="/img/linkedin.svg"></img>
                                    </a>
                                </div>
                            </div> */}
                            {/* <div class="flex justify-center align-middle text-4xl font-bold">To be released soon!!</div> */}
                        </div>

                        {/* <div className='row justify-center'>
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

               <div className='single_speaker'>
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
                </div> 
               <div className="single_speaker">
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
                </div> 
            </div> */}
                    </div>
                </div>
                <div className="event_area">
                    <h1 className="vr_text d-none d-lg-block">Themes List</h1>
                    <div className="container">
                        <div className="double_line">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <div
                                        className="date"
                                        style={{ color: "blue" }}
                                    >
                                        <h3 style={{ color: "#00444C" }}>
                                            Hackathon Themes
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9">
                                    <div className="single_speaker">
                                        <img
                                            src="/blockchain.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>
                                                    Blockchain Technology**
                                                </span>
                                            </div>
                                            <p>
                                                Keeping all important data in
                                                one place is risky. So it’s
                                                better to keep important data at
                                                decentralised locations. Any
                                                web/mobile app can make use of
                                                this concept.{" "}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker">
                                        <img
                                            src="/road-safety.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>Road Safety</span>
                                            </div>
                                            <p>
                                                Road safety is a constant
                                                concern for public safety,
                                                particularly in developing
                                                countries. Design an effective
                                                solution that could help tackle
                                                contemporary challenges for road
                                                safety.{" "}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker">
                                        <img
                                            src="/healthcare.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>HealthCare</span>
                                            </div>
                                            <p>
                                                The global COVID-19 pandemic has
                                                accelerated the need for digital
                                                reinvention and the adoption of
                                                better healthcare technology.
                                                High-quality health care helps
                                                prevent diseases and improve
                                                quality of life. Build solutions
                                                to increase access to health
                                                care services.{" "}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="single_speaker">
                                        <img
                                            src="/classroom.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>Education</span>
                                            </div>
                                            <p>
                                                Our education system has not
                                                updated since long but
                                                technological advancements have
                                                been rapid. Upcoming technology
                                                can help students better grasp
                                                concepts.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single_speaker">
                                        <img
                                            src="/agriculture.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>Agriculture</span>
                                            </div>
                                            <p>
                                                Producing and distributing food
                                                materials is a challenge with
                                                many environmental as well as
                                                government policies affecting
                                                it. Make use of technology to
                                                ease this problem.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single_speaker">
                                        <img
                                            src="/open-sign.png"
                                            style={{
                                                height: "90px",
                                                width: "90px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="speaker-name">
                                            <div className="heading d-flex justify-content-between align-items-center">
                                                <span>Open Innovation</span>
                                            </div>
                                            <p>
                                                Make use of developer tools to
                                                help solve any issue in society.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Sponsors /> */}
                {/* <div className="resister_book resister_bg_1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="resister_text text-center">
                                    <h3>
                                        Specific sponsor track benefits and
                                        prizes!
                                    </h3>
                                    <ul style={{ fontFamily: "Poppins" }}>
                                        <li>
                                            <div
                                                className="p-4 flex flex-col items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://polygon.technology/">
                                                    <img
                                                        className="mb-10"
                                                        src="/Portis_Logo-Colored.png"
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    $200 for best hack built on
                                                    Ethereum + Polygon
                                                    <br />
                                                    $150 for best hack built on
                                                    Ethereum
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <div
                                                className="p-4 flex flex-col  items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://replit.com/">
                                                    <img
                                                        src="/Replit-light-background.png"
                                                        className=" h-20 mb-4 "
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    $50 for winning Project
                                                    deployed on Replit
                                                    <br />
                                                    <br />
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="p-4 flex flex-col  items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://filecoin.io">
                                                    <img
                                                        src="/Filecoin.png"
                                                        className="w-45 h-20 mb-6"
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    $250 for best use of
                                                    Filecoin and/or IPFS
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="p-4 flex flex-col  items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://solana.com/">
                                                    <img
                                                        src="/Solana-Colored.svg"
                                                        className="w-45 h-10 mb-10"
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    $USDC 100 for the best
                                                    project beginners just
                                                    starting out on Solana
                                                </span>
                                                <span className="text-black text-center">
                                                    $USDC 250 for the best
                                                    project that goes into
                                                    depth, demonstrating
                                                    higher-order code
                                                </span>
                                                <span className="text-black text-center">
                                                    $USDC 500 for the best
                                                    advanced project that is
                                                    almost ready for full-time
                                                    development.
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="p-4 flex flex-col  items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://wolfram.com/">
                                                    <img
                                                        src="/digital_ocean.png"
                                                        className="w-45 h-12 md:h-16 mb-10"
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    A total of $2,000 in credits
                                                    to the winning team(s) -
                                                    these can be distributed
                                                    only in sums of $100, $125,
                                                    and $250, per winning team.
                                                </span>
                                                <span className="text-black text-center">
                                                    $50, 30-day free trial for
                                                    all the attendees
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="p-4 flex flex-col  items-center bg-white justify-around rounded shadow md:w-3/5 md:mx-auto"
                                                style={{ marginBottom: "15px" }}
                                            >
                                                <Link href="https://solana.com/">
                                                    <img
                                                        src="/img/wolf.jpg"
                                                        className="w-45 h-20 mb-10"
                                                    />
                                                </Link>
                                                <span className="text-black text-center">
                                                    A year of Wolfram|One
                                                    Personal Edition plus a
                                                    one-year subscription to
                                                    Wolfram|Alpha Pro to all the
                                                    members of top 10 teams
                                                </span>
                                                <span className="text-black text-center">
                                                    The value of each individual
                                                    award is $375.00
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="serction_title_large mb-95">
                                    <h3>Frequently Asked</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div id="accordion">
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingTwo"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Do I need to pay any money
                                                    to register for the
                                                    Hackathon?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                No. You do not have to pay
                                                anything to anyone to register
                                                yourself for any Hackathon on
                                                Devfolio.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingOne"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />
                                                    Do I need to have any
                                                    specific qualifications to
                                                    be a participant for the
                                                    Hackathon?{" "}
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                If you love to code, you are
                                                more than welcome to participate
                                                in the Hackathon.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingThree"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    How do I submit what I have
                                                    made for the Hackathon?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                You have to develop the
                                                application on your local system
                                                and submit it on DevFolio in
                                                tar/zip file format along with
                                                instructions to run the
                                                application and source code.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading_4"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse_4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse_4"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Do we need to have the
                                                    entire idea fully working?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapse_4"
                                            className="collapse"
                                            aria-labelledby="heading_4"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                The entire idea need not be
                                                fully implemented however, the
                                                submission should be functional
                                                so that it can be reviewed by
                                                the judges.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading_5"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse_5"
                                                    aria-expanded="false"
                                                    aria-controls="collapse_5"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Do we need to have the
                                                    entire idea fully working?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapse_5"
                                            className="collapse"
                                            aria-labelledby="heading_5"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                You have to develop the entire
                                                software application on your
                                                local system and submit it on
                                                Devfolio in tar/zip file format
                                                along with instructions to run
                                                the application and source code.
                                                If it is a mobile app, package
                                                it as an apk and send along with
                                                the source code.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading_6"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse_6"
                                                    aria-expanded="false"
                                                    aria-controls="collapse_6"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Does one have to be online
                                                    and available for the entire
                                                    duration of the Hackathon?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapse_6"
                                            className="collapse"
                                            aria-labelledby="heading_6"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                No, one does not need to be
                                                logged in on DevFolio or be
                                                online for the entire duration.
                                                You can develop the application
                                                on your local system based on
                                                the given themes and then submit
                                                it on DevFolio, on the specific
                                                challenge page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading_7"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse_7"
                                                    aria-expanded="false"
                                                    aria-controls="collapse_7"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Since there is no specific
                                                    technology mentioned, are
                                                    there any restrictions on
                                                    using number of pre-built
                                                    libraries?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapse_7"
                                            className="collapse"
                                            aria-labelledby="heading_7"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                There is no restriction to use
                                                any language, technology stack,
                                                or libraries. You can use any of
                                                them to create the web/mobile
                                                application.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading_8"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse_8"
                                                    aria-expanded="false"
                                                    aria-controls="collapse_8"
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <img
                                                        src="img/barnd/info.png"
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                            float: "left",
                                                        }}
                                                        alt
                                                    />{" "}
                                                    Do I need to give a demo for
                                                    the product that I have
                                                    built?
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapse_8"
                                            className="collapse"
                                            aria-labelledby="heading_8"
                                            data-parent="#accordion"
                                            style={{}}
                                        >
                                            <div className="card-body">
                                                If you want you can submit a
                                                small presentation or video that
                                                demos your submission, however
                                                it's not mandatory, and only
                                                good to have. In case you are
                                                one of the winners, you might be
                                                invited to demo your application
                                                at a physical event, details of
                                                which will be shared with
                                                sufficient advance notice.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
        </>
    );
}
