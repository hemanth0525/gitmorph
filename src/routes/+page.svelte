<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import CommandComparison from "$lib/components/CommandComparison.svelte";
  import BeyondGitFeatures from "$lib/components/BeyondGitFeatures.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import InstallationSection from "$lib/components/InstallationSection.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import AnimatedNavbar from "$lib/components/AnimatedNavbar.svelte";

  let activeSection = "home";
  let showCommandComparison = true;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("section")
      .forEach((section) => observer.observe(section));
  });

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<svelte:head>
  <title>GitMorph - Revolutionize Your Git Workflow</title>
</svelte:head>

<AnimatedNavbar {activeSection} {scrollTo} />

<main class="bg-base-100 text-white">
  <HeroSection />

  <section id="commands" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-gitmorph-400">
        Command Comparison
      </h2>
      {#if showCommandComparison}
        <CommandComparison />
      {:else}
        <p class="text-center text-gitmorph-300">Command comparison skipped.</p>
      {/if}
      <div class="text-center mt-8">
        <button
          class="btn btn-primary"
          on:click={() => {
            showCommandComparison = !showCommandComparison;
            if (!showCommandComparison) scrollTo("beyond-git");
          }}
        >
          {showCommandComparison
            ? "Skip to Beyond Git"
            : "Show Command Comparison"}
        </button>
      </div>
    </div>
  </section>

  <section id="beyond-git" class="py-20 bg-neutral">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-gitmorph-400">
        Beyond Git
      </h2>
      <BeyondGitFeatures />
    </div>
  </section>

  <InstallationSection />
</main>

<Footer />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
