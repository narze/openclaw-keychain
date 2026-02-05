'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const SHOPEE_LINK = 'https://s.shopee.co.th/AUoJKbhKQv'

  const handleRedirect = () => {
    window.open(SHOPEE_LINK, '_blank')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square relative bg-gradient-to-br from-orange-100 to-orange-200">
          <Image
            src="/keychain.jpg"
            alt="OpenClaw Keychain - พวงกุญแจสุดเก๋"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            OpenClaw Keychain
          </h1>
          <p className="text-gray-600 mb-4">
            พวงกุญแจสุดเก๋ คอมพิวเตอร์พี่เลี้ยงของคุณ
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>วัสดุคุณภาพสูง</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>ดีไซน์เก๋ไก๋</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>พร้อมส่งทั่วประเทศ</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleRedirect}
            className="w-full bg-shopee hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            ซื้อเลยที่ Shopee 🛒
          </button>

          <p className="text-center text-gray-500 text-xs mt-4">
            คลิกเพื่อไปยังหน้าสินค้าใน Shopee
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Powered by OpenClaw 💜</p>
      </footer>
    </main>
  )
}
