import {useForm} from '../context/FormContext.jsx';


function ThankYou() {
  const {state} = useForm()
  console.log(state)
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-[311px] mt-[calc(50vh/8)] mb-auto py-6 px-5 bg-white rounded-3xl shadow-[0_0_1px_rgba(0,0,0,0.1)] text-center">
        {/* Верхний логотип */}
        <svg width="65" height="65" viewBox="0 0 43 42" fill="none" className="mx-auto mb-4">
          <path d="M13.7915 39.7924L21.3988 24.5757C21.408 24.5566 21.4224 24.5406 21.4403 24.5294C21.4582 24.5182 21.4789 24.5122 21.5 24.5122C21.5211 24.5122 21.5418 24.5182 21.5598 24.5294C21.5777 24.5406 21.592 24.5566 21.6013 24.5757L29.2085 39.7924C29.258 39.8914 29.15 39.9949 29.051 39.9409L21.5563 35.6569C21.5392 35.647 21.5198 35.6418 21.5 35.6418C21.4803 35.6418 21.4609 35.647 21.4438 35.6569L13.9468 39.9409C13.85 39.9972 13.742 39.8937 13.7893 39.7924H13.7915Z" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
          <path d="M40.625 35.625L31.625 1.875M2.375 35.625L11.375 1.875M21.5 17.625V13.125M21.5 6.375V1.875" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
        </svg>

        <h2 className="text-[20px] font-medium font-poppins mb-2">
          The payment was successful!
        </h2>

        <p className="text-gray-500 text-sm mb-6" style={{
          fontSize: '13px'
        }}>
          We will send you a payment confirmation by email within 3-5 minutes.
        </p>

        {/* Нижний логотип */}
        <svg width="24" height="24" viewBox="0 0 43 42" fill="none" className="mx-auto mb-2">
          <path d="M13.7915 39.7924L21.3988 24.5757C21.408 24.5566 21.4224 24.5406 21.4403 24.5294C21.4582 24.5182 21.4789 24.5122 21.5 24.5122C21.5211 24.5122 21.5418 24.5182 21.5598 24.5294C21.5777 24.5406 21.592 24.5566 21.6013 24.5757L29.2085 39.7924C29.258 39.8914 29.15 39.9949 29.051 39.9409L21.5563 35.6569C21.5392 35.647 21.5198 35.6418 21.5 35.6418C21.4803 35.6418 21.4609 35.647 21.4438 35.6569L13.9468 39.9409C13.85 39.9972 13.742 39.8937 13.7893 39.7924H13.7915Z" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
          <path d="M40.625 35.625L31.625 1.875M2.375 35.625L11.375 1.875M21.5 17.625V13.125M21.5 6.375V1.875" stroke="#E31E24" strokeWidth="3" strokeLinecap="round"/>
        </svg>

        <h3 className="text-[#E31E24] text-xl font-bold font-poppins mb-4">
          AUSTRIA E-VIGNETTE
        </h3>

        <p style={{
          marginTop: '32px',
          marginBottom: '32px'
        }} className="text-gray-500 text-sm mb-6">
          You don't need to do anything else. After receiving confirmation, you can safely drive on toll roads in Austria.<br />
          Have a nice trip!
        </p>

        <button
          style={{
            height: '48px'
          }}
          className="w-full p-3 bg-[#25D366] text-white rounded-xl font-poppins flex items-center justify-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13_2253)">
              <path
                d="M0.601185 11.8563C0.600627 13.8728 1.12751 15.8417 2.12937 17.5771L0.505371 23.5066L6.57346 21.9156C8.25183 22.8292 10.1323 23.308 12.0432 23.3081H12.0483C18.3566 23.3081 23.4918 18.1748 23.4945 11.8653C23.4957 8.80792 22.3061 5.93295 20.1448 3.76997C17.9839 1.60718 15.1099 0.415458 12.0478 0.414062C5.73867 0.414062 0.603883 5.54709 0.601278 11.8563"
                fill="url(#paint0_linear_13_2253)"/>
              <path
                d="M0.192552 11.8527C0.191901 13.9417 0.737669 15.981 1.77525 17.7786L0.0930176 23.9207L6.37869 22.2726C8.1106 23.2168 10.0606 23.7147 12.0447 23.7154H12.0499C18.5846 23.7154 23.9042 18.3975 23.907 11.8621C23.9081 8.69488 22.6757 5.71656 20.4372 3.47609C18.1984 1.23591 15.2217 0.00130233 12.0499 0C5.51404 0 0.195157 5.31721 0.192552 11.8527ZM3.9359 17.469L3.7012 17.0965C2.7146 15.5277 2.19385 13.7149 2.1946 11.8534C2.19665 6.4213 6.61748 2.00186 12.0536 2.00186C14.6861 2.00298 17.1602 3.02921 19.021 4.89116C20.8818 6.7533 21.9057 9.22865 21.905 11.8614C21.9026 17.2935 17.4817 21.7135 12.0499 21.7135H12.0459C10.2773 21.7126 8.54269 21.2376 7.02995 20.34L6.66995 20.1265L2.9399 21.1045L3.9359 17.469Z"
                fill="url(#paint1_linear_13_2253)"/>
              <path
                d="M9.0863 6.89771C8.86434 6.4044 8.63076 6.39445 8.41969 6.3858C8.24686 6.37836 8.04927 6.37892 7.85188 6.37892C7.6543 6.37892 7.33327 6.45324 7.06193 6.74952C6.7903 7.04608 6.0249 7.76273 6.0249 9.22031C6.0249 10.6779 7.08658 12.0866 7.23458 12.2845C7.38276 12.482 9.28416 15.5689 12.2955 16.7564C14.7982 17.7433 15.3075 17.547 15.8507 17.4975C16.3939 17.4482 17.6036 16.7811 17.8504 16.0892C18.0974 15.3975 18.0974 14.8046 18.0233 14.6807C17.9493 14.5572 17.7517 14.4831 17.4554 14.335C17.1591 14.1869 15.7025 13.4701 15.4309 13.3712C15.1593 13.2724 14.9618 13.2231 14.7643 13.5198C14.5667 13.8159 13.9993 14.4831 13.8264 14.6807C13.6536 14.8787 13.4807 14.9034 13.1845 14.7552C12.8881 14.6065 11.9339 14.2941 10.8019 13.2849C9.92118 12.4996 9.32658 11.5298 9.15374 11.2331C8.9809 10.937 9.13523 10.7764 9.28379 10.6288C9.4169 10.496 9.58016 10.2828 9.72844 10.1099C9.87616 9.93687 9.92546 9.81343 10.0243 9.61585C10.1231 9.41808 10.0736 9.24506 9.99969 9.09687C9.92546 8.94868 9.34974 7.48347 9.0863 6.89771Z"
                fill="white"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_13_2253" x1="1149.96" y1="2309.67" x2="1149.96" y2="0.414062"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#1FAF38"/>
                <stop offset="1" stop-color="#60D669"/>
              </linearGradient>
              <linearGradient id="paint1_linear_13_2253" x1="1190.79" y1="2392.07" x2="1190.79" y2="0"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#F9F9F9"/>
                <stop offset="1" stop-color="white"/>
              </linearGradient>
              <clipPath id="clip0_13_2253">
                <rect width="23.814" height="24" fill="white" transform="translate(0.0930176)"/>
              </clipPath>
            </defs>
          </svg>
          WhatsApp support
        </button>
      </div>
    </div>
  );
}

export default ThankYou;