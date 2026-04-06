"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type Language = 'vi' | 'en';

export function LanguageSwitcher() {
    const [language, setLanguage] = useState<Language>('vi');
    const [mounted, setMounted] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('language') as Language;
        if (saved) {
            setLanguage(saved);
            document.documentElement.lang = saved;
        }
    }, []);

    const toggleLanguage = () => {
        setIsChanging(true);
        const newLang: Language = language === 'vi' ? 'en' : 'vi';
        localStorage.setItem('language', newLang);
        document.documentElement.lang = newLang;

        // Small delay for smooth transition
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    if (!mounted) {
        return (
            <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 transition-colors text-sm font-medium cursor-not-allowed opacity-50"
                type="button"
                disabled
            >
                <Image src="/vn.svg" alt="Vietnamese" width={20} height={15} className="rounded-sm" />
                <span className="hidden sm:inline text-white/90">VI</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggleLanguage}
            disabled={isChanging}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
        >
            {isChanging ? (
                <>
                    <div className="w-5 h-4 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white/90 rounded-full animate-spin" />
                    </div>
                    <span className="hidden sm:inline text-white/90">...</span>
                </>
            ) : (
                <>
                    {language === 'vi' ? (
                        <Image src="/vn.svg" alt="Vietnamese" width={20} height={15} className="rounded-sm" />
                    ) : (
                        <Image src="/gb.svg" alt="English" width={20} height={15} className="rounded-sm" />
                    )}
                    <span className="hidden sm:inline text-white/90">{language === 'vi' ? 'VI' : 'EN'}</span>
                </>
            )}
        </button>
    );
}

export function useLanguage(): Language {
    const [language, setLanguage] = useState<Language>('vi');

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved) {
            setLanguage(saved);
        }
    }, []);

    return language;
}
