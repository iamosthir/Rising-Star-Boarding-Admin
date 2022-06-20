<template>
  <section class="section">

      <!-- Booking Status -->
      <booking-status></booking-status>
      <!-- End -->

      <!-- Top Section -->
      <top-section></top-section>
      <!-- End -->
      <!-- Boarding Section -->
      <boarding-section></boarding-section>
      <!-- End -->

      <!-- Earning Chart Section -->
      <earning-chart></earning-chart>
      <!-- End -->

  </section>
</template>

<script>
export default {
    components:{
        "top-section" : ()=>import("../home/partials/TopSection.vue"),
        "boarding-section" : ()=>import("../home/partials/BoardingSection.vue"),
        "earning-chart" : ()=>import("../home/partials/EarningChartSection.vue"),
        "booking-status" : ()=>import("../home/partials/BookintStatus.vue")
    }
}
</script>

<style>

</style>