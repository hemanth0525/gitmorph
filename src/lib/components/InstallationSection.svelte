<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<section id="installation" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12 text-gitmorph-400">
      Installation
    </h2>
    {#if visible}
      <div
        class="max-w-2xl mx-auto bg-neutral rounded-lg shadow-lg p-6"
        in:fly={{ y: 50, duration: 500, easing: cubicInOut }}
      >
        <p class="mb-4 text-white">To install GitMorph globally, run:</p>
        <pre
          class="bg-base-100 p-4 rounded-lg mb-8 text-gitmorph-400">npm install -g gitmorph</pre>
        <h3 class="text-2xl font-bold mb-4 text-gitmorph-400">Usage</h3>
        <p class="mb-4 text-white">
          After installation, you can use the <code class="text-gitmorph-400"
            >gm</code
          > command followed by the desired operation. For example:
        </p>
        <pre class="bg-base-100 p-4 rounded-lg mb-8 text-gitmorph-400">
  gm init
  gm stage .
  gm save "Initial commit"
  gm upload</pre>
        <p class="text-white">
          For more detailed information on each command, please refer to the
          documentation.
        </p>
      </div>
    {/if}
  </div>
</section>
