<template>
  <div class="row">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>Boarding List</h4>
              </div>
              <div class="card-body">
                  <div class="row">
                      <div class="col-sm-8 col-md-6 col-12">
                          <div class="form-group">
                                <label class="form-label">Filter By</label>
                                <div class="selectgroup w-100">
                                    <label class="selectgroup-item">
                                    <input @change="getBoardingData" type="radio" name="radio1" value="onprogress" class="selectgroup-input-radio" checked="">
                                    <span class="selectgroup-button">On Going</span>
                                    </label>
                                    <label class="selectgroup-item">
                                    <input @change="getBoardingData" type="radio" name="radio1" value="canceled" class="selectgroup-input-radio">
                                    <span class="selectgroup-button">Canceled</span>
                                    </label>
                                    <label class="selectgroup-item">
                                    <input @change="getBoardingData" type="radio" name="radio1" value="completed" class="selectgroup-input-radio">
                                    <span class="selectgroup-button">Completed</span>
                                    </label>
                                </div>
                            </div>
                      </div>
                      <div class="col-md-12">
                          <div class="row" v-if="is_loading">
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
                              </div>
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
                              </div>
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
                              </div>
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
                              </div>
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
                              </div>
                              <div class="col-md-6">
                                  <skeleton width="100%" height="200px"/>
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
                                            <div class="justify-content-between d-flex">
                                                <p class="text-muted">Customer Name : <strong>{{ boarding.booking_data.customer.first_name + " "+boarding.booking_data.customer.last_name }}</strong></p>
                                                <p>
                                                    <span v-if="boarding.booking_data.status=='onprogress'" class="badge badge-pill badge-warning">On Progress</span>
                                                    <span v-if="boarding.booking_data.status=='canceled'" class="badge badge-pill badge-danger">Canceled</span>
                                                    <span v-if="boarding.booking_data.status=='completed'" class="badge badge-pill badge-success">Completed</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p class="text-muted">Contact : <strong>{{ boarding.booking_data.customer.cell_phone }}</strong></p>
                                                <p class="text-muted">Total Price: <strong class="text-success">$ {{ boarding.booking_data.price }}</strong></p>
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
                                                            <td>Kennel ID</td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(pet_data,p) in boarding.pet_data" :key="p">
                                                            <td>{{ p+1 }}</td>
                                                            <td>{{ pet_data.pet.name }}</td>
                                                            <td>{{ pet_data.kennel_id }}</td>
                                                            <td>
                                                                <button @click="printData(boarding.booking_data.id,pet_data.pet_id)" class="btn btn-sm btn-outline-success" title="Print Pet Info"><i class="fas fa-print"></i></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button v-if="boarding.booking_data.status=='onprogress'"
                                             class="btn btn-sm btn-danger" @click="changeStatus(boarding.booking_data.id,'canceled',i)">Cancel</button>
                                            <button v-if="boarding.booking_data.status=='onprogress'"
                                             class="btn btn-sm btn-primary" @click="changeStatus(boarding.booking_data.id,'completed',i)">Finish</button>
                                             <router-link v-if="boarding.booking_data.status!='draft'" class="btn btn-sm btn-warning" :to="{name: 'boarding.edit', params:{ id: boarding.booking_data.id }}">
                                                 Details</router-link>
                                             <button @click="deleteBooking(i,boarding.booking_data.id)" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i> Delete</button>
                                        </div>
                                    </div>
                                </div>


                                <!-- Paginate -->
                                <div class="col-md-12">
                                    <div class="row justify-content-center">
                                        <pagination :data="paginateData" @pagination-change-page="getBoardingData"></pagination>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center">
                                <h4 class="text-danger">No Booking Records found</h4>
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
    data(){
        return{
            is_loading: true,
            boardings: [],
            moment: moment,
            paginateData: {},
        }
    },
    created(){
        this.getBoardingData();
    },
    methods:{
        getBoardingData(page = 1){
            this.is_loading = true;
            let type = $('input[name="radio1"]:checked').val();
            // Get data
            axios.get("/admin/api/get-all-boarding-booking?page="+page,{
                params:{
                    type : type
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.boardings = data.main_data;
                this.paginateData = data.paginate;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        changeStatus(bookingId,status,index){
            axios.post("/admin/api/change-boarding-status",{
                bookingId: bookingId,
                status: status
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.boardings.splice(index,1);
                    swal.fire("success",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        printData(bookingId,petId){
            window.open("/admin/api/print-pet-info?petId="+petId+"&bookingId="+bookingId).focus();
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
                            this.boardings.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    });

                }
            });
        }
    }
}
</script>

<style>

</style>