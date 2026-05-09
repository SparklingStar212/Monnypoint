import React from 'react'
import BlueButton from './components/BlueButton'
import './App.css'


const App = () => {
  return (
    <>
      <div className='w-full h-16 bg-slate-950 items-center justify-center gap-8 hidden md:flex'>
        <p className='text-white font-[Inter var] text-sm'>This website uses cookies to enhance your experience. Learn more here:</p>
        <div className='flex gap-5'>
          <a href="" className='text-white font-semibold no-underline hover:underline'>Privacy Policy</a>
          <a href="" className='text-white font-semibold no-underline hover:underline'>Cookie Policy</a>
        </div>
      </div>

      <div className='flex items-center w-full h-15 md:h-18 lg:h-20 lg:hidden text-white'>
        <div className='flex items-center justify-center bg-[#00146b] w-full h-full'>Business</div>
        <div className='flex items-center justify-center w-full h-full bg-[#020c3b]'>Personal</div>
      </div>

      <div className='bg-[#020c3b] h-22 w-full justify-between flex items-center px-7'>
        <div className='flex gap-4'>
          <img src="https://moniepoint.com/logo-mfb-white.png" alt="" className='w-32' />
          <button className='bg-sky-900 text-white font-semibold py-2 px-4 rounded-4xl hidden lg:block'>Business</button>
          <button className='text-white hidden lg:block'>Personal</button>
        </div>

        <div className='gap-7 items-center hidden lg:flex'>
          <div className='flex gap-10'>
            <a href="" className='text-white flex items-center gap-1'>Products
              <svg size="18" color="#063059" width="16" height="17" viewBox="0 0 16 17" fill="white" xmlns="http://www.w3.org/2000/svg" className='size-5'>
                <path d="M13.5306 7.03073L8.5306 12.0307C8.46092 12.1007 8.37813 12.1561 8.28696 12.194C8.1958 12.2318 8.09806 12.2513 7.99935 12.2513C7.90064 12.2513 7.8029 12.2318 7.71173 12.194C7.62057 12.1561 7.53778 12.1007 7.4681 12.0307L2.4681 7.03073C2.3272 6.88984 2.24805 6.69874 2.24805 6.49948C2.24805 6.30023 2.3272 6.10913 2.4681 5.96823C2.60899 5.82734 2.80009 5.74818 2.99935 5.74818C3.19861 5.74818 3.3897 5.82734 3.5306 5.96823L7.99997 10.4376L12.4693 5.96761C12.6102 5.82671 12.8013 5.74756 13.0006 5.74756C13.1999 5.74756 13.391 5.82671 13.5318 5.96761C13.6727 6.10851 13.7519 6.2996 13.7519 6.49886C13.7519 6.69812 13.6727 6.88921 13.5318 7.03011L13.5306 7.03073Z" fill="#ffff"></path>
              </svg>
            </a>
            <a href="" className='text-white flex items-center gap-1'>Company
              <svg size="18" color="#063059" width="16" height="17" viewBox="0 0 16 17" fill="white" xmlns="http://www.w3.org/2000/svg" className='size-5'>
                <path d="M13.5306 7.03073L8.5306 12.0307C8.46092 12.1007 8.37813 12.1561 8.28696 12.194C8.1958 12.2318 8.09806 12.2513 7.99935 12.2513C7.90064 12.2513 7.8029 12.2318 7.71173 12.194C7.62057 12.1561 7.53778 12.1007 7.4681 12.0307L2.4681 7.03073C2.3272 6.88984 2.24805 6.69874 2.24805 6.49948C2.24805 6.30023 2.3272 6.10913 2.4681 5.96823C2.60899 5.82734 2.80009 5.74818 2.99935 5.74818C3.19861 5.74818 3.3897 5.82734 3.5306 5.96823L7.99997 10.4376L12.4693 5.96761C12.6102 5.82671 12.8013 5.74756 13.0006 5.74756C13.1999 5.74756 13.391 5.82671 13.5318 5.96761C13.6727 6.10851 13.7519 6.2996 13.7519 6.49886C13.7519 6.69812 13.6727 6.88921 13.5318 7.03011L13.5306 7.03073Z" fill="#ffff"></path>
              </svg>
            </a>
            <a href="" className='text-white'>About</a>
            <a href="" className='text-white'>Contact</a>
            <a href="" className='text-white'>Blog</a>
          </div>
          <div className='flex gap-5'>
            <button className='bg-blue-300 px-4 py-2 rounded-4xl flex items-center gap-1'>Sign in
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-5'>
                <mask id="mask0_2592_643" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17"><rect y="0.5" width="16" height="16" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_2592_643)"><path d="M10.2655 9.38349H3.23001C2.9846 9.38349 2.77602 9.29761 2.60428 9.12587C2.43255 8.95412 2.34668 8.74555 2.34668 8.50014C2.34668 8.25472 2.43255 8.04615 2.60428 7.8744C2.77602 7.70266 2.9846 7.61679 3.23001 7.61679H10.2655L7.36625 4.71754C7.18895 4.54024 7.10151 4.3313 7.10393 4.09072C7.10634 3.85013 7.1962 3.64119 7.3735 3.4639C7.5508 3.29771 7.75974 3.21341 8.00031 3.21099C8.24089 3.20857 8.44983 3.29602 8.62713 3.47332L13.0271 7.87332C13.1126 7.95883 13.1771 8.05617 13.2206 8.16535C13.2641 8.27453 13.2858 8.38612 13.2858 8.50014C13.2858 8.61415 13.2641 8.72574 13.2206 8.83492C13.1771 8.9441 13.1126 9.04144 13.0271 9.12695L8.61771 13.5364C8.44525 13.7088 8.23909 13.7951 7.99923 13.7951C7.75937 13.7951 7.5508 13.7088 7.3735 13.5364C7.1962 13.3591 7.10755 13.1489 7.10755 12.9059C7.10755 12.6629 7.1962 12.4528 7.3735 12.2755L10.2655 9.38349Z" fill="#092256"></path></g>
              </svg>
            </button>
            <img src="/nig.svg" alt="" className='w-8' />
          </div>
        </div>

        <div className='lg:hidden block'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" fill="#031335"></rect><mask id="mask0_2752_1273" maskUnits="userSpaceOnUse" x="7" y="7" width="20" height="20"><rect x="7" y="7" width="20" height="20" fill="#fff"></rect></mask><g mask="url(#mask0_2752_1273)"><path d="M10.2038 22.5759C9.89701 22.5759 9.63629 22.4686 9.42161 22.2539C9.20694 22.0392 9.09961 21.7785 9.09961 21.4717C9.09961 21.165 9.20694 20.9042 9.42161 20.6896C9.63629 20.4749 9.89701 20.3676 10.2038 20.3676H23.7962C24.103 20.3676 24.3637 20.4749 24.5784 20.6896C24.793 20.9042 24.9004 21.165 24.9004 21.4717C24.9004 21.7785 24.793 22.0392 24.5784 22.2539C24.3637 22.4686 24.103 22.5759 23.7962 22.5759H10.2038ZM10.2038 18.1031C9.89701 18.1031 9.63629 17.9957 9.42161 17.7811C9.20694 17.5664 9.09961 17.3057 9.09961 16.9989C9.09961 16.6921 9.20694 16.4314 9.42161 16.2167C9.63629 16.002 9.89701 15.8947 10.2038 15.8947H23.7962C24.103 15.8947 24.3637 16.002 24.5784 16.2167C24.793 16.4314 24.9004 16.6921 24.9004 16.9989C24.9004 17.3057 24.793 17.5664 24.5784 17.7811C24.3637 17.9957 24.103 18.1031 23.7962 18.1031H10.2038ZM10.2038 13.6302C9.89701 13.6302 9.63629 13.5229 9.42161 13.3082C9.20694 13.0935 9.09961 12.8328 9.09961 12.5261C9.09961 12.2193 9.20694 11.9586 9.42161 11.7439C9.63629 11.5292 9.89701 11.4219 10.2038 11.4219H23.7962C24.103 11.4219 24.3637 11.5292 24.5784 11.7439C24.793 11.9586 24.9004 12.2193 24.9004 12.5261C24.9004 12.8328 24.793 13.0935 24.5784 13.3082C24.3637 13.5229 24.103 13.6302 23.7962 13.6302H10.2038Z" fill="#fff"></path></g><rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="rgba(196, 233, 253, 0.20)"></rect>
          </svg>
        </div>
      </div>

      <main>
        <div className='flex bg-[#020c3b] items-center lg:justify-between justify-center px-10 rounded-b-4xl py-10 relative'>
          <div className='lg:w-full flex lg:block flex-col max-w-11/12 items-center text-center lg:text-start'>
            <div className='bg-sky-900 px-2 py-1 md:px-3 md:py-2 w-fit gap-1 md:gap-2 justify-center text-white text-xs flex items-center rounded-4xl'>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-spin size-7 md:size-9'>
                <mask id="mask0_3843_25355" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="25"><rect x="4" y="4.5" width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_3843_25355)"><path d="M19.35 24.5L17.4 26.425C17.0167 26.8083 16.55 27 16 27C15.45 27 14.9833 26.8083 14.6 26.425L12.65 24.5H10C9.45 24.5 8.97917 24.3042 8.5875 23.9125C8.19583 23.5208 8 23.05 8 22.5V19.85L6.075 17.9C5.69167 17.5167 5.5 17.05 5.5 16.5C5.5 15.95 5.69167 15.4833 6.075 15.1L8 13.15V10.5C8 9.95 8.19583 9.47917 8.5875 9.0875C8.97917 8.69583 9.45 8.5 10 8.5H12.65L14.6 6.575C14.9833 6.19167 15.45 6 16 6C16.55 6 17.0167 6.19167 17.4 6.575L19.35 8.5H22C22.55 8.5 23.0208 8.69583 23.4125 9.0875C23.8042 9.47917 24 9.95 24 10.5V13.15L25.925 15.1C26.3083 15.4833 26.5 15.95 26.5 16.5C26.5 17.05 26.3083 17.5167 25.925 17.9L24 19.85V22.5C24 23.05 23.8042 23.5208 23.4125 23.9125C23.0208 24.3042 22.55 24.5 22 24.5H19.35ZM16 25L18.5 22.5H22V19L24.5 16.5L22 14V10.5H18.5L16 8L13.5 10.5H10V14L7.5 16.5L10 19V22.5H13.5L16 25ZM16 18.975L17.9 20.125C18.0833 20.2417 18.2667 20.2375 18.45 20.1125C18.6333 19.9875 18.7 19.8167 18.65 19.6L18.15 17.425L19.85 15.95C20.0167 15.8 20.0667 15.6208 20 15.4125C19.9333 15.2042 19.7833 15.0917 19.55 15.075L17.325 14.9L16.45 12.85C16.3667 12.65 16.2167 12.55 16 12.55C15.7833 12.55 15.6333 12.65 15.55 12.85L14.675 14.9L12.45 15.075C12.2167 15.0917 12.0667 15.2042 12 15.4125C11.9333 15.6208 11.9833 15.8 12.15 15.95L13.85 17.425L13.35 19.6C13.3 19.8167 13.3667 19.9875 13.55 20.1125C13.7333 20.2375 13.9167 20.2417 14.1 20.125L16 18.975Z" fill="#C4E9FD"></path></g>
              </svg>
              Africa's fastest growing financial Institution 2023-2025
            </div>
            <h1 className='text-white lg:text-5xl/normal md:text-4xl/snug mb-2.5 lg:mb-3.5 text-2xl/normal font-bold '>Simple solutions to <br className='lg:block hidden' /> <span className='text-cyan-200'>power your business</span></h1>
            <p className='text-white lg:text-lg md:text-base sm:text-sm lg:mb-5 mb-3'>Collect payments, access loans and manage operations with a business banking solution that meets all your needs.</p>
            <BlueButton title="Open an account" element={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2367_20458" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_2367_20458)"><path d="M12.8315 11.1063H4.03715C3.73039 11.1063 3.46966 10.999 3.25498 10.7843C3.04032 10.5696 2.93298 10.3089 2.93298 10.0021C2.93298 9.69536 3.04032 9.43464 3.25498 9.21996C3.46966 9.00528 3.73039 8.89794 4.03715 8.89794H12.8315L9.20744 5.27387C8.98582 5.05225 8.87652 4.79107 8.87955 4.49035C8.88256 4.18962 8.99488 3.92844 9.21651 3.70683C9.43813 3.4991 9.6993 3.39371 10 3.39069C10.3007 3.38767 10.5619 3.49698 10.7835 3.7186L16.2835 9.2186C16.3904 9.32549 16.4711 9.44717 16.5254 9.58364C16.5797 9.72012 16.6069 9.85961 16.6069 10.0021C16.6069 10.1446 16.5797 10.2841 16.5254 10.4206C16.4711 10.5571 16.3904 10.6788 16.2835 10.7856L10.7718 16.2974C10.5562 16.513 10.2985 16.6208 9.99867 16.6208C9.69885 16.6208 9.43813 16.513 9.21651 16.2974C8.99488 16.0758 8.88407 15.8131 8.88407 15.5094C8.88407 15.2056 8.99488 14.9429 9.21651 14.7213L12.8315 11.1063Z" fill="white"></path></g></svg>} />
            <p className='text-xs text-white flex items-center my-4 lg:mt-4'>We are licensed by
              <img src="https://lh3.googleusercontent.com/d/1VIlBQqAq-1mOcJ1T6Djis1VqcZWgAJdM=w1000?authuser=0" alt="" className='size-6 mx-1' /> and insured
              <img src="https://lh3.googleusercontent.com/d/1FtA17SsYTq3ZFIl2Y_q2U6ZzLIfeaVvn=w1000?authuser=0" alt="" className='size-6 w-12 mx-1' />
            </p>
          </div>
          <div className='items-center justify-center w-full hidden lg:flex'>
            <img src="https://moniepoint.com/business/hero-sub.png" alt="" />
          </div>

          <div className='absolute bg-white left-8 right-8 -bottom-20 md:-bottom-30 h-30 md:h-40 lg:h-40 rounded-3xl py-6 md:py-8 lg:py-20 px-5 md:px-7 lg:px-20'>
            <div className='lg:flex items-center justify-between'>
              <div className='lg:flex lg:gap-12'>
                <p className='text-[#020c3b] font-bold text-xl mb-3 md:text-3xl lg:max-w-60'>Businesses that Count On Us</p>
                <p className='text-[#020c3b] text-sm lg:text-base lg:font-semibold lg:max-w-65'>Join <span className='text-blue-600 font-semibold lg:font-bold'>5 million</span> business owners on the Moniepoint platform</p>
              </div>
              <div className='hidden lg:block text-9xl font-bold text-white text-shadow-blue-600 text-shadow-md'>
                5m+
              </div>
            </div>

            <div className='w-full flowdiv'>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
              <div className="bg-red-300 card size-40"></div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}


// text - [#020c3b] opacity - 10

export default App