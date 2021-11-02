<template>
  <div>
    <div class="background bg-blue-primary">
      <div class="flex justify-around p-12 ">
        <p class="tracking-tighter text-3xl font-extrabold text-light-taskcolor">TODO</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-sun"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path
            d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.background {
  background-image: url("~/images/bg-desktop-dark.jpg");
  background-position: top center;
  height: 40vh;
}
</style>
