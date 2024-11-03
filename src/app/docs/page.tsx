'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function DocsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/gitmorph/icon.png"
                        alt="GitMorph Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-2xl font-bold">GitMorph</span>
                </Link>
                <button onClick={toggleSidebar} className="md:hidden">
                    {isSidebarOpen ? <X /> : <Menu />}
                </button>
            </nav>

            <div className="flex">
                <aside className={`bg-gray-800 w-64 p-6 h-auto overflow-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <h2 className="text-2xl font-bold mb-4">Documentation</h2>
                    <ul className="space-y-2">
                        <li><Link href="#installation" className="hover:text-green-500">Installation</Link></li>
                        <li><Link href="#usage" className="hover:text-green-500">Usage</Link></li>
                        <li><Link href="#git-commands" className="hover:text-green-500">Git Commands</Link></li>
                        <li><Link href="#beyond-git" className="hover:text-green-500">Beyond Git</Link></li>
                        <li><Link href="#configuration" className="hover:text-green-500">Configuration</Link></li>
                    </ul>
                </aside>

                <main className="flex-1 p-6">
                    <h1 className="text-4xl font-bold mb-6">GitMorph CLI Documentation</h1>

                    <section id="installation" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Installation</h2>
                        <p className="mb-4">To install GitMorph CLI globally, run:</p>
                        <pre className="bg-gray-800 p-4 rounded-lg"><code>npm install -g gitmorph-cli</code></pre>
                    </section>

                    <section id="usage" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Usage</h2>
                        <p className="mb-4">After installation, you can use the `gm` command followed by the desired operation.</p>
                    </section>

                    <section id="git-commands" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Git Commands</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><code>gm init</code>: Initialize a new Git repository</li>
                            <li><code>gm clone &lt;url&gt;</code>: Clone a repository</li>
                            <li><code>gm stage &lt;files&gt;</code>: Stage files</li>
                            <li><code>gm save &quot;&lt;message&gt;&quot;</code>: Commit changes</li>
                            <li><code>gm upload</code>: Push to remote</li>
                            <li><code>gm download</code>: Pull from remote</li>
                            <li><code>gm status</code>: Check status</li>
                            <li><code>gm history</code>: Check log</li>
                            <li><code>gm branch &lt;name&gt;</code>: Create a new branch</li>
                            <li><code>gm switch &lt;branch&gt;</code>: Switch to a different branch</li>
                            <li><code>gm merge &lt;branch&gt;</code>: Merge branches</li>
                            <li><code>gm delete &lt;branch&gt;</code>: Delete a branch</li>
                            <li><code>gm stash</code>: Stash changes</li>
                            <li><code>gm apply-stash</code>: Apply stashed changes</li>
                            <li><code>gm rebase &lt;branch&gt;</code>: Rebase current branch</li>
                        </ul>
                    </section>

                    <section id="beyond-git" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Beyond Git</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><code>gm create-ignore</code>: Create a .gitignore file with common patterns</li>
                            <li><code>gm analyze</code>: Analyze repository statistics</li>
                            <li><code>gm todo</code>: List or add TODO comments in your code</li>
                            <li><code>gm scaffold &lt;type&gt;</code>: Scaffold a basic project structure</li>
                            <li><code>gm search &lt;query&gt;</code>: Search for a string in all files</li>
                            <li><code>gm diff</code>: Show changes between commits, commit and working tree, etc</li>
                            <li><code>gm blame &lt;file&gt;</code>: Show what revision and author last modified each line of a file</li>
                            <li><code>gm hooks</code>: Manage Git hooks</li>
                            <li><code>gm lint</code>: Lint your code</li>
                            <li><code>gm benchmark &lt;command&gt;</code>: Run a simple benchmark test</li>
                            <li><code>gm dependencies</code>: Analyze project dependencies</li>
                            <li><code>gm docker</code>: Generate a basic Dockerfile for the project</li>
                            <li><code>gm test</code>: Run tests</li>
                        </ul>
                    </section>

                    <section id="configuration" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Configuration</h2>
                        <p className="mb-4">You can configure GitMorph CLI using the <code>gm config</code> command:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Set a global configuration: <code>gm config -g -s key value</code></li>
                            <li>Set a local configuration: <code>gm config -l -s key value</code></li>
                            <li>View current configuration: <code>gm config -v</code></li>
                        </ul>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    )
}
