<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<footer class="bg-neutral py-8">
  {#if visible}
    <div
      class="container mx-auto px-4 text-center text-white"
      in:fade={{ duration: 500 }}
    >
      <p>&copy; 2023 GitMorph. All rights reserved.</p>
      <div class="mt-4 space-x-4">
        <a
          href="https://github.com/yourusername/gitmorph"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gitmorph-400 hover:text-gitmorph-300">GitHub</a
        >
        <a
          href="https://www.npmjs.com/package/gitmorph"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gitmorph-400 hover:text-gitmorph-300">npm</a
        >
      </div>
    </div>
  {/if}
</footer>
