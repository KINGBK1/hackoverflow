import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">
            <style jsx>{`
                @keyframes glowPulse {
                    0%, 100% {
                        box-shadow: 0 0 10px rgba(0, 255, 255, 0.6),
                                    0 0 20px rgba(0, 255, 255, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 25px rgba(0, 255, 255, 1),
                                    0 0 40px rgba(0, 255, 255, 0.7);
                    }
                }

                @keyframes textGlow {
                    0%, 100% {
                        text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
                    }
                    50% {
                        text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
                    }
                }

                .navbar {
                    position: sticky;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.8rem 2rem;
                    background: rgba(2, 6, 17, 0.85);
                    border-bottom: 1.5px solid rgba(0, 255, 255, 0.4);
                    backdrop-filter: blur(10px);
                    animation: glowPulse 3s ease-in-out infinite;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    text-decoration: none;
                }

                .logo img {
                    height: 48px;
                    width: 48px;
                    border-radius: 50%;
                    border: 2px solid #00ffff;
                    animation: glowPulse 2s ease-in-out infinite;
                    transition: transform 0.3s ease;
                }

                .logo img:hover {
                    transform: scale(1.1) rotate(5deg);
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }

                .nav-links a {
                    color: #b0c4de;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-links a::before {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #00ffff, #ff00ff);
                    transition: width 0.3s ease;
                    border-radius: 2px;
                }

                .nav-links a:hover {
                    color: #00ffff;
                    animation: textGlow 1.5s ease-in-out infinite;
                    transform: translateY(-2px);
                }

                .nav-links a:hover::before {
                    width: 100%;
                }

                .nav-links a.active {
                    color: #00ffff;
                    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
                }

                /* Hamburger */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    cursor: pointer;
                }

                .hamburger div {
                    width: 25px;
                    height: 3px;
                    background: #00ffff;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                /* Mobile menu */
                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 70px;
                    right: 2rem;
                    background: rgba(2, 6, 17, 0.95);
                    border: 1px solid rgba(0, 255, 255, 0.4);
                    padding: 1rem;
                    border-radius: 8px;
                    backdrop-filter: blur(10px);
                    animation: glowPulse 3s ease-in-out infinite;
                }

                .mobile-menu a {
                    margin: 0.5rem 0;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .hamburger {
                        display: flex;
                    }

                    .mobile-menu {
                        display: ${isOpen ? "flex" : "none"};
                    }
                }
            `}</style>

            <a href="/" className="logo">
                <img src="/img/IMG-20240307-WA0009.jpg" alt="HackOverflow Logo" />
                <span style={{ color: "#00ffff", fontWeight: "700", fontSize: "1.3rem" }}>
                    HackOverflow
                </span>
            </a>

            {/* Desktop Links */}
            <ul className="nav-links">
                <li>
                    <a href="/" className="active">Home</a>
                </li>
                <li>
                    <a href="/schedule">Schedule</a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://discord.com/invite/v9j8kd2Vz7"
                    >
                        Discord
                    </a>
                </li>
            </ul>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <a href="/" className="active" onClick={() => setIsOpen(false)}>Home</a>
                <a href="/schedule" onClick={() => setIsOpen(false)}>Schedule</a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.com/invite/v9j8kd2Vz7"
                    onClick={() => setIsOpen(false)}
                >
                    Discord
                </a>
            </div>
        </header>
    );
}
