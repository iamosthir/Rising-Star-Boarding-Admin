<template>
  <section class="section">
      <div class="row">
          <!-- <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin-sitedata.banner'}" class="card-btn">
                  <i class="fas fa-file-image"></i>
                  <h2>Banner</h2>
              </router-link>
          </div> -->
          <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin-sitedata.about'}" class="card-btn">
                  <i class="fas fa-info-circle"></i>
                  <h2>About Us</h2>
              </router-link>
          </div>
          <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin-sitedata.pricing.list'}" class="card-btn">
                  <i class="fas fa-money-bill"></i>
                  <h2>Pricing</h2>
              </router-link>
          </div>
          <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin-terms'}" class="card-btn">
                  <i class="fas fa-clipboard-list"></i>
                  <h2>Terms & Conditions</h2>
              </router-link>
          </div>
          <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin-privacy'}" class="card-btn">
                  <i class="fas fa-lock"></i>
                  <h2>Privacy</h2>
              </router-link>
          </div>
          <div class="col-md-3 mt-4">
              <router-link :to="{name: 'admin.contract'}" class="card-btn">
                  <i class="fas fa-file"></i>
                  <h2>Contract Form</h2>
              </router-link>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>