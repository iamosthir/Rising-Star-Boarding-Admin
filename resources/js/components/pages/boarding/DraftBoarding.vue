<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4>Draft bookings</h4>
                  </div>
                  <div class="card-body">

                      <div class="row" v-if="isLoading">
                          <div class="col-12" v-for="n in 10" :key="n">
                              <skeleton width="100%" height="30px" />
                          </div>
                      </div>

                      <div class="row" v-else>
                          <div class="col-12">
                              <div class="table-responsive">
                                  <table class="table table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>Booking ID</th>
                                              <th>Booking Date</th>
                                              <th>Customer Name</th>
                                              <th>Booking Range</th>
                                              <th>Requested Kennels</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(booking,i) in bookings" :key="i">
                                              <td>#{{ booking.booking_data.id }}</td>
                                              <td>{{ moment(booking.booking_data.created_at).format("DD MMM YYYY - hh:mm a") }}</td>
                                              <td>{{ booking.booking_data.customer.first_name + " " + booking.booking_data.customer.last_name }}</td>
                                              <td>
                                                  {{ moment(booking.booking_data.start_date).format("DD MMM YYYY") }} 
                                                    to {{ moment(booking.booking_data.ending_date).format("DD MMM YYYY") }}
                                              </td>
                                              <td>{{ booking.booking_data.requested_kennel }}</td>
                                              <td>
                                                  <router-link :to="{name: 'booking.draft-continue', params: {bookingId: booking.booking_data.id}}" class="btn btn-sm btn-primary">Continue with order</router-link>
                                                  <button @click="deleteBooking(i,booking.booking_data.id)"
                                                   class="btn btn-sm btn-danger">Delete</button>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <div class="col-md-12">
                                <div class="row justify-content-center">
                                    <pagination :data="paginateData" @pagination-change-page="getDraftBooking"></pagination>
                                </div>
                            </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {

    data() {
        return {
            bookings: [],
            isLoading: true,
            paginateData: {},
            moment: moment,
        }
    },

    methods: {
        getDraftBooking(page = 1) {

            this.isLoading = true;
            // Get data
            axios.get("/admin/api/get-all-boarding-booking?page="+page,{
                params:{
                    type : "draft"
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.bookings = data.main_data;
                this.paginateData = data.paginate;
                this.isLoading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })

        },
        deleteBooking(index,id){
            swal.fire({
                title: "Are you sure?",
                text: "Once deleted can't be restored",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res=>{
                if(res.isConfirmed) {
                    
                    axios.post('/admin/api/delete-boardng-booking',{
                        boardingId: id,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            swal.fire("Success",data.msg,"success");
                            this.bookings.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    });

                }
            });
        }
    },
    created() {
        this.getDraftBooking();
    }
}
</script>

<style>

</style>