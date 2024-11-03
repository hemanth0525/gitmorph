import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <Image
                        src="/icon.png"
                        alt="GitMorph Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-2xl font-bold">GitMorph</span>
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-6">
                    <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
                    <Link href="/docs" className="hover:text-green-500 transition-colors">Docs</Link>
                    <Link href="https://github.com/hemanth0525/gitmorph-cli" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center space-x-1">
                        <Github className="w-5 h-5" />
                        <span>CLI</span>
                    </Link>
                    <Link href="https://github.com/hemanth0525/gitmorph-website" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center space-x-1">
                        <Github className="w-5 h-5" />
                        <span>Website</span>
                    </Link>
                    <Link href="https://www.npmjs.com/package/gitmorph-cli" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center space-x-1">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                            <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                        </svg>
                        <span>Package</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}