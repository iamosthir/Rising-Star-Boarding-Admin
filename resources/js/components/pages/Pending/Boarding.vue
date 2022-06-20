<template>
  <div class="row mt-4">
      <div class="col-12">
          <div class="card">
              <div class="card-header">
                  <h4 class="text-muted">Pending Boarding Reservations</h4>
              </div>
              <div class="card-body">
                  <div class="row" v-if="is_loading">
                      <div class="col-12" v-for="n in 10" :key="n">
                          <skeleton width="100%" height="40px"/>
                      </div>
                  </div>

                  <div v-if="!is_loading">
                            
                            <div class="row" v-if="boardings.length > 0">
                                <!-- Loop -->
                                <div class="col-md-6" v-for="(boarding,i) in boardings" :key="i">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between">
                                            <span class="text-muted">Booking ID #{{ boarding.booking_data.id }}</span>
                                            <span>Booking Date : <strong>{{ moment(boarding.booking_data.created_at).format("DD MMM YYYY, hh:mm a") }}</strong></span>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-end">
                                                <p>
                                                    <span class="badge badge-pill badge-warning">Pending</span>
                                                </p>
                                            </div>
                                            <div class="justify-content-between d-flex">
                                                <p class="text-muted">Customer Name : <strong>{{ boarding.booking_data.customer.first_name + " "+boarding.booking_data.customer.last_name }}</strong></p>
                                                <p class="text-muted">
                                                    
                                                    Requested Kennel : <strong>{{ boarding.booking_data.requested_kennel }}</strong>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p class="text-muted">Contact : <strong>{{ boarding.booking_data.customer.cell_phone }}</strong></p>
                                                <p class="text-muted">Total Price: <strong class="text-success">$ {{ boarding.booking_data.price||0 }}</strong></p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p class="text-muted">Booking Range : <strong>{{ moment(boarding.booking_data.start_date).format("DD MMM YYYY") }} 
                                                    to {{ moment(boarding.booking_data.ending_date).format("DD MMM YYYY") }}</strong></p>
                                                <p class="text-muted">Total Days: <strong>{{ boarding.booking_data.stay_day }} Days</strong></p>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead style="background-color: antiquewhite;">
                                                        <tr>
                                                            <td>#</td>
                                                            <td>Pet Name</td>
                                                            <td>Assigned Kennel</td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(pet_data,p) in boarding.pet_data" :key="p">
                                                            <td>{{ p+1 }}</td>
                                                            <td>{{ pet_data.pet.name }}</td>
                                                            <td>{{ pet_data.kennel_id }}</td>
                                                            <td>
                                                                <button @click="printData(boarding.booking_data.id,pet_data.id)" class="btn btn-sm btn-outline-success" title="Print Pet Info"><i class="fas fa-print"></i></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                             <router-link class="btn btn-sm btn-warning" :to="{name: 'boarding.edit', params:{ id: boarding.booking_data.id }}">Details</router-link>
                                        </div>
                                    </div>
                                </div>


                                <!-- Paginate -->
                                <div class="col-md-12">
                                    <div class="row justify-content-center">
                                        <pagination :data="paginateData" @pagination-change-page="getPendingBoarding"></pagination>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center">
                                <h4 class="text-danger">No Booking Records found</h4>
                            </div>
                </div>


              </div>
              <div class="card-footer text-center">
                  <router-link :to="{name: 'boarding.list'}" class="btn btn-outline-success">View All Approved Bookings</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            boardings: [],
            paginateData: {},
            is_loading: true,
            moment: moment,
        }
    },
    methods:{
        getPendingBoarding(page = 1){
            axios.get("/admin/api/get-pending-bookings-boarding?page="+page)
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.paginateData = data.paginate;
                this.boardings = data.main_data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
    },
    created() {
        this.getPendingBoarding();
    },
}
</script>

<style>

</style>