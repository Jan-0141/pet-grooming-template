# Pet Grooming Template

เว็บตัวอย่าง HTML + CSS + JavaScript แบบ config-driven สำหรับร้าน Grooming

## โครงสร้าง

- `index.html` โครงหน้าหลัก
- `css/base.css` layout/component กลาง
- `css/themes/` theme แยกสี
- `js/config.js` เลือก theme และเปิด/ปิด section
- `js/data.js` ข้อมูลร้าน บริการ รีวิว รูป
- `js/app.js` render หน้าเว็บจากข้อมูล

## ติดตั้ง

```bash
npm install
```

## รันแบบ development

```bash
npm run dev
```

หรือ

```bash
npm start
```

จากนั้นเปิด

```text
http://localhost:5500
```

## รันโดยไม่ใช้ npm

ถ้ามี Python:

```bash
python3 -m http.server 5500
```

แล้วเปิด `http://localhost:5500`

## เปลี่ยน Theme

แก้ `js/config.js`

```js
const siteConfig = {
  theme: "blue"
};
```

Theme ที่มี:
- peach
- blue
- pink

## เพิ่ม Theme ใหม่

สร้างไฟล์ เช่น

```text
css/themes/theme-green.css
```

แล้วกำหนด CSS variables จากนั้นเปลี่ยน `theme: "green"`

## เพิ่มบริการ

แก้ `js/data.js` ใน `services`

```js
{
  icon: "🦷",
  title: "Teeth Cleaning",
  description: "ทำความสะอาดช่องปาก",
  price: "เริ่มต้น ฿250"
}
```

## เพิ่มรูป Gallery

1. วางรูปไว้ใน `images/gallery/`
2. เพิ่ม path ใน `websiteData.gallery`

```js
"images/gallery/new-photo.jpg"
```

## ปิด Section

แก้ `js/config.js`

```js
features: {
  promotion: false,
  reviews: false
}
```

## เคลียร์ไฟล์ generated/cache

macOS/Linux:

```bash
npm run clean
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules, .cache, .parcel-cache, dist -ErrorAction SilentlyContinue
```

แล้วติดตั้งใหม่:

```bash
npm install
```

## เคลียร์ npm cache

ปกติไม่จำเป็น แต่ถ้า npm มีปัญหา:

```bash
npm cache verify
```

ถ้าจำเป็นจริง ๆ:

```bash
npm cache clean --force
```
