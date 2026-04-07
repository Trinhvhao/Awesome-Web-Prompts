# 🖼️ Test Open Graph Image

## ✅ Đã sửa

1. **Rút gọn mô tả:**
   - Trước: "Thư viện giao diện và prompt thiết kế bởi Trịnh Văn Hào. Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn cho v0, Bolt, Cursor, Claude và nhiều AI tools khác."
   - Sau: "60+ prompt thiết kế chuyên nghiệp cho v0, Bolt, Cursor. Copy, paste và tạo landing page đẹp trong vài phút."

2. **Fix OG Image:**
   - Thêm absolute URL: `https://awesome-web-prompts.vercel.app/og-image.png`
   - Thêm `opengraph-image.png` trong app folder
   - Thêm `twitter-image.png` trong app folder
   - Thêm type: "image/png"

3. **Rút gọn title:**
   - Trước: "Promptverse - Trịnh Văn Hào | AI Design Prompts Library"
   - Sau: "Promptverse - 60+ Prompt Thiết Kế AI"

## 🧪 Cách Test

### 1. Test trên Facebook Debugger
```
https://developers.facebook.com/tools/debug/
```
Nhập URL: `https://awesome-web-prompts.vercel.app`

### 2. Test trên Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```

### 3. Test trên LinkedIn Post Inspector
```
https://www.linkedin.com/post-inspector/
```

### 4. Test local
```bash
npm run build
npm start
```

Sau đó mở: `http://localhost:3000`

View source và tìm:
- `<meta property="og:image"`
- `<meta name="twitter:image"`

## 📋 Checklist

- [x] OG image có absolute URL
- [x] Image size: 1200x630px
- [x] Image format: PNG
- [x] Mô tả rút gọn < 160 ký tự
- [x] Title rút gọn < 60 ký tự
- [x] opengraph-image.png trong app/
- [x] twitter-image.png trong app/
- [x] Build thành công

## 🔍 Expected Result

Khi share link trên Facebook/Zalo/Telegram, sẽ hiển thị:

**Title:** Promptverse - 60+ Prompt Thiết Kế AI

**Description:** Copy, paste và tạo landing page đẹp trong vài phút. Tương thích v0, Bolt, Cursor, Claude.

**Image:** [Datacore Booking Preview]

## 🚨 Lưu ý

- Sau khi deploy lên Vercel, cần clear cache trên Facebook Debugger
- Click "Scrape Again" để Facebook fetch lại metadata mới
- Có thể mất 5-10 phút để cache update
