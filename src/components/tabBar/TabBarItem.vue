<template>
  <li class="layui-nav-item">
    <slot name="a" />
    <slot name="dl"></slot>
  </li>
</template> 
<script>
export default {
  name: "TabBarItem",
};
</script>
<style scoped>
</style>