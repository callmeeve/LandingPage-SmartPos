import { UilShop, UilChart, UilAnalytics} from '@iconscout/react-unicons'

const features = [
  {
    id: 1,
    icon: UilShop,
    title: 'Bebaskan Kekuatan SmartPOS untuk Bisnis Anda',
    description: 'Temukan integrasi tanpa batas, antarmuka intuitif, dan kemampuan pelaporan canggih yang menjadikan SmartPOS pilihan ideal untuk bisnis dari semua ukuran. Tingkatkan situs web Anda dengan SmartPOS hari ini dan revolusikan proses penjualan Anda.',
  },
  {
    id: 2,
    icon: UilChart,
    title: 'Solusi Penjualan All-in-One Anda untuk Sukses',
    description: 'Buka potensi bisnis Anda dengan SmartPOS, solusi Point of Sale (POS) lengkap yang menggabungkan teknologi mutakhir dengan kesederhanaan dan kenyamanan. Ucapkan selamat tinggal pada proses manual dan sapa operasi penjualan yang efisien.',
  },
  {
    id: 3,
    icon: UilAnalytics,
    title: 'Masa Depan Sistem Point of Sale',
    description: 'Rangkul masa depan manajemen penjualan dengan SmartPOS, sistem Point of Sale (POS) cerdas yang dirancang untuk merevolusi cara Anda berbisnis. Hubungkan toko fisik Anda dengan mulus dengan kehadiran online Anda, menawarkan pengalaman berbelanja terpadu untuk pelanggan Anda.',
  },
]

export default function Feature() {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-base font-semibold text-blue-800">
                SOLUSI BISNIS
              </span>
              <h2 className="mb-4 text-5xl lg:text-3xl font-bold text-blue-800">
                Pilihan Tepat Berbagai Jenis Bisnis
              </h2>
              <p className="text-base text-black">
                Terdapat ragam variasi fitur-fitur Point of Sale yang tersedia
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature) => (
            <div key={feature.id} className="w-full px-4 md:w-1/2 lg:w-1/3 m-3 lg:m-0">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-800">
                  <feature.icon className="w-[32px] h-[32px] text-white"/>
                </div>
                <h4 className="mb-3 text-2xl font-semibold text-black">
                  {feature.title}
                </h4>
                <p className="text-black">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    // <div className="bg-gray-400">
    //   <div className="py-2 sm:py-12">
    //     <section className="py-20 mt-10">
    //       <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
    //         <h1 className="text-3xl text-center font-bold text-blue-800">Features</h1>
    //         <p className="text-center text-black mt-4">
    //           Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
    //           your devices so you can access them on the go.
    //         </p>
    //       </div>
    //       {features.map((feature) => (
    //         <div key={feature.id} className="relative mt-20 lg:mt-24">
    //           <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
    //             {/* Image */}
    //             <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 lg:mt-5">
    //               <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4" src={feature.image} width={300} height={300} />
    //             </div>
    //             {/* Content */}
    //             <div className="flex flex-1 flex-col items-center lg:items-start lg:mt-20">
    //               <h1 className="text-3xl lg:text-4xl font-bold text-blue-800">{feature.title}</h1>
    //               <p className="text-black my-4 text-left sm:w-3/4 lg:w-full">
    //                 {feature.description}
    //               </p>
    //             </div>
    //           </div>
    //           {/* Rounded Rectangle */}
    //           <div className="hidden lg:block overflow-hidden bg-yellow-400 rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36 mb-10" />
    //         </div>
    //       ))}
    //     </section>
    //   </div>
    // </div>
  )
}
