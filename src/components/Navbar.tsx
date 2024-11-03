import Link from 'next/link'
import { Github as GitHub } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
    return (
        <motion.nav
            className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={`${basePath}/icon.png`}
                        alt="GitMorph Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-2xl font-bold">GitMorph</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/#git-commands" className="hover:text-green-500 transition-colors">Commands</Link>
                    <Link href="/#installation" className="hover:text-green-500 transition-colors">Installation</Link>
                    <Link href="/docs" className="hover:text-green-500 transition-colors">Docs</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://github.com/hemanth0525/gitmorph-cli" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition-colors flex items-center space-x-2">
                        <GitHub className="w-5 h-5" />
                        <span className="hidden sm:inline">GitHub</span>
                    </Link>
                    <Link href="https://www.npmjs.com/package/gitmorph-cli" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors flex items-center space-x-2">
                        <span>npm</span>
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
