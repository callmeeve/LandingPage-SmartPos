import Footer from '@/components/Footer'
import { BuildingStorefrontIcon, ChartBarIcon, ChartPieIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const features = [
    {
        name: 'Bebaskan Kekuatan SmartPOS untuk Bisnis Anda',
        description:
            'Temukan integrasi tanpa batas, antarmuka intuitif, dan kemampuan pelaporan canggih yang menjadikan SmartPOS pilihan ideal untuk bisnis dari semua ukuran. Tingkatkan situs web Anda dengan SmartPOS hari ini dan revolusikan proses penjualan Anda.',
        icon: BuildingStorefrontIcon,
    },
    {
        name: 'Solusi Penjualan All-in-One Anda untuk Sukses',
        description: 'Buka potensi bisnis Anda dengan SmartPOS, solusi Point of Sale (POS) lengkap yang menggabungkan teknologi mutakhir dengan kesederhanaan dan kenyamanan. Ucapkan selamat tinggal pada proses manual dan sapa operasi penjualan yang efisien.',
        icon: ChartBarIcon,
    },
    {
        name: 'Masa Depan Sistem Point of Sale',
        description: 'Rangkul masa depan manajemen penjualan dengan SmartPOS, sistem Point of Sale (POS) cerdas yang dirancang untuk merevolusi cara Anda berbisnis. Hubungkan toko fisik Anda dengan mulus dengan kehadiran online Anda, menawarkan pengalaman berbelanja terpadu untuk pelanggan Anda.',
        icon: ChartPieIcon,
    },
]

export default function Download() {
    return (
        <>
            <div className="overflow-hidden bg-white py-24 sm:py-32 flex min-h-screen">
                <div className="mx-auto max-w-7xl px-6 lg:px-0">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-0">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-blue-800">SOLUSI BISNIS</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">Pilihan Tepat Berbagai Jenis Bisnis</p>
                                <p className="mt-6 text-lg leading-8 text-gray-800">
                                    Terdapat ragam variasi fitur-fitur Point of Sale yang tersedia
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-800 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-800" aria-hidden="true" />
                                                {feature.name}
                                            </dt><br/>
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <div className="flex flex-wrap items-center mt-[40px] ml-8">
                                    <Link href="/" className="items-center justify-center rounded-lg font-medium bg-blue-800 py-4 px-6 text-center text-base text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                                        Download Aplikasi Sekarang
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/app.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={1000}
                            height={900}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
