import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="bg-white">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            className="h-8 w-auto"
                            src="/logo.png"
                            alt=""
                            width={300}
                            height={300}
                        />
                    </a>
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/login" className="text-sm font-semibold leading-6 text-gray-800 hover:text-blue-800 mx-2">
                        Masuk &rarr;
                    </Link>
                    <Link href="/register" className="text-sm font-semibold leading-6 text-gray-800 hover:text-blue-800 mx-2">
                        Daftar &rarr;
                    </Link>
                </div>
            </nav>
        </div>
    )
}
