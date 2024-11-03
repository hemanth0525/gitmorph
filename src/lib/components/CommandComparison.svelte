<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  const commands = [
    {
      git: "git init",
      gitmorph: "gm init",
      description: "Initialize a new Git repository",
    },
    {
      git: "git add <file>",
      gitmorph: "gm stage <file>",
      description: "Stage changes",
    },
    {
      git: 'git commit -m "<message>"',
      gitmorph: 'gm save "<message>"',
      description: "Commit changes",
    },
    {
      git: "git push",
      gitmorph: "gm upload",
      description: "Push changes to remote",
    },
    {
      git: "git pull",
      gitmorph: "gm download",
      description: "Pull changes from remote",
    },
  ];

  let currentIndex = 0;
  let visible = false;

  onMount(() => {
    visible = true;
  });

  function nextCommand() {
    currentIndex = (currentIndex + 1) % commands.length;
  }

  function prevCommand() {
    currentIndex = (currentIndex - 1 + commands.length) % commands.length;
  }
</script>

{#if visible}
  <div class="max-w-3xl mx-auto" in:fade={{ duration: 500 }}>
    <div class="bg-neutral rounded-lg shadow-lg p-6 mb-8">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gitmorph-400">Git</h3>
          <pre class="bg-base-100 p-3 rounded">{commands[currentIndex]
              .git}</pre>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gitmorph-400">GitMorph</h3>
          <pre class="bg-base-100 p-3 rounded">{commands[currentIndex]
              .gitmorph}</pre>
        </div>
      </div>
      <p class="text-center text-white">{commands[currentIndex].description}</p>
    </div>
    <div class="flex justify-center space-x-4">
      <button class="btn btn-primary" on:click={prevCommand}>Previous</button>

      <button class="btn btn-primary" on:click={nextCommand}>Next</button>
    </div>
  </div>
{/if}
