<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import AnimatedNavbar from '$lib/components/AnimatedNavbar.svelte';
  import Footer from '$lib/components/Footer.svelte'

  let activeSection = 'introduction';
  let visible = false;

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'installation', title: 'Installation' },
    { id: 'commands', title: 'Commands' },
    { id: 'beyond-git', title: 'Beyond Git' },
    { id: 'configuration', title: 'Configuration' },
    { id: 'api', title: 'API' },
  ];

  onMount(() => {
    visible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
  });

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>GitMorph Documentation</title>
</svelte:head>

<AnimatedNavbar {activeSection} {scrollTo} />

<div class="flex bg-base-100 text-white pt-16">
  <aside class="w-64 h-screen sticky top-16 overflow-y-auto bg-neutral p-4 hidden lg:block">
    <nav>
      <ul>
        {#each sections as section}
          <li class="mb-2">
            <a
              href="#{section.id}"
              class="block py-2 px-4 rounded hover:bg-base-100 transition-colors duration-200"
              class:bg-base-100={activeSection === section.id}
              on:click|preventDefault={() => scrollTo(section.id)}
            >
              {section.title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <main class="flex-1 p-8">
    {#if visible}
      <section id="introduction" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h1 class="text-4xl font-bold mb-6 text-gitmorph-400">Introduction to GitMorph</h1>
        <p class="mb-4">GitMorph is a powerful CLI tool designed to simplify Git operations and enhance developer productivity. It provides intuitive alternatives to standard Git commands and additional features to streamline your workflow.</p>
      </section>

      <section id="installation" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gitmorph-400">Installation</h2>
        <p class="mb-4">To install GitMorph globally, run:</p>
        <pre class="bg-neutral p-4 rounded-lg mb-4">npm install -g gitmorph</pre>
      </section>

      <section id="commands" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gitmorph-400">Commands</h2>
        <p class="mb-4">GitMorph provides the following commands:</p>
        <ul class="list-disc list-inside mb-4">
          <li><code>gm init</code> - Initialize a new Git repository</li>
          <li><code>gm stage &lt;file&gt;</code> - Stage changes</li>
          <li><code>gm save "&lt;message&gt;"</code> - Commit changes</li>
          <li><code>gm upload</code> - Push changes to remote</li>
          <li><code>gm download</code> - Pull changes from remote</li>
        </ul>
      </section>

      <section id="beyond-git" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gitmorph-400">Beyond Git</h2>
        <p class="mb-4">GitMorph offers additional features beyond standard Git operations:</p>
        <ul class="list-disc list-inside mb-4">
          <li><code>gm create-ignore</code> - Create a .gitignore file with common patterns</li>
          <li><code>gm analyze</code> - Analyze repository statistics</li>
          <li><code>gm todo</code> - Manage TODO comments in your code</li>
          <li><code>gm scaffold</code> - Scaffold a basic project structure</li>
          <li><code>gm search</code> - Search for a string in all files</li>
        </ul>
      </section>

      <section id="configuration" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gitmorph-400">Configuration</h2>
        <p class="mb-4">GitMorph can be configured using a <code>.gitmorphrc</code> file in your home directory or project root. Example configuration:</p>
        <pre class="bg-neutral p-4 rounded-lg mb-4">
        </pre>
      </section>

      <section id="api" in:fly={{ y: 50, duration: 500, easing: cubicInOut }}>
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gitmorph-400">API</h2>
        <p class="mb-4">GitMorph can also be used programmatically:</p>
        <pre class="bg-neutral p-4 rounded-lg mb-4">

await init();
await stage('.');
await save('Initial commit');
        </pre>
      </section>
    {/if}
  </main>
</div>

<Footer />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>