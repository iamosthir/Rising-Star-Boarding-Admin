<template>
  <section class="section">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h4>Continue Draft Booking</h4>
            <router-link tag="button" :to="{ name: 'booking.draft' }" class="raise-button">
                <i class="fas fa-arrow-left"></i> Go back
            </router-link>
          </div>
          <div class="card-body">
              <h6 class="text-muted">Customer Name: <strong class="text-success">{{ customer_data.first_name + " "+customer_data.last_name }}</strong></h6>
              <p class="text-muted">Booking Type : <strong class="text-warning">Boarding</strong></p>
              <hr>
              <form @submit.prevent="submit()">
                  <fieldset>
                    <legend>Choose Stay Days <span class="text-warning" v-if="form.totalDays"><strong>(Total : {{ form.totalDays }} days)</strong></span></legend>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="">Start Date <span class="text-danger"><strong>*</strong></span></label>
                        <input :class="{'is-invalid': form.errors.has('start_date')}" type="date" @change="getAvailableKennels" 
                        class="form-control" v-model="form.start_date" required>
                        <HasError :form="form" field="start_date" />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">End date <span class="text-danger"><strong>*</strong></span> </label>
                        <input :class="{'is-invalid': form.errors.has('end_date')}" type="date" @change="getAvailableKennels" 
                        class="form-control" v-model="form.end_date" required>
                        <HasError :form="form" field="end_date" />
                        
                      </div>
                      <div class="col-md-4 mb-3 my-form">
                        <label for="">Select the number of kennels</label>
                        <select class="form-control" v-model="form.requestedKennel">
                            <option value="1 Kennel with 1 dog">1 Kennel with 1 dog</option>
                            <option value="1 Kennel with 2 dog">1 Kennel with 2 dog</option>
                            <option value="1 Kennel with 3 dog">1 Kennel with 3 dog</option>
                            <option value="2 Kennel with 1 dog each">2 Kennel with 1 dog each</option>
                        </select>
                      </div>
                    </div>
                    <hr>
                  </fieldset>
                  <div class="text-right mb-2">
                      <router-link :to="{name: 'customer.profile', params: {customerId: customer_data.id}}" class="btn btn-outline-secondary">Update Customer & Dog Data</router-link>
                  </div>
                  <fieldset v-for="(fields,i) in dogFields" :key="i">
                      <legend>Dog {{ i+1 }}</legend>
                      <hr>
                      <div class="row">
                          <div class="col-md-4 form-group">
                              <label for="">Select Pet <span class="text-danger"><strong>*</strong></span></label>
                              <select required class="form-control" v-model="form.dogs[i].dog_id">
                                  <option value="" hidden>Select Pet</option>
                                  <option v-for="(pet,p) in pets" :key="p" :value="pet.id">{{ pet.name }} - {{ pet.color }}</option>
                              </select>
                          </div>
                          <div class="col-md-4 form-group">
                              <label for="">Assign Kennel <span class="text-danger"><strong>*</strong></span></label>
                              <select required class="form-control" v-model="form.dogs[i].kennel">
                                    <option value="" hidden>Choose Kennel</option>
                                    <option :value="kennel.unique_id" v-for="(kennel,n) in kennels" :key="n">{{ kennel.title }} - {{ kennel.unique_id }} - {{ kennel.size }}</option>
                              </select>

                          </div>
                      </div>
                  </fieldset>
                  
                  <div class="row">
                      <div class="col-md-4 form-group">
                          <button v-if="pets.length > 1 && pets.length != form.dogs.length"  type="button" @click.prevent="addField" 
                          class="btn btn-outline-secondary" title="Add another dog"><i class="fas fa-plus"></i></button>

                          <button v-if="dogFields > 1" type="button" @click.prevent="removeField" 
                            class="btn btn-outline-danger" title="Remove Last Row"><i class="fas fa-trash"></i></button>
                      </div>
                      <div class="col-md-12 form-group">
                        
                        <label for="">Note</label>
                        <textarea :class="{'is-invalid': form.errors.has('note')}" class="form-control" placeholder="Write..." v-model="form.note"></textarea>
                        <HasError :form="form" field="note" />
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="">Price ($) <span class="text-danger"><strong>*</strong></span></label>
                        <input :class="{'is-invalid': form.errors.has('price')}" type="number" class="form-control" v-model="form.price">
                        <HasError :form="form" field="price" />
                      </div>
                      <div class="col-md-12 form-group">
                          <Button :form="form" class="btn btn-success">Book Now</Button>
                      </div>
                  </div>
              </form>

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
      is_loading: true,
      customer_data: {},
      pets:[],
      dogFields: 1,
      kennels: [],
      form: new Form({
          dogs:[
            {
              dog_id : "",
              kennel: "",
            }
          ],
          bookingId : this.$route.params.bookingId,
          start_date: '',
          end_date: '',
          totalDays: '',
          price: "",
          note: "",
          requestedKennel: "1 Kennel with 1 dog",
      })
    };
  },
  created() {
    this.getBookingDetails();
    this.getAvailableKennels();
  },
  methods: {
    getBookingDetails() {
      axios
        .get("/admin/api/draft-booking-details", {
          params: {
            bookingId: this.$route.params.bookingId,
          },
        })
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {

            console.log(data);
          if (data.status == "ok") {
            this.customer_data = data.customer;
            this.pets = data.customer.pet;
            this.form.start_date = data.boardingData.start_date;
            this.form.end_date = data.boardingData.ending_date;
            this.form.requestedKennel = data.boardingData.requested_kennel;
            this.form.price = data.boardingData.price;
            this.form.note = data.boardingData.note;

          } else {
            this.$router.push({ name: "booking.draft" });
          }
        });
    },
    getAvailableKennels(){
      axios.get("/admin/api/list-all-kennels").then(resp=>{
          return resp.data;
        }).then(data=>{
          this.kennels = data;
        }).catch(err=>{
          console.error(err.response.data);
        });
    },
    addField(){
        this.form.dogs.push(
            {
                dog_id : "",
                kennel: "",
            }
        );
        this.dogFields +=1;
    },
    removeField(){
        this.form.dogs.pop();
        this.dogFields -= 1;
    },
    submit(){
      this.form.post("/admin/api/submit-draft-boarding-order")
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        console.log(data);
        if(data.status == "ok"){
          swal.fire("Success","New booking was successfull","success")
          .then(()=>{
            this.$router.push({name: 'boarding.list'});
          })
        }
        else{
          swal.fire("Failed","Something went wrong","error");
        }
      }).catch(err=>{
        console.error(err.response.data);
      })
    },
    calculatePrice(){
      this.workingOnPrice = true;
      this.form.post("/admin/api/calculate-price").then(resp=>{
        return resp.data;
      }).then(data=>{
        console.log(data);
        this.workingOnPrice = false;
        if(data.status == "ok"){
          this.price = data.price;
          this.discount = data.discountPrice;
          this.priceCalculated = true;
        }
      }).catch(err=>{
        console.error(err.response.data);
        this.workingOnPrice = false;
      })
    }
  },
};
</script>

<style></style>
