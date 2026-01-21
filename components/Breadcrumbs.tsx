'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ className = "" }: { className?: string }) {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);
    const baseUrl = 'https://himalayadiscovery.com';

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            ...pathNames.map((link, index) => {
                const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": link.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
                    "item": `${baseUrl}${href}`
                }
            })
        ]
    };

    if (pathNames.length === 0) return null;

    return (
        <div className={className}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav className="flex items-center flex-wrap gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-mono">
                <Link href="/" className="hover:text-[var(--gold-accent)] transition-colors flex items-center gap-1">
                    <Home size={12} /> HOME
                </Link>
                {pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathNames.length - 1;
                    const displayName = link.replace(/-/g, ' ');

                    return (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight size={10} className="text-white/20" />
                            {isLast ? (
                                <span className="text-[var(--gold-accent)]">{displayName}</span>
                            ) : (
                                <Link href={href} className="hover:text-white transition-colors">
                                    {displayName}
                                </Link>
                            )}
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}
