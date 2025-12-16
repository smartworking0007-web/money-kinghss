// // components/SecondNavbar.tsx

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// // import { Typography } from "@/components/ui/Typography";
// import { Typography } from "../ui/Typography";

// const categories = [
//   { name: "Digital Marketing",      icon: "/images/Commercial.svg", href: "/courses/digital-marketing" },
//   { name: "Artificial Intelligence", icon: "/images/Bot.svg",         href: "/courses/ai" },
//   { name: "Python",                 icon: "/images/Python.svg",       href: "/courses/python" },
//   { name: "UX/UI Design",           icon: "/images/Windows 10 Personalization.svg", href: "/courses/design" },
//   { name: "Data Science",           icon: "/images/Big Data.svg",     href: "/courses/data-science" },
// ];

// export default function SecondNavbar() {
//   return (
//     <>
//       <div className="border-b border-gray-200 bg-white">
//         <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-0">
//           <nav className="flex h-24 items-center justify-center">

//             {/* Desktop - Kept exactly as you had, just using Typography */}
//             <div className="hidden md:flex justify-center">
//               <div className="flex h-[54px] w-[659px] items-end justify-between">
//                 {categories.map((item) => (
//                   <Link key={item.name} href={item.href} className="group flex h-full flex-col items-center gap-2">
//                     <div className="flex h-10 w-[102px] items-center justify-center p-3">
//                       <Image
//                         src={item.icon}
//                         alt={item.name}
//                         width={30}
//                         height={30}
//                         className="object-contain"
//                       />
//                     </div>
//                     <Typography
//                       variant="nav-link"
//                       as="span"
//                       className="text-gray-700 group-hover:text-blue-600"
//                     >
//                       {item.name}
//                     </Typography>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile - Enhanced + using Typography */}
//             <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
//               <div 
//                 className="flex gap-8 px-5 py-6 min-w-max"
//                 style={{ scrollSnapType: "x mandatory" }}
//               >
//                 {categories.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="flex flex-col items-center gap-3 flex-shrink-0 scroll-snap-align-center group"
//                   >
//                     <div className="flex h-16 w-20 items-center justify-center  p-4 ">
//                       <Image
//                         src={item.icon}
//                         alt={item.name}
//                         width={56}
//                         height={56}
//                         className="object-contain"
//                       />
//                     </div>

//                     <Typography
//                       variant="nav-link"
//                       as="span"
//                       className="text-sm whitespace-nowrap text-gray-700 group-hover:text-blue-600 transition-colors"
//                     >
//                       {item.name}
//                     </Typography>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//           </nav>
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </>
//   );
// }