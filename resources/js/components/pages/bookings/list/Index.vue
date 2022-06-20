<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                    <div class="btn-group mb-3" role="group" aria-label="Basic example">
                        <router-link :to="{name: 'grooming.calendar-view'}" class="btn btn-outline-primary"><i class="fas fa-calendar"></i> Calendar View</router-link>
                        <router-link :to="{name: 'grooming.list-view'}" class="btn btn-outline-primary"><i class="fas fa-list"></i> List View</router-link>
                    </div>
                </nav>
          </div>
      </div>
      <router-view></router-view>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>