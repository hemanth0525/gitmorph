<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";

  let mounted = false;
  const rotation = tweened(0, {
    duration: 1000,
    easing: cubicInOut,
  });

  onMount(() => {
    mounted = true;
    rotate();
  });

  function rotate() {
    rotation.set(mounted ? 360 : 0).then(() => {
      if (mounted) {
        rotation.set(0, { duration: 0 });
        rotate();
      }
    });
  }
</script>

<svg
  width="40"
  height="40"
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="20" cy="20" r="20" fill="#22c55e" />
  <g transform="rotate({$rotation}, 20, 20)">
    <path d="M20 10 L10 20 L20 30 L30 20 Z" fill="white" />
    <circle cx="20" cy="20" r="4" fill="#22c55e" />
    <path d="M20 10 L20 16" stroke="white" stroke-width="2" />
    <path d="M20 24 L20 30" stroke="white" stroke-width="2" />
    <path d="M10 20 L16 20" stroke="white" stroke-width="2" />
    <path d="M24 20 L30 20" stroke="white" stroke-width="2" />
  </g>
</svg>
