import React from "react";
import { Map, Users, Building, Clipboard } from "lucide-react";
import HomeLayout from "../../layouts/HomeLayout";

const servicesData = [
  //   {
  //     icon: <Building size={36} className="text-blue-600" />,
  //     title: "Perencanaan Tata Ruang",
  //     description:
  //       "Layanan informasi dan konsultasi terkait perencanaan tata ruang Kota Bengkulu, termasuk zoning, pembangunan, dan pengelolaan lahan.",
  //   },
  //   {
  //     icon: <Map size={36} className="text-blue-600" />,
  //     title: "Peta & GIS Kota",
  //     description:
  //       "Akses peta interaktif dan data geografis (GIS) untuk berbagai keperluan publik dan pemerintah.",
  //   },
  //   {
  //     icon: <Users size={36} className="text-blue-600" />,
  //     title: "Konsultasi Masyarakat",
  //     description:
  //       "Fasilitas pengaduan, saran, dan konsultasi langsung untuk warga terkait tata ruang dan pembangunan.",
  //   },
];

const Services = () => {
  return (
    <HomeLayout>
      <div className="bg-blue-50 pt-20 pb-10">
        {/* Hero Section */}
        {/* <div className="max-w-5xl mx-auto px-6 text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Layanan Publik Kota Bengkulu
          </h1>
          <p className="text-blue-700 mt-3 md:text-lg">
            Akses informasi, layanan, dan konsultasi resmi terkait tata ruang
            dan pembangunan kota.
          </p>
        </div> */}

        {/* Grid Layanan */}
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-blue-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="max-w-5xl mx-auto text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Butuh Bantuan atau Konsultasi?
          </h2>
          <p className="text-blue-700 mt-2 mb-6">
            Tim kami siap membantu Anda terkait informasi tata ruang dan
            pembangunan kota.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Hubungi Kami
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Services;
