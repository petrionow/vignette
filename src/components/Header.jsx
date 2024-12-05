export default function Header({ progress = 25 }) {
    return (
      <div className="w-full max-w-[311px] mx-auto mt-[70px] flex flex-col px-4">
        <div className="flex flex-col items-center gap-[8px] mb-[16px]">
          <svg width="32" height="32" viewBox="0 0 43 42" fill="none" className="mx-auto">
            <path d="M13.7915 39.7924L21.3988 24.5757C21.408 24.5566 21.4224 24.5406 21.4403 24.5294C21.4582 24.5182 21.4789 24.5122 21.5 24.5122C21.5211 24.5122 21.5418 24.5182 21.5598 24.5294C21.5777 24.5406 21.592 24.5566 21.6013 24.5757L29.2085 39.7924C29.258 39.8914 29.15 39.9949 29.051 39.9409L21.5563 35.6569C21.5392 35.647 21.5198 35.6418 21.5 35.6418C21.4803 35.6418 21.4609 35.647 21.4438 35.6569L13.9468 39.9409C13.85 39.9972 13.742 39.8937 13.7893 39.7924H13.7915Z" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
            <path d="M40.625 35.625L31.625 1.875M2.375 35.625L11.375 1.875M21.5 17.625V13.125M21.5 6.375V1.875" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          
          <h1 className="w-full max-w-[210px] text-[#E31E24] text-[20px] font-bold whitespace-nowrap text-center font-poppins">
            AUSTRIA E-VIGNETTE
          </h1>
        </div>
  
        {/* Прогресс бар */}
        <div className="w-full h-[7px] bg-gray-200 rounded-[40px] overflow-hidden">
          <div 
            className="h-full bg-[#E31E24] rounded-[40px] transition-all duration-300" 
            style={{width: `${progress}%`}}
          ></div>
        </div>
      </div>
    );
  }