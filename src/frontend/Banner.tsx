import React from 'react'

const Banner = () => {
  return (
    <section className="banner -mt-18 text-white w-screen max-w-full md:pt-26.5 lg:pt-35" id="banner">
      <div className="container">
        <div className="banner__wrapper bg-[url(/banner.webp)] bg-cover bg-center bg-no-repeat max-w-[95%] mx-auto h-[70vh] pt-14 pl-2
                    md:mx-auto md:bg-size-[80rem] md:pt-40 md:h-200 md:pl-12
                    lg:max-w-full lg:bg-cover lg:h-175 lg:pt-28 lg:pl-34">          
          <img className="w-72 md:w-80 lg:w-76" src="/banner-food.svg" alt="" />
          <div className="banner__text max-w-80 pl-2
                      md:max-w-max md:translate-x-18 md:-translate-y-14 md:flex md:flex-col md:gap-4
                      lg:translate-x-19">
            <h2 className="text-5xl font-[450] tracking-[0.5rem]
                      md:text-6xl md:tracking-[0.75rem]
                      lg:text-[4rem]">DELIVERY</h2>
            <p className="font-[Segoe_UI] mb-6 md:max-w-72">
              We’re proud to have our burger’s history being as long as 25 years!
            </p>
            <a href="javascript:void(0);" className="btn bg--primary font-[Segoe_UI] font-bold bg-primary px-8 py-3.5 rounded-full tracking-[4px] text-xs transition-all ease-in-out duration-350 md:max-w-max">ORDER NOW</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner