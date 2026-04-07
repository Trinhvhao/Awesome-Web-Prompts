import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hướng dẫn sử dụng",
    description: "Hướng dẫn sử dụng Promptverse - Copy prompt và paste vào AI tools như v0, Bolt, Cursor, Claude để tạo landing page đẹp trong vài phút",
    openGraph: {
        title: "Hướng dẫn sử dụng Promptverse",
        description: "Copy prompt và paste vào AI tools để tạo landing page đẹp",
        images: ["/og-image.png"],
    },
    twitter: {
        title: "Hướng dẫn sử dụng Promptverse",
        description: "Copy prompt và paste vào AI tools để tạo landing page đẹp",
        images: ["/og-image.png"],
    },
};

export default function InstructionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
