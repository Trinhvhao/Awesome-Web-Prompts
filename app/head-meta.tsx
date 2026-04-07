export default function HeadMeta() {
    return (
        <>
            {/* Zalo specific meta tags */}
            <meta property="zalo:image" content="https://awesome-web-prompts.vercel.app/og-image.png" />
            <meta property="zalo:title" content="Promptverse - 60+ Prompt Thiết Kế AI" />
            <meta property="zalo:description" content="Copy, paste và tạo landing page đẹp trong vài phút" />

            {/* Additional OG tags for better compatibility */}
            <meta property="og:image:secure_url" content="https://awesome-web-prompts.vercel.app/og-image.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Link preview for messaging apps */}
            <link rel="image_src" href="https://awesome-web-prompts.vercel.app/og-image.png" />
        </>
    );
}
