import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      {/* Блок с картинкой */}
      <div className="relative rounded-2xl overflow-hidden w-full mb-4 aspect-[4/5] sm:aspect-[4/5] sm:mb-6">
        <img 
            src="/images/austria_mnt.png"
            alt="Mountain road in Austria" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E31E24]/40" />
        
        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8">
  {/* Обновленный SVG логотип */}
  <div className="mb-2">
    <svg width="38.25" height="38.08" viewBox="0 0 43 42" fill="none" className="mx-auto">
      <path d="M13.7915 39.7924L21.3988 24.5757C21.408 24.5566 21.4224 24.5406 21.4403 24.5294C21.4582 24.5182 21.4789 24.5122 21.5 24.5122C21.5211 24.5122 21.5418 24.5182 21.5598 24.5294C21.5777 24.5406 21.592 24.5566 21.6013 24.5757L29.2085 39.7924C29.258 39.8914 29.15 39.9949 29.051 39.9409L21.5563 35.6569C21.5392 35.647 21.5198 35.6418 21.5 35.6418C21.4803 35.6418 21.4609 35.647 21.4438 35.6569L13.9468 39.9409C13.85 39.9972 13.742 39.8937 13.7893 39.7924H13.7915Z" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40.625 35.625L31.625 1.875M2.375 35.625L11.375 1.875M21.5 17.625V13.125M21.5 6.375V1.875" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  </div>
  {/* Текст */}
  <h1 className="text-white text-[32px] sm:text-[45px] leading-[36px] sm:leading-[44px] font-[900] tracking-wide text-center font-poppins">
    AUSTRIA<br />E-VIGNETTE
  </h1>
</div>
      </div>

{/* Блок с ценой */}
<div className="w-full space-y-1 sm:space-y-2 mb-6 sm:mb-8">
  <div className="flex items-center gap-2">
    <svg width="23.28" height="23.97" viewBox="0 0 20 20" fill="none" className="text-[#E31E24]">
      <path d="M19.388 0.404962C19.33 0.260474 19.2185 0.143915 19.0767 0.0795341C18.935 0.0151529 18.7738 0.00790636 18.6269 0.0593019C18.4799 0.110697 18.3584 0.216778 18.2876 0.355475C18.2169 0.494172 18.2023 0.654807 18.247 0.803962C19.176 3.47396 17.332 5.46796 15.926 6.53596L15.358 5.72196C15.167 5.44896 14.74 5.22196 14.408 5.21796L11.22 5.23196C10.8305 5.24363 10.4515 5.36042 10.123 5.56996L0.729002 12.157C0.510497 12.3107 0.361821 12.5448 0.315527 12.8079C0.269234 13.0711 0.329094 13.3419 0.482002 13.561L4.751 19.669C5.071 20.124 5.582 20.069 6.038 19.751L15.432 13.163C15.702 12.972 16.014 12.56 16.124 12.245L17.122 9.09996C17.232 8.78596 17.165 8.30696 16.974 8.03396L16.628 7.53796C18.516 6.09096 20.476 3.53396 19.388 0.404962ZM15.017 9.76296C14.6673 10.0071 14.2351 10.1025 13.8151 10.0283C13.3951 9.95402 13.0218 9.71618 12.777 9.36696C12.5319 9.01662 12.4359 8.58335 12.5099 8.16226C12.584 7.74117 12.8221 7.36667 13.172 7.12096C13.4465 6.9292 13.7739 6.82779 14.1087 6.83084C14.4435 6.83388 14.7691 6.94124 15.04 7.13796C14.768 7.30196 14.581 7.39796 14.546 7.41296C14.422 7.47207 14.3218 7.57152 14.2618 7.69504C14.2018 7.81855 14.1855 7.95879 14.2155 8.09278C14.2456 8.22677 14.3204 8.34657 14.4275 8.43254C14.5346 8.51851 14.6677 8.56555 14.805 8.56596C14.8917 8.56596 14.9773 8.5463 15.062 8.50696C15.2567 8.41563 15.463 8.30563 15.681 8.17696C15.7303 8.477 15.6942 8.78485 15.5768 9.06532C15.4594 9.34579 15.2654 9.58755 15.017 9.76296Z" fill="currentColor"/>
    </svg>
    <span className="text-black text-[22px] sm:text-[26px] leading-[26px] sm:leading-[30px] font-semibold font-poppins text-left">
      from 23€
    </span>
  </div>
  <div className="flex items-center gap-2">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#E31E24]">
      <path d="M15 1.33989C16.5083 2.21075 17.7629 3.46042 18.6398 4.96519C19.5167 6.46997 19.9854 8.17766 19.9994 9.91923C20.0135 11.6608 19.5725 13.3758 18.72 14.8946C17.8676 16.4133 16.6332 17.6831 15.1392 18.5782C13.6452 19.4733 11.9434 19.9627 10.2021 19.998C8.46083 20.0332 6.74055 19.6131 5.21155 18.7791C3.68256 17.9452 2.39787 16.7264 1.48467 15.2434C0.571462 13.7604 0.0614093 12.0646 0.00500011 10.3239L0 9.99989L0.00500011 9.67589C0.0610032 7.94888 0.563548 6.26585 1.46364 4.79089C2.36373 3.31592 3.63065 2.09934 5.14089 1.25977C6.65113 0.420205 8.35315 -0.0137108 10.081 0.000330246C11.8089 0.0143713 13.5036 0.47589 15 1.33989ZM10 3.99989C9.75507 3.99992 9.51866 4.08985 9.33563 4.25261C9.15259 4.41537 9.03566 4.63964 9.007 4.88289L9 4.99989V9.99989L9.009 10.1309C9.0318 10.3044 9.09973 10.4689 9.206 10.6079L9.293 10.7079L12.293 13.7079L12.387 13.7899C12.5624 13.926 12.778 13.9998 13 13.9998C13.222 13.9998 13.4376 13.926 13.613 13.7899L13.707 13.7069L13.79 13.6129C13.9261 13.4375 13.9999 13.2219 13.9999 12.9999C13.9999 12.7779 13.9261 12.5623 13.79 12.3869L13.707 12.2929L11 9.58489V4.99989L10.993 4.88289C10.9643 4.63964 10.8474 4.41537 10.6644 4.25261C10.4813 4.08985 10.2449 3.99992 10 3.99989Z" fill="currentColor"/>
    </svg>
    <span className="text-black text-[22px] sm:text-[26px] leading-[26px] sm:leading-[30px] font-semibold font-poppins text-left">
      valid instantly
    </span>
  </div>
</div>

{/* Кнопка */}
<div className="w-full flex justify-center"> {/* Добавляем обертку */}
<button
  onClick={() => navigate('/vehicle')}
  className="relative w-full sm:w-[311px] h-[40px] sm:h-[48px] bg-[#E31E24] text-white rounded-xl font-poppins text-[14px] font-medium leading-[28px] px-4 sm:px-6 py-[6px] flex items-center hover:bg-[#cc1a1f] transition-colors"
>
  <span className="flex-grow text-center">Buy online</span>
  <img 
    src="/icons/ios-arrow.svg" 
    alt="arrow" 
    className="absolute right-6 w-[6.13px] h-[11.67px] "
  />
</button>
</div>

      {/* Текст о приватности */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-auto pt-6 sm:pt-8 max-w-[280px] font-poppins">
        Your privacy is important to us. We are committed to protecting your personal information and ensuring that it is used responsibly.
      </p>
    </div>
  );
}

export default HomePage;