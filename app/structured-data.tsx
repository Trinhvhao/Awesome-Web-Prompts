export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Promptverse",
        "description": "Thư viện giao diện và prompt thiết kế AI",
        "url": "https://promptverse.com",
        "author": {
            "@type": "Person",
            "name": "Trịnh Văn Hào"
        },
        "publisher": {
            "@type": "Person",
            "name": "Trịnh Văn Hào"
        },
        "inLanguage": ["vi-VN", "en-US"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://promptverse.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Promptverse",
        "url": "https://promptverse.com",
        "logo": "https://promptverse.com/og-image.png",
        "description": "Thư viện AI Design Prompts cho v0, Bolt, Cursor, Claude",
        "founder": {
            "@type": "Person",
            "name": "Trịnh Văn Hào"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
        </>
    );
}
