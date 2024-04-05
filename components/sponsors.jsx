import React from "react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="serction_title_large mb-3 md:mb-4">
              <h3>Sponsors</h3>
            </div>
            {/* <div  class="flex justify-center align-middle text-xl md:text-3xl mb-2 font-bold">To be released soon!!</div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="md:w-4/5 pt-2 md:pt-6 md:pb-4 flex md:flex-row flex-col items-center md:justify-around"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <div className="p-3 mb-10">
            <Link href="https://devfolio.co/">
              <img
                alt="DEVFOLIO LOGO"
                src="/Devfolio.png"
                className="h-10 md:h-24"
              />
            </Link>
          </div>
          <div className="p-1 mb-10">
            <Link href="https://polygon.technology/">
              <img
                alt="POLYGON LOGO"
                src="/Polygon.png"
                className="h-10 md:h-24"
              />
            </Link>
          </div>
          <div className="p-1 mb-10">
            <Link href="https://ethindia.co/">
              <img
                alt="ETHINDIA LOGO"
                src="/ETHIndia.png"
                className="h-10 md:h-24"
              />
            </Link>
          </div>

          {/* <div className="p-1 mb-10">
                    <Link href="https://replit.com/">
                        <img
                            src="/Replit-light-background.png"
                            className="h-12 md:h-18"
                        />
                    </Link>
                </div>
                <div className="p-1 mb-10">
                    <Link href="https://wolframlanguage.org/">
                        <img src="/wolf.jpg" className="h-14" />
                    </Link>
                </div>
                <div className="p-1 mb-10">
                    <Link href="https://solana.com/">
                        <img src="/Solana-Colored.svg" className="h-7 md:h-8" />
                    </Link>
                </div>
            </div>
            <div
                className="w-full flex md:flex-row flex-col items-center md:justify-around "
                style={{ marginBottom: "80px" }}
            >
                <div className="p-1 flex gap-12 items-center flex-col md:flex-row">
                    <Link href="https://filecoin.io">
                        <img src="/Filecoin.png" className="h-12 md:h-20" />
                    </Link>
                    <Link href="https://digitalocean.com">
                        <img
                            src="/digital_ocean.png"
                            className="h-10 md:h-14"
                        />
                    </Link>
                </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
