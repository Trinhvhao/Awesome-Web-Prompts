# 🎯 SEO Setup Guide

## ✅ Đã hoàn thành

### 1. Open Graph & Social Media
- ✅ Open Graph image: `/public/og-image.png` (1200x630px)
- ✅ Twitter Card: summary_large_image
- ✅ Facebook sharing: Có hình ảnh đi kèm
- ✅ Metadata đầy đủ cho tất cả pages

### 2. Structured Data (JSON-LD)
- ✅ WebSite schema
- ✅ Organization schema
- ✅ SearchAction schema
- ✅ Author/Publisher information

### 3. SEO Files
- ✅ `sitemap.xml` - Auto-generated
- ✅ `robots.txt` - Auto-generated
- ✅ Canonical URLs
- ✅ Language alternates (vi-VN, en-US)

### 4. Meta Tags
- ✅ Title templates
- ✅ Description
- ✅ Keywords
- ✅ Author & Creator
- ✅ Viewport & Theme color
- ✅ Format detection

### 5. Performance
- ✅ Font optimization
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Cache headers

## 🔧 Cấu hình

### Environment Variables
Tạo file `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Thay đổi domain
Cập nhật trong các file:
1. `app/layout.tsx` - metadataBase
2. `app/sitemap.ts` - baseUrl
3. `app/robots.ts` - baseUrl
4. `app/structured-data.tsx` - URLs

## 📊 Test SEO

### 1. Open Graph Testing
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

### 2. Structured Data Testing
- Google: https://search.google.com/test/rich-results
- Schema.org: https://validator.schema.org/

### 3. SEO Audit
```bash
# Lighthouse
npx lighthouse http://localhost:3000 --view

# Check sitemap
curl http://localhost:3000/sitemap.xml

# Check robots
curl http://localhost:3000/robots.txt
```

## 🚀 Khi share link

### Facebook/Messenger
Khi share link, sẽ hiển thị:
- ✅ Tiêu đề: "Promptverse - AI Design Prompts Library"
- ✅ Mô tả: "Xây dựng landing page đẹp trong vài phút..."
- ✅ Hình ảnh: Logo Trịnh Văn Hào

### Twitter
- ✅ Large image card
- ✅ Tiêu đề và mô tả
- ✅ Hình ảnh preview

### LinkedIn/Zalo/Telegram
- ✅ Tự động lấy Open Graph data
- ✅ Hiển thị hình ảnh và mô tả

## 📝 Tùy chỉnh OG Image

### Option 1: Thay thế file hiện tại
```bash
# Thay thế public/og-image.png
# Kích thước khuyến nghị: 1200x630px
```

### Option 2: Tạo dynamic OG image
Sử dụng Next.js Image Generation API:
```typescript
// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ /* custom design */ }}>
        Promptverse
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

## 🎯 SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Alt text cho images
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading time
- [x] HTTPS (khi deploy)
- [ ] Google Search Console verification
- [ ] Google Analytics (optional)
- [ ] Bing Webmaster Tools (optional)

## 📈 Next Steps

1. **Deploy lên production**
2. **Cập nhật NEXT_PUBLIC_SITE_URL** với domain thật
3. **Submit sitemap** lên Google Search Console
4. **Test sharing** trên Facebook/Twitter
5. **Monitor** với Google Analytics

## 🔗 Useful Links

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
