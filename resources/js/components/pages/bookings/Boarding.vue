<template>
  <section class="section">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h4>Bookings For Boarding</h4>
            <router-link tag="button" :to="{ name: 'booking.new' }" class="raise-button">
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
                  <fieldset v-for="(fields,i) in dogFields" :key="i">
                      <legend>Dog {{ i+1 }}</legend>
                      <hr>
                      <div class="row">
                          <div class="col-md-4 form-group">
                              <label for="">Select Pet <span class="text-danger"><strong>*</strong></span></label>
                              <select class="form-control" v-model="form.dogs[i].dog_id">
                                  <option value="" hidden>Select Pet</option>
                                  <option v-for="(pet,p) in pets" :key="p" :value="pet.id">{{ pet.name }} - {{ pet.color }}</option>
                              </select>
                          </div>
                          <div class="col-md-4 form-group">
                              <label for="">Assign Kennel <span class="text-danger"><strong>*</strong></span></label>
                              <select class="form-control" v-model="form.dogs[i].kennel">
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
                        <input :class="{'is-invalid': form.errors.has('price')}" 
                        type="number" class="form-control" v-model="form.price"
                        :required="form.draft==false?true:false">
                        <HasError :form="form" field="price" />
                      </div>
                      <div class="col-md-12 form-group">
                        <label for="draftCheck"><input id="draftCheck" type="checkbox" v-model="form.draft"> Save this booking as draft</label>
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
          customer_id : this.$route.params.id,
          start_date: '',
          end_date: '',
          totalDays: '',
          price: "",
          note: "",
          requestedKennel: "1 Kennel with 1 dog",
          draft: false,
      })
    };
  },
  created() {
    this.getCustomerDetails();
    this.getAvailableKennels();
  },
  methods: {
    getCustomerDetails() {
      axios
        .get("/admin/api/get-customer-data", {
          params: {
            customer_id: this.$route.params.id,
          },
        })
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
            this.customer_data = data.data;
            this.pets = data.data.pet;

          } else {
            this.$router.push({ name: "booking.new" });
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
      this.form.post("/admin/api/submit-boarding-order")
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        console.log(data);
        if(data.status == "ok"){
          swal.fire("Success",data.msg,"success")
          .then(()=>{
            if(data.draft == true) {
              this.$router.push({name: 'booking.draft'});
            }
            else {
              this.$router.push({name: 'boarding.list'});
            }
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
