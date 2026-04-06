export type Language = 'vi' | 'en';

export const translations = {
    vi: {
        // Navigation
        nav: {
            instructions: "Hướng dẫn",
            pricing: "Bảng giá",
            backgrounds: "Nền động",
            unlimitedAccess: "Truy cập không giới hạn",
            backToLibrary: "Quay về thư viện",
        },
        // Hero Section
        hero: {
            designedBy: "Thiết kế bởi",
            unlockPower: "Mở khóa sức mạnh",
            aiDesign: "thiết kế AI",
            breakthrough: "đột phá",
            description: "Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn.",
            descriptionLine2: "Copy, tùy chỉnh và triển khai ngay.",
            viewFullLibrary: "Xem thư viện đầy đủ →",
        },
        // Template Cards
        cards: {
            unlock: "Unlock",
            copy: "Copy",
        },
        // Instructions Page
        instructions: {
            badge: "Hướng dẫn sử dụng",
            title: "Copy, Paste & Tạo giao diện đẹp ngay lập tức",
            description: "Các prompt này sẵn sàng để dùng trong các công cụ AI yêu thích của bạn. Không cần chỉnh sửa gì — chỉ cần copy và paste để tạo landing page production-ready với thiết kế đẹp và animation mượt mà.",
            step1Title: "1. Copy Prompt",
            step1Desc: "Nhấn nút copy trên bất kỳ template nào",
            step2Title: "2. Paste vào Tool",
            step2Desc: "Mở v0, Bolt, Cursor, hoặc bất kỳ AI tool nào",
            step3Title: "3. Generate & Deploy",
            step3Desc: "Nhận code production-ready ngay lập tức",
            supportedTools: "Các công cụ hỗ trợ",
            proTips: "Mẹo hay",
            tip1: "Dùng model mạnh hơn",
            tip1Desc: "Claude Sonnet 3.5, GPT-4, hoặc Gemini Pro cho kết quả tốt hơn với ít lần chỉnh sửa",
            tip2: "Thêm chi tiết thương hiệu",
            tip2Desc: "Bổ sung màu sắc, font chữ và nội dung của bạn để cá nhân hóa output",
            tip3: "Tinh chỉnh từng section",
            tip3Desc: "Chỉnh hero, features, hoặc CTA riêng biệt để kiểm soát chính xác",
            tip4: "Kiểm tra responsive",
            tip4Desc: "Luôn kiểm tra trên mobile và desktop trước khi deploy",
        },
        // Modal
        modal: {
            badge: "Mở khóa prompt premium",
            title: "Liên hệ để mở khóa toàn bộ Promt",
            description: "Mở khoá mẫu này và nhận thêm bộ prompt nâng cao cho Lovable, Google AI Studio, Stitch, Cursor, Copilot, Kiro...",
            templateYouClicked: "Mẫu bạn vừa bấm unlock:",
            contact: "Liên hệ",
            close: "Đóng",
        },
        // Footer
        footer: {
            copyright: "© 2024 Trịnh Văn Hào. All rights reserved.",
        },
        // Promo Card
        promo: {
            subtitle: "Các style và mẫu layout nổi bật",
            cta: "Liên hệ để hợp tác",
        },
    },
    en: {
        // Navigation
        nav: {
            instructions: "Instructions",
            pricing: "Pricing",
            backgrounds: "Backgrounds",
            unlimitedAccess: "Unlimited Access",
            backToLibrary: "Back to Library",
        },
        // Hero Section
        hero: {
            designedBy: "Designed by",
            unlockPower: "Unlock the power of",
            aiDesign: "AI design",
            breakthrough: "breakthrough",
            description: "Build beautiful landing pages in minutes with ready-made prompts.",
            descriptionLine2: "Copy, customize and deploy instantly.",
            viewFullLibrary: "View Full Library →",
        },
        // Template Cards
        cards: {
            unlock: "Unlock",
            copy: "Copy",
        },
        // Instructions Page
        instructions: {
            badge: "How to Use",
            title: "Copy, Paste & Generate Beautiful Designs Instantly",
            description: "These prompts are ready to use in your favorite AI tools. No modifications needed — just copy and paste to generate production-ready landing pages with beautiful designs and smooth animations.",
            step1Title: "1. Copy Prompt",
            step1Desc: "Click the copy button on any template card",
            step2Title: "2. Paste in Tool",
            step2Desc: "Open v0, Bolt, Cursor, or any AI tool",
            step3Title: "3. Generate & Deploy",
            step3Desc: "Get production-ready code instantly",
            supportedTools: "Supported Tools",
            proTips: "Pro Tips",
            tip1: "Use stronger models",
            tip1Desc: "Claude Sonnet 3.5, GPT-4, or Gemini Pro give better results with fewer iterations",
            tip2: "Add your brand details",
            tip2Desc: "Include your colors, fonts, and content for personalized output",
            tip3: "Iterate section by section",
            tip3Desc: "Refine hero, features, or CTA separately for precise control",
            tip4: "Test responsive design",
            tip4Desc: "Always check mobile and desktop views before deploying",
        },
        // Modal
        modal: {
            badge: "Unlock Premium Prompts",
            title: "Contact to Unlock All Prompts",
            description: "Unlock this template and get advanced prompts for Lovable, Google AI Studio, Stitch, Cursor, Copilot, Kiro...",
            templateYouClicked: "Template you clicked unlock:",
            contact: "Contact",
            close: "Close",
        },
        // Footer
        footer: {
            copyright: "© 2024 Trinh Van Hao. All rights reserved.",
        },
        // Promo Card
        promo: {
            subtitle: "Featured styles and layout templates",
            cta: "Contact for Collaboration",
        },
    },
};

export function getTranslation(lang: Language) {
    return translations[lang] || translations.vi;
}
