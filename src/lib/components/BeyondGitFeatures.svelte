<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  const features = [
    {
      name: "create-ignore",
      description: "Create a .gitignore file with common patterns",
    },
    { name: "analyze", description: "Analyze repository statistics" },
    { name: "todo", description: "Manage TODO comments in your code" },
    { name: "scaffold", description: "Scaffold a basic project structure" },
    { name: "search", description: "Search for a string in all files" },
  ];

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each features as feature, index}
      <div
        class="bg-base-100 rounded-lg shadow-lg p-6"
        in:fly={{
          y: 50,
          duration: 500,
          delay: index * 100,
          easing: cubicInOut,
        }}
      >
        <h3 class="text-xl font-semibold mb-2 text-gitmorph-400">
          {feature.name}
        </h3>
        <p class="text-white">{feature.description}</p>
      </div>
    {/each}
  </div>
{/if}
