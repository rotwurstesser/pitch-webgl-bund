<template>
  <div class="overscroll-x-auto">
    <div class="grid grid-cols-8 grid-rows-20 h-64">
      <img class="col-start-2 row-start-2" src="@/assets/grid/1.png" />
      <img class="col-start-5 row-start-5" src="@/assets/grid/2.png" />
      <img class="col-start-10 row-start-10" src="@/assets/grid/3.png" />

      <img class="col-start-2 row-start-7" src="@/assets/grid/4.png" />
      <img class="col-start-5 row-start-10" src="@/assets/grid/5.png" />
      <img class="col-start-10 row-start-14" src="@/assets/grid/6.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.grid-rows-20 {
  grid-template-rows: repeat(20, minmax(0, 1fr));
}
</style>
