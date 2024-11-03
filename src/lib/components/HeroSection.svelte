<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<section
  id="home"
  class="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-neutral overflow-hidden"
>
  <div class="text-center">
    {#if visible}
      <h1
        class="text-6xl font-bold mb-4 text-gitmorph-400"
        in:fly={{ y: 50, duration: 1000, easing: cubicInOut }}
      >
        GitMorph
      </h1>
      <p
        class="text-xl mb-8 text-white"
        in:fly={{ y: 50, duration: 1000, delay: 300, easing: cubicInOut }}
      >
        Revolutionize Your Git Workflow
      </p>
      <a
        href="#commands"
        class="btn btn-primary btn-lg"
        in:fly={{ y: 50, duration: 1000, delay: 600, easing: cubicInOut }}
      >
        Explore Commands
      </a>
    {/if}
  </div>
  {#if visible}
    <div
      class="absolute top-0 left-0 w-full h-full pointer-events-none"
      in:fade={{ duration: 2000 }}
    >
      <div
        class="absolute top-1/4 left-1/4 w-2 h-2 bg-gitmorph-400 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-3/4 left-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse"
      ></div>
    </div>
  {/if}
</section>
