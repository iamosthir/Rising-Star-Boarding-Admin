<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
              <div class="card-header d-flex justify-content-between">
                  <h4 class="text-muted">Notifications</h4>
                  <div>
                      <button @click="clearAll" class="btn"><i class="fas fa-trash"></i> Clear All</button>
                  </div>
              </div>
              <div class="card-body">
                  <div class="row" v-if="is_loading">
                      <div class="col-md-12" v-for="n in 10" :key="n">
                          <skeleton width="100%" height="60px"/>
                      </div>
                  </div>
                  <div class="row" v-if="!is_loading">

                      <div class="col-md-12 text-center" v-if="notifications.length ==0">
                          <h6 class="text-muted">No new notifications</h6>
                      </div>


                      <template v-else v-for="(notify,i) in notifications">

                          <div class="col-md-12 notification"
                           :class="{'unread':notify.status=='unseen'}" :key="i" v-if="notify.type == 'boarding'">
                            <div class="d-flex justify-content-between w-75 pull-left" @click="openNotification(notify.id,i,notify.status,notify.type,notify.booking_id)">
                                <span class="dropdown-item-icon bg-white text-white">
                                    <img src="/images/boarding.png" width="25px" alt="">
                                </span>
                                <div class="id">
                                    <p>Boarding ID #{{ notify.booking_id }}</p>
                                </div>
                                <div class="content">
                                    <h6><strong>Boarding | {{ notify.boarding_string }}</strong></h6>
                                </div>
                                <div class="time">
                                    <from-now :date="notify.created_at" />
                                </div>
                            </div>

                            <div class="action w-auto pull-right">
                                <button @click="deleteNotification(notify.id,i)" class="btn btn-outline-info btn-sm"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>

                        <div class="col-md-12 notification"
                           :class="{'unread':notify.status=='unseen'}" :key="i" v-if="notify.type == 'grooming'">
                            <div class="d-flex justify-content-between w-75 pull-left" @click="openNotification(notify.id,i,notify.status,notify.type,notify.booking_id)">
                                <span class="dropdown-item-icon bg-white text-white">
                                    <img src="/images/grooming.png" width="25px" alt="">
                                </span>
                                <div class="id">
                                    <p>Grooming ID #{{ notify.booking_id }}</p>
                                </div>
                                <div class="content">
                                    <h6><strong>{{ notify.grooming_string }}</strong></h6>
                                </div>
                                <div class="time">
                                    <from-now :date="notify.created_at" />
                                </div>
                            </div>

                            <div class="action w-auto pull-right">
                                <button @click="deleteNotification(notify.id,i)" class="btn btn-outline-info btn-sm"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                      </template>


                  </div>
              </div>
              <div class="card-footer">
                  <div class="row justify-content-center">
                      <pagination :data="paginateData" @pagination-change-page="getAllNotifications"></pagination>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    components:{
        "from-now" : ()=>import("../../partials/FromNowTimer.vue")
    },
    data(){
        return{
            is_loading: true,
            notifications: [],
            paginateData:{},
        }
    },
    methods:{
        getAllNotifications(page = 1){
            axios.get("/admin/api/get-all-notifications-list?page="+page).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.paginateData = data;
                this.notifications = data.data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deleteNotification(id,index)
        {
            axios.post('/admin/api/delete-notification',{
                id: id
            }).then(resp=>{
                if(resp.data.status=="ok"){
                    this.notifications.splice(index,1);
                    this.$root.$refs.headerNotification.deleteIfExists(id);
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        clearAll(){
            axios.post("/admin/api/clear-all-notification").then(resp=>{
                if(resp.data.status=="ok"){
                    this.notifications = [];
                    swal.fire('Notification cleard',resp.data.msg,"success");
                    this.$root.$refs.headerNotification.resetAll();
                }
            })
        },
        openNotification(id,index,status,type,bookingId){

            if(status == "unseen"){
                this.notifications[index].status = "seen";
                axios.post("/admin/api/seen-notification",{
                    id: id,
                })
                .then(resp=>{
                    if(resp.data.status == "ok"){
                        this.$root.$refs.headerNotification.makeSeen(id,status=="seen"?false:true);
                    }
                }).catch(err=>{
                    console.error(err.response.data);
                });
            }
            if(type=="boarding"){
                this.$router.push({
                    name: "boarding.edit",
                    params:{
                        id: bookingId
                    }
                });
            }
            else{
                this.$router.push({
                    name: "grooming.edit",
                    params: {
                        id: bookingId
                    }
                })
            }
        }
    },
    created() {
        this.getAllNotifications();
    },
}
</script>

<style>

</style>