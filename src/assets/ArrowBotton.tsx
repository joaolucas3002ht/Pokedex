import { ClassNameProps } from "../interfaces/ClassNameProps";

export const ArrowBotton = ({ className: CN = ''}: ClassNameProps) => {
   return (
      <>
         <svg

            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={CN}
         >
            <g clipPath="url(#clip0_573_10)">
               <path
                  d="M9.01733 11.1082L8.76483 10.8557C8.59747 10.6883 8.32611 10.6883 8.15872 10.8557L5.17857 13.8531L5.17857 0.428572C5.17857 0.191893 4.98667 0 4.75 0L4.39285 0C4.15617 0 3.96428 0.191893 3.96428 0.428572L3.96428 13.8531L0.984128 10.8557C0.81677 10.6883 0.545412 10.6883 0.378019 10.8557L0.125518 11.1082C-0.0418394 11.2756 -0.0418394 11.5469 0.125518 11.7143L4.26839 15.8745C4.43574 16.0418 4.7071 16.0418 4.8745 15.8745L9.01736 11.7143C9.18472 11.5469 9.18472 11.2756 9.01733 11.1082Z"
                  fill="currentColor" />
            </g>
            <defs>
               <clipPath id="clip0_573_10">
                  <rect width="9" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      </>
   );
}
