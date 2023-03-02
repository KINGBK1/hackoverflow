import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='footer footer_bg_1'>
      <div className='circle_ball d-none d-lg-block'>
        <img src='img/banner/footer_ball.png' alt />
      </div>
      <div className='footer_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-4 col-lg-4'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Follow Us</h3>
                <ul>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.facebook.com/arhn.nitd/'
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/arhn_nitd'>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/arhn.nitd/?hl=en'
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.youtube.com/channel/UCDRVna-w5uai2Vrcp5WgvSg'
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-4 col-lg-4'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Links</h3>
                <ul>
                  <li>
                    <a target='_blank' href='/schedule'>
                      Schedule
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-4 col-lg-4'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Venue</h3>
                <p>
                  Online (Discord, DevFolio) <br /> National Institute of
                  Technology, Durgapur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copy-right_text'>
        <div className='container'>
          <div className='footer_border' />
          <div className='row'>
            <div
              className='col-xl-12'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Link href=''>
                <img
                  src='img/aarohan-logo.png'
                  style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                />
              </Link>
              <p className='copy_right text-center'>
                Aarohan, 2023 | Made with{' '}
                <i className='fa fa-heart-o' aria-hidden='true' /> by{' '}
                <a href='' target='_blank'>
                  Team Aavishkar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
