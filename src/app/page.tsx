'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Terminal, Download, ChevronRight, Code, BarChart, Cpu, Layers, GitMerge, GitPullRequest, FileCode, Search, GitCompare, UserCheck, GitFork, Trash2, Archive, Box, FileSearch, Settings } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <GitCommandsSection />
        <BeyondGitSection />
        <InstallationSection />
      </main>

      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <header className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GitMorph CLI
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Revolutionize your Git workflow with advanced operations and enhanced productivity
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#installation" className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg transition-colors flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Install Now</span>
          </Link>
          <Link href="/docs" className="border border-white hover:border-green-500 hover:text-green-500 py-3 px-8 rounded-full text-lg transition-colors flex items-center space-x-2">
            <Terminal className="w-5 h-5" />
            <span>View Docs</span>
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

function GitCommandsSection() {
  const commands = [
    { git: 'git init', gm: 'gm init', description: 'Initialize a new Git repository' },
    { git: 'git clone <url>', gm: 'gm clone <url>', description: 'Clone a repository' },
    { git: 'git add <files>', gm: 'gm stage <files>', description: 'Stage files for commit' },
    { git: 'git commit -m "<message>"', gm: 'gm save "<message>"', description: 'Commit changes' },
    { git: 'git pushgit ', gm: 'gm upload', description: 'Push to remote' },
    { git: 'git pull', gm: 'gm download', description: 'Pull from remote' },
    { git: 'git status', gm: 'gm status', description: 'Check status' },
    { git: 'git log', gm: 'gm history', description: 'Check log' },
    { git: 'git branch <name>', gm: 'gm branch <name>', description: 'Create a new branch' },
    { git: 'git checkout <branch>', gm: 'gm switch <branch>', description: 'Switch to a different branch' },
    { git: 'git merge <branch>', gm: 'gm merge <branch>', description: 'Merge branches' },
    { git: 'git branch -d <branch>', gm: 'gm delete <branch>', description: 'Delete a branch' },
    { git: 'git stash', gm: 'gm stash', description: 'Stash changes' },
    { git: 'git stash apply', gm: 'gm apply-stash', description: 'Apply stashed changes' },
    { git: 'git rebase <branch>', gm: 'gm rebase <branch>', description: 'Rebase current branch' },
  ]

  return (
    <section id="git-commands" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Git Command Comparison</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commands.map((command, index) => (
            <ComparisonCard
              key={index}
              gitCommand={command.git}
              gmCommand={command.gm}
              description={command.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ gitCommand, gmCommand, description }: { gitCommand: string; gmCommand: string; description: string }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Git</h3>
          <code className="text-sm bg-gray-700 px-2 py-1 rounded">{gitCommand}</code>
        </div>
        <ChevronRight className="w-6 h-6 text-green-500 mx-auto" />
        <div>
          <h3 className="text-xl font-semibold mb-2">GitMorph</h3>
          <code className="text-sm bg-gray-700 px-2 py-1 rounded">{gmCommand}</code>
        </div>
      </div>
      <p className="text-gray-400 mt-4">{description}</p>
    </motion.div>
  )
}

function BeyondGitSection() {
  const features = [
    { icon: <FileCode className="w-12 h-12 text-yellow-400" />, title: "Create .gitignore", description: "Easily generate .gitignore files with common patterns" },
    { icon: <Code className="w-12 h-12 text-blue-400" />, title: "Project Scaffolding", description: "Quickly set up new project structures" },
    { icon: <BarChart className="w-12 h-12 text-green-400" />, title: "Repository Analysis", description: "Get insights into your repository statistics" },
    { icon: <Cpu className="w-12 h-12 text-red-400" />, title: "Benchmarking", description: "Run and compare performance of your commands" },
    { icon: <Layers className="w-12 h-12 text-purple-400" />, title: "Dependency Management", description: "Analyze and manage project dependencies" },
    { icon: <GitCompare className="w-12 h-12 text-orange-400" />, title: "Advanced Diff", description: "Visualize changes with enhanced diff capabilities" },
    { icon: <GitMerge className="w-12 h-12 text-pink-400" />, title: "Smart Merging", description: "Intelligent merge conflict resolution" },
    { icon: <GitPullRequest className="w-12 h-12 text-indigo-400" />, title: "PR Management", description: "Streamlined pull request workflows" },
    { icon: <Search className="w-12 h-12 text-teal-400" />, title: "Code Search", description: "Search for strings across your entire codebase" },
    { icon: <UserCheck className="w-12 h-12 text-amber-400" />, title: "Blame", description: "See who last modified each line of a file" },
    { icon: <GitFork className="w-12 h-12 text-cyan-400" />, title: "Hooks Management", description: "Easily manage Git hooks" },
    { icon: <Trash2 className="w-12 h-12 text-rose-400" />, title: "Linting", description: "Lint your code and automatically fix issues" },
    { icon: <Archive className="w-12 h-12 text-emerald-400" />, title: "Docker Integration", description: "Generate Dockerfiles for your projects" },
    { icon: <Box className="w-12 h-12 text-fuchsia-400" />, title: "Testing", description: "Run tests with ease" },
    { icon: <FileSearch className="w-12 h-12 text-sky-400" />, title: "TODO Management", description: "List and add TODO comments in your code" },
    { icon: <Settings className="w-12 h-12 text-lime-400" />, title: "Configuration", description: "Manage GitMorph configuration" },
  ]

  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Beyond Git</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg text-center"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function InstallationSection() {
  return (
    <section id="installation" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Installation</h2>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <code className="text-green-500 text-lg">npm install -g gitmorph-cli</code>
        </motion.div>
        <p className="mt-6 text-lg">Get started with GitMorph CLI in seconds!</p>
      </div>
    </section>
  )
}