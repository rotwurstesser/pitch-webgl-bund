<template>
  <div class="overscroll-x-auto">
    <div class="grid grid-cols-20 grid-rows-20 h-md">
      <img src="@/assets/grid/1.png" class="col-start-2 row-start-2" />
      <img src="@/assets/grid/2.png" class="col-start-4 row-start-5" />
      <img src="@/assets/grid/3.png" class="col-start-6 row-start-8" />
      <img src="@/assets/grid/4.png" class="col-start-8 row-start-2" />
      <img src="@/assets/grid/5.png" class="col-start-4 row-start-12" />
      <img src="@/assets/grid/6.png" class="col-start-2 row-start-10" />
      <img src="@/assets/grid/7.png" class="col-start-2 row-start-10" />
      <img src="@/assets/grid/7.png" class="col-start-8 row-start-10" />
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
.grid img {
  max-width: 200px;
}
</style>
