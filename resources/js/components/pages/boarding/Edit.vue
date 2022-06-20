<template>
  <section class="section">
    <div class="row">
      <div class="col-md-12">
        <!-- Skeleton -->
        <div class="card" v-if="is_loading">
          <div class="card-header d-flex justify-content-between">
            <skeleton width="10%" height="20px" />
            <skeleton width="30%" height="20px" />
          </div>
          <div class="card-body">
            <div class="mt-3 d-flex justify-content-between">
              <skeleton width="40%" height="20px" />
              <skeleton width="40%" height="20px" />
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <skeleton width="40%" height="20px" />
              <skeleton width="40%" height="20px" />
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <skeleton width="40%" height="20px" />
              <skeleton width="40%" height="20px" />
            </div>
            <div class="row mt-4">
              <div class="col-md-12 mt-2" v-for="n in 4" :key="n">
                <skeleton width="100%" height="30px" />
              </div>
            </div>
          </div>
        </div>
        <!-- Main -->
        <div class="card" v-if="!is_loading">
          <div class="card-header d-flex justify-content-between">
            <span class="text-muted">Booking ID #{{ boarding.booking_data.id }}</span>
            <span
              >Booking Date :
              <strong>{{
                moment(boarding.booking_data.created_at).format("DD MMM YYYY, hh:mm a")
              }}</strong></span
            >
          </div>
          <div class="card-body">
            <div class="justify-content-between d-flex">
              <p class="text-muted">
                Customer Name :
                <strong>{{
                  boarding.booking_data.customer.first_name +
                  " " +
                  boarding.booking_data.customer.last_name
                }}</strong>
              </p>
              <p>
                <span
                  v-if="boarding.booking_data.status == 'onprogress'"
                  class="badge badge-pill badge-warning"
                  >On Progress</span
                >
                <span
                  v-if="boarding.booking_data.status == 'canceled'"
                  class="badge badge-pill badge-danger"
                  >Canceled</span
                >
                <span
                  v-if="boarding.booking_data.status == 'completed'"
                  class="badge badge-pill badge-success"
                  >Completed</span
                >
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-muted">
                Contact : <strong>{{ boarding.booking_data.customer.cell_phone }}</strong>
              </p>
              <p class="text-muted">
               <span v-if="boarding.booking_data.status != 'pending'" @click="priceEditMode=true;" title="Edit Price" style="cursor: pointer;"><i class="fas fa-edit"></i></span> Total Price: <strong class="text-success">$ {{ boarding.booking_data.price||0 }}</strong>
              </p>
            </div>
            <!-- price form -->
            <form @submit.prevent="updatePrice" v-if="priceEditMode">
              <div class="row mb-3 justify-content-end">
                <div class="col-3">
                  <div class="input-group input-group-sm mb-3">
                    <input type="number" class="form-control" placeholder="Set your price..." aria-label="Recipient's username" v-model="priceForm.price" 
                    :class="{'is-invalid' : priceForm.errors.has('price')}">
                    <div class="input-group-append">
                      <Button :form="priceForm" class="btn btn-success pl-4 pr-4" type="submit" title="Update"><i class="fas fa-check"></i></Button>
                    </div>
                    <div class="input-group-append">
                      <button @click="priceEditMode=false;" class="btn btn-danger pl-4 pr-4" type="button" title="Cancel"><i class="fas fa-times"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- end -->

            <div class="d-flex justify-content-between">
              <p class="text-muted">
                Booking Range :
                <strong
                  >{{ moment(boarding.booking_data.start_date).format("DD MMM YYYY") }} to
                  {{
                    moment(boarding.booking_data.ending_date).format("DD MMM YYYY")
                  }}</strong>
                  <span @click="editDateRange=true;" class="ml-4" style="cursor: pointer;" title="Edit date range"><i class="fas fa-edit"></i> </span>
              </p>
              <p class="text-muted">
                Total Days: <strong>{{ boarding.booking_data.stay_day }} Days</strong>
              </p>
            </div>
            <form v-if="editDateRange" @submit.prevent="updateDateRange">
              <div class="row mb-3">
                <div class="col-3 mt-3">
                  <label for="">Start Date :</label>
                  <input type="date" class="form-control" v-model="dateRangeForm.startDate">
                </div>
                <div class="col-3 mt-3">
                  <label for="">End Date :</label>
                  <input type="date" class="form-control" v-model="dateRangeForm.endDate">
                </div>
                <div class="col-12 mt-3">
                  <Button :form="dateRangeForm" class="btn btn-sm btn-success">Update</Button>
                  <button class="btn btn-sm btn-danger" @click="editDateRange=false;">Cancel</button>
                </div>
              </div>
            </form>
            <div class="d-flex justify-content-between">
              <p class="text-muted">
                Drop Off Time : <strong class="text-warning">{{ boarding.booking_data.checkIn?moment(boarding.booking_data.checkIn).format("DD MMM YYYY - hh:mm A"):'N/A' }}</strong>
                <br>
                <br>
                <button v-if="dropForm.dropForm==false && boarding.booking_data.status!='pending'" @click="dropForm.dropForm=true" class="btn btn-outline-primary">Set Drop Time</button>
              </p>
              <p class="text-muted">
                Pick Up Time: <strong class="text-warning">{{ boarding.booking_data.checkOut?moment(boarding.booking_data.checkOut).format("DD MMM YYYY - hh:mm A"):'N/A' }}</strong>
                <br>
                <br>
                <button v-if="checkOut.checkOutForm==false && boarding.booking_data.status!='pending'" @click="checkOut.checkOutForm=true" class="btn btn-outline-primary">Set Pick Up Time</button>
              </p>
            </div>
            <div class="row justify-content-start" v-if="dropForm.dropForm==true">
              <div class="col-md-4">
                <p>Drop Off Time</p>
                <form @submit.prevent="checkIn">
                  <div class="form-group">
                    <input type="datetime-local"  class="form-control" v-model="dropForm.date">
                  </div>
                  <div class="form-group">
                    <Button :form="dropForm" class="btn btn-sm btn-success">Set</Button>
                    <button type="button" @click="dropForm.dropForm=false; dropForm.reset()" class="btn btn-sm btn-danger">Cancel</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="row justify-content-end" v-if="checkOut.checkOutForm==true">
              <div class="col-md-4">
                <p>Pick up Time</p>
                <form @submit.prevent="checkOutData">
                  <div class="form-group">
                    <input type="datetime-local"  class="form-control" v-model="checkOut.date">
                  </div>
                  <div class="form-group">
                    <Button :form="checkOut" class="btn btn-sm btn-success">Set</Button>
                    <button type="button" @click="checkOut.checkOutForm=false; checkOut.reset()" class="btn btn-sm btn-danger">Cancel</button>
                  </div>
                </form>
              </div>
            </div>





            <template>
              <p v-if="boarding.booking_data.checkIn==null && boarding.booking_data.status=='onprogress'" class="text-warning"><strong><i class="fas fa-circle"></i> Waiting For Customer Check in</strong></p>
              <p v-else-if="boarding.booking_data.checkIn!=null && boarding.booking_data.status=='onprogress'" class="text-success"><strong><i class="fas fa-circle"></i> Reservation Started</strong></p>
              <p v-else-if="boarding.booking_data.checkIn!=null && boarding.booking_data.status=='completed'" class="text-success"><strong><i class="fas fa-circle"></i> Booking was completed</strong></p>
              <p v-else-if="boarding.booking_data.status=='canceled'" class="text-danger"><strong><i class="fas fa-circle"></i> Booking was canceled</strong></p>
              <p v-else-if="boarding.booking_data.status=='pending'" class="text-warning"><strong><i class="fas fa-circle"></i> Waiting for approval</strong></p>
            </template>

            <div class="table-responsive">
              <table class="table">
                <thead style="background-color: antiquewhite">
                  <tr>
                    <td>#</td>
                    <td>Pet Name</td>
                    <td>Assigned Kennel</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pet_data, p) in boarding.pet_data" :key="p">
                    <td>{{ p + 1 }}</td>
                    <td>{{ pet_data.pet.name }}</td>
                    <td width="20%">
                      <select class="form-control" v-if="pet_data.kennel_id==null || kennelEditMode" v-model="kennelData.assignedKennels[p].kennel_id">
                        <option value="" hidden>Assign a kennel</option>
                        <option v-for="(kennel,i) in kennels" :key="i" :value="kennel.unique_id">{{ kennel.title }}</option>
                      </select>
                      <strong v-else-if="pet_data.kennel_id != null && !kennelEditMode">{{ pet_data.kennel_id }}</strong>


                    </td>
                    <td>
                      <button
                        @click="printData(boarding.booking_data.id, pet_data.pet_id)"
                        class="btn btn-sm btn-outline-success"
                        title="Print Pet Info"
                      >
                        <i class="fas fa-print"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="boarding.booking_data.status != 'pending'">
                    <td></td>
                    <td></td>
                    <td>
                      <template v-if="!kennelEditMode">
                        <button class="btn btn-sm btn-info" @click="kennelEditMode=true"><i class="fas fa-edit"></i> Edit Kennels</button>
                      </template>

                      <template v-else>
                        <button @click="updateKennels" class="btn btn-sm btn-success"><i class="fas fa-check"></i> Save</button>
                        <button class="btn btn-sm btn-danger" @click="kennelEditMode=false"><i class="fas fa-times"></i> Cancel</button>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row mt-4" v-if="boarding.booking_data.status == 'pending'">
              <div class="col-md-6">
                <label for="">Set Price</label>
                <input type="number" class="form-control" placeholder="$" v-model="kennelData.price">
              </div>
            </div>

            <div class="row mt-4" v-if="boarding.booking_data.status != 'pending'">
              <div class="col-md-12 text-center">
                <a :href="'/admin/api/print-boarding-contract?boardingId='+boarding.booking_data.id" target="_blank" class="btn btn-outline-secondary"><i class="fas fa-print"></i> Download Contract</a>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button v-if="boarding.booking_data.checkIn == null && boarding.booking_data.status !='pending' && boarding.booking_data.status !='canceled'" @click="checkIn" class="btn btn-sm btn-success">Check In</button>
            <button :disabled="kennelData.busy"
              v-if="boarding.booking_data.status == 'pending'||boarding.booking_data.status=='pending'"
              class="btn btn-sm btn-success"
              @click="approveBoarding"
            > <span v-if="kennelData.busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
              Approve
            </button>
            <button
              v-if="boarding.booking_data.status == 'onprogress'||boarding.booking_data.status=='pending'"
              class="btn btn-sm btn-danger"
              @click="changeStatus(boarding.booking_data.id, 'canceled')"
            >
              Cancel
            </button>
            <button
              v-if="boarding.booking_data.status == 'onprogress'"
              class="btn btn-sm btn-primary"
              @click="changeStatus(boarding.booking_data.id, 'completed')"
            >
              Finish
            </button>
            <div class="row mt-5" v-if="kennelError">
              <div class="col-md-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Warning!</strong> &nbsp; Please assign kennels for all pets.
                  <button type="button" @click="kennelError=false" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="row mt-3" v-if="priceError">
              <div class="col-md-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Warning!</strong> &nbsp; Please set a price for this booking.
                  <button type="button" @click="priceError=false" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="row mt-3 mb-4" v-if="emailError">
              <div class="col-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <h4 class="alert-heading">Warning!</h4><button @click="emailError=false;emailErrorText='';" type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <p>This booking was approved successfully but there were some problem with the server</p>
                  <p class="ml-3"><strong>Possible Soulutions :</strong></p>
                  <ul>
                    <li>Try to set a default email account from <router-link :to="{name: 'admin-email'}">Email Setup</router-link></li>
                    <li>Try to add a new email</li>
                    <li>Check your email server configuration</li>
                    <li>Check your email credentials</li>
                    <li>Contact with developer for more support</li>
                  </ul>
                  <hr>
                  <p class="mb-0"><strong>ERROR_DETAILS</strong></p>
                  <p>{{ emailErrorText }}</p>
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
      boarding: {},
      moment: moment,
      is_loading: true,
      checkOut: new Form({
        date: '',
        checkOutForm: false,
        bookingId: this.$route.params.id,
      }),

      dropForm: new Form({
        date: "",
        dropForm: false,
        bookingId: this.$route.params.id,
      }),

      kennelData: new Form({
        boardingId: this.$route.params.id,
        price: "",
        assignedKennels: []
      }),
      priceForm: new Form({
        boardingId: this.$route.params.id,
        price: "",
      }),
      kennelError: false,
      priceError: false,
      kennels: [],
      emailError: false,
      emailErrorText: "",
      editDateRange: false,
      dateRangeForm : new Form({
        boardingId: this.$route.params.id,
        startDate: '',
        endDate: '',
      }),
      priceEditMode: false,

      kennelEditMode: false,
      kennelUpdateForm: new Form([]),
    };
  },
  methods: {
    updateKennels(){
      this.kennelData.post("/admin/api/update-kennel").then(resp=>{
        return resp.data;
      }).then(data=>{
        if(data.status == "ok"){
          this.kennelEditMode = false;
          this.kennelData.assignedKennels.forEach((item,i)=>{
            this.boarding.pet_data[i].kennel_id = item.kennel_id;
          });
          swal.fire("Update successfull",data.msg,"success");
        }
      }).catch(err=>{
        console.error(err.response.data);
      })
    },
    kennelEdit(index){
      this.kennelEditMode = true;
      this.kennelEditIndex = index;
    },
    updatePrice(){
      this.priceForm.post("/admin/api/update-boarding-price").then(resp=>{
        return resp.data;
      }).then(data=>{
        if(data.status == "ok"){
          this.priceEditMode = false;
          this.boarding.booking_data.price = this.priceForm.price;
          swal.fire("Price updated",data.msg,"success");
        }
      }).catch(err=>{
        console.error(err.response.data);
      })
    },
    getBoardingData() {
      axios
        .get("/admin/api/get-boarding-data", {
          params: {
            bookingId: this.$route.params.id,
          },
        })
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
            this.boarding = data.main_data;

            this.boarding.pet_data.forEach((item,i)=>{
              this.kennelData.assignedKennels.push({
                boardingPetId: item.id,
                kennel_id: item.kennel_id,
              });
            })
            this.dateRangeForm.startDate = this.boarding.booking_data.start_date;
            this.dateRangeForm.endDate = this.boarding.booking_data.ending_date;
            this.priceForm.price = this.boarding.booking_data.price;

            this.is_loading = false;
          } else {
            this.$router.go(-1);
          }
        })
        .catch((err) => {
          console.error(err.response.data);
          this.$router.go(-1);
        });
    },
    printData(bookingId, petId) {
      window.open("/admin/api/print-pet-info?petId="+petId+"&bookingId="+bookingId).focus();
    },
    changeStatus(bookingId, status, index) {
      axios
        .post("/admin/api/change-boarding-status", {
          bookingId: bookingId,
          status: status,
        })
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
            swal.fire("success", data.msg, "success");
            this.boarding.booking_data.status = data.action;
          }
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },
    checkIn(){
      this.dropForm.post("/admin/api/boarding-check-in",{
        bookingId: this.$route.params.id
      }).then(resp=>{
        return resp.data;
      }).then(data=>{
        if(data.status == "ok"){
          this.dropForm.reset();
          this.boarding.booking_data.checkIn = data.checkIn;
        }
      }).catch(err=>{
        console.error(err.response.data);
      });
    },
    checkOutData(){
      this.checkOut.post("/admin/api/boarding-check-out")
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        if(data.status == "ok"){
          this.checkOut.reset();
          this.checkOut.checkOutForm=false;
          this.boarding.booking_data.checkOut = data.checkOut;
        }
      }).catch(err=>{
        console.error(err.response.data);
      })
    },
    
    approveBoarding(){
      this.kennelData.assignedKennels.forEach((item,i)=>{
        if(item.kennel_id == ""){
          this.kennelError = true;
        }
        else{
          this.kennelError = false;
        }
      });

      if(this.kennelData.price == ""){
        this.priceError = true;
      }
      else{
        this.priceError = false;
      }

      if(!this.kennelError && !this.priceError){
        this.kennelData.post("/admin/api/approve-boarding").then(resp=>{
          return resp.data;
        }).then(data=>{
          console.log(data);
          if(data.status == "ok"){
            swal.fire("Booking Approved",data.msg,"success");
            this.boarding.pet_data.forEach((item,i)=>{
              item.kennel_id = this.kennelData.assignedKennels[i].kennel_id;
            });
            this.boarding.booking_data.status = "onprogress";
          }
        }).catch(err=>{
          console.error(err.response.data);

          // 
          swal.fire("Booking Approved","Booking is now approved","success");
          this.boarding.pet_data.forEach((item,i)=>{
            item.kennel_id = this.kennelData.assignedKennels[i].kennel_id;
          });
          this.boarding.booking_data.status = "onprogress";

          this.emailError = true;
          this.emailErrorText = err.response.data.message;
        })
      }
    },
    getKennels(){
      axios.get("/admin/api/list-all-kennels").then(resp=>{
        return resp.data;
      }).then(data=>{
        this.kennels = data;
      }).catch(err=>{
        console.error(err.response.data);
      });
    },
    updateDateRange(){
      this.dateRangeForm.post("/admin/api/update-boarding-date-range")
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        if(data.status == "ok"){
          swal.fire("Updated",data.msg,"success");
          this.boarding.booking_data.start_date = this.dateRangeForm.startDate;
          this.boarding.booking_data.ending_date = this.dateRangeForm.endDate;
          this.editDateRange = false;
        }
      }).catch(err=>{
        console.error(err.response.data);
      })
    }
  },
  created() {
    this.getBoardingData();
    this.getKennels();
  },
};
</script>

<style></style>
