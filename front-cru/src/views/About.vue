<template>
  <div>
    ABOUT
    {{ $route.params.name }}
    {{ $route.query.ok }}
  </div>
</template>

<script>
  export default {
    props: ["name"],
  };
</script>

<style></style>
