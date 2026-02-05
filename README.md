# Shopee Redirect - OpenClaw Keychain

เว็บไซต์ง่ายๆ สำหรับ redirect ไปยังหน้าสินค้า Shopee ของพวงกุญแจ OpenClaw

## ติดตั้งและรัน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## อัปโหลดขึ้น Vercel

### วิธีที่ 1: ผ่าน Git

1. Push โค้ดไป GitHub
2. ไปที่ vercel.com → Import Project
3. เลือก repo นี้ → Deploy

### วิธีที่ 2: ผ่าน Vercel CLI

```bash
npm install -g vercel
vercel
```

## เปลี่ยน Link Shopee

แก้ไขไฟล์ `app/page.tsx`:

```typescript
const SHOPEE_LINK = 'https://shopee.co.th/YOUR-PRODUCT-LINK-HERE'
```

## เปลี่ยนรูปสินค้า

แก้ไขไฟล์ `app/page.tsx` ในส่วน `Product Image Placeholder`:

แทนที่ `div` placeholder ด้วย `Image` component จาก `next/image`:

```tsx
<Image
  src="/path/to/your/image.jpg"
  alt="OpenClaw Keychain"
  width={500}
  height={500}
  className="w-full h-full object-cover"
/>
```

วางไฟล์รูปใน `public/` folder

## Features

- ✅ Responsive design
- ✅ Tailwind CSS สวยงาม
- ✅ Placeholder รูปสินค้า
- ✅ ปุ่ม redirect ไป Shopee
- ✅ ง่ายต่อการ custom
