<template>
  <div >
    <App />
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  data() {
    return {
      toggle: false,
      showSkeleton: true,
    }
  },

  methods: {
    toDark() {
      const theme = localStorage.getItem('theme')
      if (!theme) {
        localStorage.setItem('theme', 'dark')
      }
      if (theme !== 'dark') {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
      } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove('dark')
      }
    },
  },
}
</script>
