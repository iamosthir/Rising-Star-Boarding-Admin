<template>
  <div class="section">
    <div class="row" v-if="is_loading">
        <div class="col-md-3 col-6" v-for="(n,i) in 4" :key="i">
            <skeleton width="100%" height="180px" class="shadow"/>
        </div>
    </div>
    <!--  -->
    <div class="row" v-if="!is_loading">
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-statistic-4">
            <div class="align-items-center justify-content-between">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                  <div class="card-content">
                    <h5 class="font-15">New Boarding</h5>
                    <h2 class="mb-3 font-18">{{ utilData.boardingCount }}</h2>
                    <p class="mb-0">All On Progress Boarding</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                  <div class="banner-img">
                    <img src="/assets/img/banner/1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-statistic-4">
            <div class="align-items-center justify-content-between">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                  <div class="card-content">
                    <h5 class="font-15">New Groomings</h5>
                    <h2 class="mb-3 font-18">{{ utilData.groomingCount }}</h2>
                    <p class="mb-0">All Pending Grooming</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                  <div class="banner-img">
                    <img src="/assets/img/banner/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-statistic-4">
            <div class="align-items-center justify-content-between">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                  <div class="card-content">
                    <h5 class="font-15">Customers</h5>
                    <h2 class="mb-3 font-18">{{ utilData.customerCount }}</h2>
                    <p class="mb-0">With <span class="col-green">{{ utilData.petCount }}</span> Registered pets</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                  <div class="banner-img">
                    <img src="/assets/img/banner/2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-statistic-4">
            <div class="align-items-center justify-content-between">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                  <div class="card-content">
                    <h5 class="font-15">Earnings (This Month)</h5>
                    <h2 class="mb-3 font-18">${{ utilData.earningCount }}</h2>
                    <p class="mb-0">Boarding & Grooming</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                  <div class="banner-img">
                    <img src="/assets/img/banner/4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_loading: true,
      utilData: {},
    };
  },
  methods:{
      getUtilsInfo(){
          axios.get("/admin/api/get-utils-info")
          .then(resp=>{
              return resp.data;
          }).then(data=>{
              this.utilData = data;
              this.is_loading = false;
          }).catch(err=>{
              console.error(err.response.data);
          })
      }
  },
  created(){
      this.getUtilsInfo();
  }
};
</script>

<style></style>
