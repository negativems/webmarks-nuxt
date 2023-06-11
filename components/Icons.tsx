import { useTheme } from "~/store/themeStore";

export const GoogleIcon = () => (
   <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" class="icon">
      <path d="M17.9167 8.0392L17.8134 7.62359H9.2733V11.3759H14.3813C14.0963 12.521 13.4483 13.534 12.5409 14.253C11.6337 14.972 10.5194 15.3555 9.37661 15.342C7.8853 15.3293 6.45247 14.7406 5.35907 13.6915C4.82158 13.1435 4.39387 12.4911 4.10038 11.7718C3.80691 11.0526 3.65344 10.2805 3.64876 9.49977C3.66611 7.93174 4.26622 6.43073 5.32465 5.30809C6.4026 4.25168 7.83434 3.66857 9.31921 3.68127C10.5909 3.6914 11.8154 4.18118 12.7628 5.05872L15.2881 2.37508C13.6237 0.83894 11.4694 -0.00685917 9.23886 0.000170556C8.0118 -0.00736977 6.7954 0.235179 5.65898 0.713984C4.52258 1.19278 3.48845 1.89844 2.61569 2.79068C0.95552 4.57457 0.0195285 6.94891 0.000301786 9.42508C-0.0189135 11.9013 0.880117 14.2908 2.51238 16.102C3.41671 17.034 4.49155 17.7704 5.67407 18.2678C6.85658 18.7653 8.12302 19.014 9.39956 18.9994C10.5571 19.0083 11.7044 18.774 12.7719 18.3107C13.8393 17.8473 14.8046 17.1647 15.6095 16.3039C17.1889 14.5074 18.0432 12.1534 17.9971 9.72539C18.0095 9.16206 17.9826 8.59861 17.9167 8.0392Z" fill="white" />
   </svg>
);

export const GithubIcon = ({ color = 'black' }: any) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
         d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
         fill={color}
      />
   </svg>
);

export const Logo = ({ color = 'white' }: any) => (
   <svg viewBox="0 0 59 110" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5.9C0 2.64152 2.64152 0 5.9 0H53.1C56.3585 0 59 2.64152 59 5.9V20.06C59 20.06 41.3812 28 29.5 28C17.6188 28 0 20.06 0 20.06V5.9Z" fill="#3AE000" />
      <path d="M0 28.3199C0 28.3199 17.1799 39.5 29.5 39.5C41.8201 39.5 59 28.3199 59 28.3199V89.645C59 98.595 59 103.07 56.0876 104.78C53.1751 106.49 49.2671 104.31 41.4512 99.9499L40.9976 99.6969C35.3784 96.5621 32.5688 94.9947 29.5 94.9947C26.4312 94.9947 23.6216 96.5621 18.0024 99.6969L17.5488 99.9499C9.73287 104.31 5.82489 106.49 2.91244 104.78C0 103.07 0 98.595 0 89.645V28.3199Z" fill="#3AE000" />
      <path d="M0 22.42C0 22.42 17.6053 30.5 29.5 30.5C41.3947 30.5 59 22.42 59 22.42V25.96C59 25.96 41.8008 37 29.5 37C17.1992 37 0 25.96 0 25.96V22.42Z" fill={color} />
   </svg>
);

export const LogginIcon = () => (
   <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      <polyline points="10 17 15 12 10 7"></polyline>
      <line x1="15" y1="12" x2="3" y2="12"></line>
   </svg>
);

export const BuyMeACoffeIcon = ({ color = 'black' }: any) => (
   <svg xmlns="http://www.w3.org/2000/svg">
      <path fill="#FD0" d="M16.41 20.357c-1.597.678-3.407 1.446-5.752 1.446a10.97 10.97 0 0 1-2.904-.397l1.622 16.538c.057.691.375 1.336.889 1.806s1.188.731 1.887.73c0 0 2.3.119 3.067.119.826 0 3.304-.12 3.304-.12.699 0 1.372-.26 1.886-.73.514-.47.83-1.114.888-1.805l1.737-18.274c-.777-.262-1.56-.437-2.444-.437-1.528-.001-2.759.52-4.18 1.125v-.001Z" />
      <path fill={useTheme().isDarkMode ? 'white' : 'black'} d="m30.54 11.782-.245-1.223c-.22-1.098-.716-2.134-1.852-2.532-.363-.126-.777-.18-1.056-.444-.278-.262-.36-.671-.426-1.05-.119-.693-.231-1.388-.353-2.082-.106-.595-.19-1.265-.466-1.813-.358-.733-1.101-1.162-1.841-1.446-.379-.14-.765-.26-1.158-.356C21.295.352 19.352.173 17.45.072a48.138 48.138 0 0 0-6.845.113c-1.694.154-3.479.338-5.09.92-.588.213-1.194.469-1.641.92-.55.554-.728 1.412-.328 2.103.285.491.768.839 1.28 1.067.667.296 1.364.521 2.077.672 1.99.437 4.05.608 6.083.681 2.253.09 4.51.017 6.75-.219.555-.06 1.11-.133 1.661-.218.65-.1 1.069-.943.877-1.531-.23-.704-.846-.978-1.544-.87l-.307.045-.074.01c-.723.092-1.449.162-2.176.212a49.685 49.685 0 0 1-6.54.012 41.538 41.538 0 0 1-2.142-.198l-.212-.025-.046-.007-.22-.032a23.255 23.255 0 0 1-1.339-.236.201.201 0 0 1-.161-.196.198.198 0 0 1 .161-.195h.009c.513-.109 1.03-.199 1.55-.27h.003c.242-.017.487-.06.73-.088a46.569 46.569 0 0 1 6.337-.222c1.247.034 2.493.123 3.733.266l.252.032.169.023c.496.074.987.162 1.476.268.726.155 1.658.207 1.98.996.103.25.15.527.207.79l.07.335.006.02.513 2.372a.434.434 0 0 1-.368.52h-.005l-.104.014-.103.013c-.973.126-1.949.228-2.926.309-1.946.161-3.898.24-5.85.234a69.106 69.106 0 0 1-8.692-.558l-.237-.032-.537-.077c-.601-.09-1.2-.2-1.8-.296-.726-.12-1.42-.06-2.077.296A3.008 3.008 0 0 0 .76 9.33c-.284.583-.368 1.215-.495 1.839-.125.625-.324 1.298-.248 1.939.16 1.383 1.134 2.507 2.536 2.759a73.964 73.964 0 0 0 20.986.69.9.9 0 0 1 .943.584c.045.125.06.259.047.39l-.132 1.28-1.883 18.197c-.077.752-.087 1.529-.231 2.272-.227 1.17-1.025 1.887-2.189 2.15a15.302 15.302 0 0 1-3.248.377c-1.213.007-2.424-.046-3.636-.04-1.295.007-2.88-.111-3.878-1.067-.878-.84-.999-2.154-1.12-3.291-.159-1.506-.317-3.01-.472-4.515l-.878-8.368-.57-5.413-.026-.268c-.069-.646-.53-1.278-1.256-1.245-.622.026-1.327.552-1.254 1.245l.42 4.014.873 8.301.742 7.077c.048.451.092.905.142 1.356.273 2.47 2.174 3.801 4.526 4.176 1.374.219 2.782.264 4.176.287 1.787.028 3.593.097 5.351-.225 2.605-.474 4.56-2.201 4.84-4.88l.238-2.321.794-7.676.864-8.362.396-3.832a.886.886 0 0 1 .722-.783c.744-.144 1.457-.39 1.986-.952.844-.896 1.012-2.065.714-3.243Zm-28.026.827c.011-.005-.01.091-.018.136-.003-.068 0-.128.018-.136Zm.072.555c.005-.004.024.02.043.048-.028-.026-.045-.045-.043-.048Zm.072.093c.038.07.025.044 0 0Zm.142.116h.004c0 .003.006.007.009.012a.089.089 0 0 0-.013-.012Zm25.003-.173c-.268.254-.67.37-1.07.43-4.468.658-9.002.99-13.52.843-3.232-.11-6.431-.465-9.633-.914-.314-.044-.653-.102-.868-.33-.407-.434-.207-1.305-.102-1.829.097-.478.282-1.118.856-1.185.896-.104 1.937.27 2.823.404a53.88 53.88 0 0 0 3.215.388c4.59.415 9.256.35 13.824-.257a57.89 57.89 0 0 0 2.49-.386c.737-.131 1.554-.378 1.998.38.306.515.346 1.205.298 1.789a.995.995 0 0 1-.31.669V13.2Z" />
   </svg>
);

export const FooterCurveIcon = () => (
   <svg
      class="mx-auto bg-white dark:bg-black"
      width="1920"
      height="100"
   >
      <path fill="none" d="M0 0h1920v100H0z" />
      <path
         fill="#77FF47"
         d="M968.5 59.088C588.405 59.51 0 0 0 0v100h1920V.5s-578.2 58.173-951.5 58.588Z"
      />
      <path
         fill="#255116"
         d="M1920 100V.5s-582.1 76.65-960 76.65S0 0 0 0v100h1920Z"
      />
   </svg>
);

export const CrossIcon = ({ color = 'red' }: any) => (
   <svg class="inline w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path fill={color} d="m18.8 16 5.5-5.5c.8-.8.8-2 0-2.8-.3-.4-.8-.7-1.3-.7s-1 .2-1.4.6L16 13.2l-5.5-5.5c-.8-.8-2.1-.8-2.8 0-.4.3-.7.8-.7 1.4s.2 1 .6 1.4l5.5 5.5-5.5 5.5c-.3.4-.6.9-.6 1.5 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5 5.5 5.5c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L18.8 16z" />
   </svg>
);

export const CheckIcon = ({ color = 'green' }: any) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17.837 17.837">
      <path fill={color} d="M16.145 2.571a.7.7 0 0 0-.99 0L6.92 10.804l-4.241-4.27a.698.698 0 0 0-.989 0L.204 8.019a.703.703 0 0 0 0 .99l6.217 6.258a.704.704 0 0 0 .99 0L17.63 5.047a.7.7 0 0 0 0-.994l-1.485-1.482z" />
   </svg>
);

export const ListBulletIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
   </svg>
);

export const NumberedSquare = ({ number = 0, className = '' }: any) => (
   <div class={'flex items-center justify-center w-6 h-6 rounded-full border-black border-[1px] p-2' + (className ? ' ' + className : '')}>
      <span class="text-gray-500">{number}</span>
   </div>
);

export const SearchIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23">
      <path fill="#9DA0B8" fill-rule="evenodd" d="M8.944 2.556a6.389 6.389 0 1 0 0 12.777 6.389 6.389 0 0 0 0-12.777ZM0 8.944a8.944 8.944 0 1 1 16.108 5.357l6.518 6.518a1.278 1.278 0 0 1-1.807 1.807L14.3 16.108A8.944 8.944 0 0 1 0 8.944Z" clip-rule="evenodd" />
   </svg>
);

export const BookmarkIcon = () => (
   <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={useTheme().isDarkMode ? 'white' : 'black'} d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1 2 1v-7h2v12z" />
   </svg>
);

export const StarIcon = ({ color = useTheme().isDarkMode ? 'white' : 'black', fill = "none", title = '' }: any) => (
   <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      {title && <title>{title}</title>}
      <path color={color} fill={fill} stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
   </svg>
);

export const ClockIcon = () => (
   <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path color={useTheme().isDarkMode ? 'white' : 'black'} fill="none" stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>
);

export const LogoutIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
            fill="currentColor"
         />
         <path
            d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
            fill="currentColor"
         />
      </svg>
);

export const ListIcon = () => (
   <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
   </svg>
);

export const GridIcon = () => (
   <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
   </svg>
);

export const SettingsIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear icon">
      <path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z" />
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
   </svg>
);

export const PencilIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M4.333 16.048 16.57 3.81a2.56 2.56 0 0 1 3.62 3.619L7.951 19.667a2 2 0 0 1-1.022.547L3 21l.786-3.93a2 2 0 0 1 .547-1.022zM14.5 6.5l3 3" />
   </svg>
);

export const TrashIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
      <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z" />
      <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z" />
      <path d="M2 6h20" />
      <path d="M10 11v5" />
      <path d="M14 11v5" />
   </svg>
);

export const InfoIcon = ({fill = '#ffcc14', title = ""}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={fill} stroke-width="2" >
      {title && <title>{title}</title>}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5zM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2z" />
   </svg>
);

export const FilterIcon = ({ color = "currentColor", title = ""}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
      {title && <title>{title}</title>}
      <ellipse cx="12" cy="5" rx="9" ry="2" />
      <path d="M3 5c0 2.23 3.871 6.674 5.856 8.805A4.197 4.197 0 0 1 10 16.657V19a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-2.343c0-1.061.421-2.075 1.144-2.852C17.13 11.674 21 7.231 21 5" />
   </svg>
);