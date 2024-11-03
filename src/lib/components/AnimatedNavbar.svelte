<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import GitMorphLogo from "./GitMorphLogo.svelte";

  export let activeSection: string;
  export let scrollTo: (id: string) => void;

  let isMenuOpen = false;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "commands", label: "Commands" },
    { id: "beyond-git", label: "Beyond Git" },
    { id: "installation", label: "Installation" },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <a href="#home" class="flex items-center space-x-2">
        <GitMorphLogo />
        <span class="text-2xl font-bold text-gitmorph-400">GitMorph</span>
      </a>
      <div class="hidden md:flex space-x-4">
        {#each navItems as item}
          <a
            href="#{item.id}"
            class="text-white hover:text-gitmorph-400 transition-colors duration-200"
            class:text-gitmorph-400={activeSection === item.id}
            on:click|preventDefault={() => scrollTo(item.id)}
          >
            {item.label}
          </a>
        {/each}
      </div>
      <a
        href="https://github.com/yourusername/gitmorph"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:block"
      >
        <svg
          class="w-6 h-6 text-white hover:text-gitmorph-400 transition-colors duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <button class="md:hidden text-white" on:click={toggleMenu}>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  {#if isMenuOpen}
    <div
      class="md:hidden bg-base-100 shadow-lg"
      transition:fly={{ y: -20, duration: 300, easing: cubicInOut }}
    >
      {#each navItems as item}
        <a
          href="#{item.id}"
          class="block py-2 px-4 text-white hover:text-gitmorph-400 transition-colors duration-200"
          class:text-gitmorph-400={activeSection === item.id}
          on:click|preventDefault={() => {
            scrollTo(item.id);
            toggleMenu();
          }}
        >
          {item.label}
        </a>
      {/each}
      <a
        href="https://github.com/yourusername/gitmorph"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-2 px-4 text-white hover:text-gitmorph-400 transition-colors duration-200"
      >
        GitHub
      </a>
    </div>
  {/if}
</nav>
