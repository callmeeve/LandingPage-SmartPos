import React from 'react'
import Link from 'next/link'

export default function Testimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="/logo.png" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            BlambanganDev tercipta untuk solusi digital bisnis anda <br />
                            Motto kami adalah : “Memudahkan Pekerjaan Anda“
                        </p>
                    </blockquote>
                    <div className="flex items-center justify-center my-5">
                        <Link href="https://wa.me/6282234039524?text=Hai%20BlambanganDev%2C%20saya%20butuh%20bantuan%20untuk%20usaha%20saya." className="inline-flex items-center rounded-lg font-medium bg-blue-800 py-2 px-6 text-center text-base text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                           Chat Sekarang
                        </Link>
                    </div>
                </figure>
            </div>
        </section>
    )
}
