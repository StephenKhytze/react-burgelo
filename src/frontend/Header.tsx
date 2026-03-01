import React from 'react'
import Frame1 from "../assets/Frame-1.png"
import Frame2 from "../assets/Frame-2.png"
import Frame3 from "../assets/Frame-3.png"
import Frame4 from "../assets/Frame-4.png"
import Frame5 from "../assets/Frame-5.png"
import Frame6 from "../assets/Frame-6.png"

const Header = () => {
  return (
    <header className="header bg-white shadow-md fixed w-full top-0 left-0 p-4.5 z-9999" id="header">
      <div className="container">
        <div className="header__wrapper flex items-center justify-between max-w-full
                        md:flex-col md:max-w-full">
          
          <div className="branding text-dark md:max-w-full md:flex md:flex-row md:justify-between md:items-center md:w-full
                          lg:pb-4">
            <h3 className="transition-all ease-in-out duration-350">
              <i className="fa-solid fa-phone"></i>+1 (800) 312-2121
            </h3>

            <img 
              className="w-38 md:w-50 lg:w-40 lg:translate-x-10" 
              src="/logo-df.svg" 
              alt="Logo" 
            />

            <h3>
              <i className="fa-solid fa-location-dot"></i>
              172 14th Street, Office 503, NY
            </h3>
          </div>

          <div className="burgir bg-primary p-[0.6rem] rounded-lg flex flex-col justify-center gap-1.5 max-h-max cursor-pointer md:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="header__nav">
            <ul className="flex flex-col items-center text-center h-full pt-32 gap-10 max-w-full
                          md:flex-row md:justify-center md:pt-0
                          lg:gap-6">
              
              <li>
                <a href="#" className="home__menu__btn">
                  HOME
                  <div className="arrows hidden h-max md:inline">
                    <i className="fa-solid fa-angle-down arrow-down text-xs"></i>
                  </div>
                </a>

                <section className="home__menu hidden z-999 fixed top-28 left-1/2 -translate-x-1/2 bg-white w-332 py-8 shadow-md">
                  <div className="container home__menu__wrapper flex flex-col gap-8">
                    
                    <div className="items flex flex-wrap justify-center gap-8">
                      <img src={Frame1} alt="" />
                      <img src={Frame2} alt="" />
                      <img src={Frame3} alt="" />
                      <img src={Frame4} alt="" />
                      <img src={Frame5} alt="" />
                      <img src={Frame6} alt="" />
                    </div>

                    <div className="pop__promos grid grid-cols-2 w-full px-4 gap-8">
                      
                      <div className="pop__promos__item bg-primary flex items-center justify-center">
                        <div className="promo__text text-white">
                          <h3 className="text-3xl tracking-[6px] font-normal leading-10">
                            SPECIAL OFFER
                          </h3>
                          <h1 className="text-5xl font-[450] leading-10">
                            BUY 2 GET 3
                          </h1>
                        </div>

                        <img src="/coffee.png" alt="" />

                        <div className="btn__container">
                          <a href="#" className="btn bg-[#333333]">
                            ORDER NOW
                          </a>
                        </div>
                      </div>

                      <div className="pop__promos__item bg-[#333333] flex items-center justify-center gap-4">
                        <div className="promo__text text-white">
                          <h1 className="text-5xl font-[450] leading-10 tracking-[8px]">
                            GET 25% OFF
                          </h1>
                          <h3 className="text-3xl tracking-[11.5px] font-normal leading-10">
                            ON YOUR ORDER
                          </h3>
                        </div>

                        <div className="btn__container">
                          <a href="#" className="btn bg-primary">
                            ORDER NOW
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              </li>

              <li><a href="./menu.html">MENU</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">UPDATES</a></li>
              <li><a href="#">CONTACTS</a></li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header