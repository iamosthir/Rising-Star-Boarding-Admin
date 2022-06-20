<template>
  <div class="section">
      <div class="row">
          <div class="col-md-4">
              <div class="card">
                  <div class="card-body">

                      <div class="row" v-if="isLoading">
                          <div class="col-md-6">
                              <skeleton width="100%" height="20px" />
                              <skeleton width="100%" height="20px" />
                          </div>
                      </div>

                      <div class="row" v-else>
                          <div class="col-12 mb-4">
                            <div class="form-group">
                                <h6>Boarding Bookings 
                                    <span v-if="!boardingStatus" class="text-danger"><small>(ofline)</small></span>
                                    <span v-else class="text-success"><small>(online)</small></span>
                                </h6>
                                <label class="custom-switch mt-2">
                                    <input @change="updateBoardingStatus" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" v-model="boardingStatus">
                                    <span class="custom-switch-indicator"></span>
                                    <span class="custom-switch-description">{{ boardingStatus==true?'Trun Off':'Trun On' }}</span>
                                </label>
                            </div>
                          </div>
                          <hr>
                          <div class="col-12 mb-4">
                            <div class="form-group">
                                <h6>Grooming Bookings 
                                    <span v-if="!groomingStatus" class="text-danger"><small>(ofline)</small></span>
                                    <span v-else class="text-success"><small>(online)</small></span>
                                </h6>
                                <label class="custom-switch mt-2">
                                    <input @change="updateGroomingStatus" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" v-model="groomingStatus">
                                    <span class="custom-switch-indicator"></span>
                                    <span class="custom-switch-description">{{ groomingStatus==true?'Trun Off':'Trun On' }}</span>
                                </label>
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
            isLoading: true,
            boardingStatus: false,
            groomingStatus: false,
        }
    },
    methods: {
        getStatus(){
            axios.get("/admin/api/get-all-booking-statuses").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    this.isLoading = false;
                    this.boardingStatus = data.data.boarding_status=='true'?true:false;
                    this.groomingStatus = data.data.grooming_status=='true'?true:false;
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

        updateBoardingStatus() {
            axios.post("/admin/api/update-boarding-status",{
                status: this.boardingStatus
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {

                    if(data.type == "service_online")
                    {
                        this.$toast.success(data.msg);
                    }
                    else
                    {
                        this.$toast.error(data.msg);
                    }

                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

        updateGroomingStatus() {
            axios.post("/admin/api/update-grooming-status",{
                status: this.groomingStatus
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {

                    if(data.type == "service_online")
                    {
                        this.$toast.success(data.msg);
                    }
                    else
                    {
                        this.$toast.error(data.msg);
                    }

                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    mounted() {
        this.getStatus();
    }
}
</script>

<style>

</style>