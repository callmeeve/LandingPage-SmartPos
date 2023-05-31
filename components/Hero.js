import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative py-[50px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="px-3">
                            <h1 className="mb-3 text-4xl font-bold leading-tight text-blue-800 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                Sederhanakan Penjualan dan Tingkatkan Bisnis Anda dengan Sistem Titik Penjualan Cerdas Kami
                            </h1>
                            <p className="mb-8 max-w-[480px] text-normal text-black">
                                Sistem Point of Sale (POS) canggih kami dirancang untuk merampingkan transaksi, meningkatkan interaksi pelanggan, dan memaksimalkan profitabilitas.
                            </p>
                            <div className="flex flex-wrap items-center">
                                <Link href="/login" className="inline-flex items-center justify-center rounded-lg font-medium bg-blue-800 py-4 px-6 text-center text-base text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                                    Mulai Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12" />
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <Image src="/pos.jpg" alt="hero" className="max-w-full lg:ml-auto rounded" width={500} height={500} />
                                <span className="absolute -left-8 -bottom-8 z-[-1]">
                                    <svg width={93} height={93} viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
