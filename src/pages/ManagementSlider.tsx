// import React from "react";
// import {
//   Home,
//   Layers,
//   Map,
//   FileText,
//   HelpCircle,
//   Settings,
//   Image,
//   FilePlus,
//   Edit3,
//   Trash2,
// } from "lucide-react";

// const ManagementSlider = () => {
//   return (
//     <div className="min-h-screen flex bg-gray-100 text-gray-800">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex items-center gap-2">
//           <div className="w-6 h-6 bg-green-600 rounded"></div>
//           <span className="font-semibold text-lg text-gray-800">
//             GIS Bengkulu
//           </span>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 text-sm">
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
//             <Home className="w-4 h-4" /> Dashboard
//           </button>
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
//             <Layers className="w-4 h-4" /> Data Infrastruktur
//           </button>
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
//             <Map className="w-4 h-4" /> Peta & Layer
//           </button>
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg bg-green-50 text-green-700 font-medium">
//             <Image className="w-4 h-4" /> Manajemen Slider
//           </button>
//         </nav>

//         <div className="border-t border-gray-200 p-4 space-y-2">
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
//             <HelpCircle className="w-4 h-4" /> Bantuan
//           </button>
//           <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
//             <Settings className="w-4 h-4" /> Pengaturan
//           </button>

//           <div className="flex items-center gap-3 mt-4 p-2 bg-gray-50 rounded-lg">
//             <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//             <div>
//               <p className="text-sm font-medium text-gray-800">Admin GIS</p>
//               <p className="text-xs text-gray-500">Administrator</p>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-semibold text-gray-800">
//             Manajemen Slider Beranda
//           </h1>
//           <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-2">
//             <FilePlus className="w-4 h-4" /> Tambah Slider
//           </button>
//         </div>

//         <section className="grid grid-cols-3 gap-6">
//           {/* Slider Preview */}
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="bg-white border rounded-xl overflow-hidden shadow-sm"
//             >
//               <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
//                 (Gambar Slider {item})
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-800">
//                   Judul Slider {item}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3">
//                   Deskripsi singkat untuk slider nomor {item}.
//                 </p>
//                 <div className="flex justify-end gap-2">
//                   <button className="text-blue-600 hover:text-blue-800">
//                     <Edit3 className="w-4 h-4" />
//                   </button>
//                   <button className="text-red-600 hover:text-red-800">
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ManagementSlider;
