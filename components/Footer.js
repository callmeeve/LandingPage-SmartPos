import Link from 'next/link'
import React from 'react'
import { UilWhatsapp, UilInstagram, UilFacebook } from '@iconscout/react-unicons'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-800 sm:text-center font-medium">© 2023 <Link href="https://blambangandev.com/" className="hover:underline hover:text-blue-800">BlambanganDev™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="https://wa.me/6282234039524?text=Hai%20BlambanganDev%2C%20saya%20butuh%20bantuan%20untuk%20usaha%20saya." className="text-gray-800 hover:text-blue-800">
              <UilWhatsapp className="w-5 h-5" />
              <span className="sr-only">Whatsapp page</span>
            </Link>
            <Link href="https://www.instagram.com/blambangandev/" className="text-gray-800 hover:text-blue-800">
              <UilInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link href="https://www.facebook.com/BlambanganDev" className="text-gray-800 hover:text-blue-800">
              <UilFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>




  )
}
