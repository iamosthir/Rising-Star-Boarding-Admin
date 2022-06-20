<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4 class="text-muted">Pricing</h4>
                  </div>
                  <div class="card-body">
                      <form @submit.prevent="updatePrice">
                          <div class="row" v-if="is_loading1">
                              <div class="col-md-6 form-group">
                                  <label for="">Price Per Kennel for 1 night (USD)</label>
                                  <skeleton width="100%" height="40px" />
                              </div>
                              <div class="col-md-6 form-group">
                                  <label for="">Price for additional dog in same kennel (USD)</label>
                                  <skeleton width="100%" height="40px" />
                              </div>
                          </div>
                          <div class="row" v-if="!is_loading1">
                              <div class="col-md-6 form-group">
                                  <label for="">Price Per Kennel for 1 night (USD)</label>
                                  <input :class="{'is-invalid':priceForm.errors.has('per_kennel')}" type="number" class="form-control" v-model="priceForm.per_kennel">
                                  <HasError :form="priceForm" field="per_kennel" />
                              </div>
                              <div class="col-md-6 form-group">
                                  <label for="">Price for additional dog in same kennel (USD)</label>
                                  <input :class="{'is-invalid':priceForm.errors.has('additional_dog')}" type="number" class="form-control" v-model="priceForm.additional_dog">
                                  <HasError :form="priceForm" field="additional_dog" />
                              </div>
                              <div class="col-md-6 form-group">
                                  <Button class="btn btn-success" :form="priceForm" >Update</Button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4 class="text-muted">Dicscounts</h4>
                      <button @click="showCreateForm=true" class="btn btn-sm btn-primary"><i class="fas fa-plus"></i> Add</button>
                  </div>
                  <div class="card-body">
                      <div id="addForm" v-if="showCreateForm">
                          <form @submit.prevent="addDiscount">
                              <div class="row">
                                  <div class="col-md-6 form-group">
                                      <label for="">Booking Days</label>
                                      <input :class="{'is-invalid':discountPriceForm.errors.has('booking_day')}" type="number" class="form-control" v-model="discountPriceForm.booking_day" placeholder="Days..">
                                      <HasError :form="discountPriceForm" field="booking_day" />
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Will Charge for...</label>
                                      <input :class="{'is-invalid':discountPriceForm.errors.has('discount_day')}" type="number" class="form-control" v-model="discountPriceForm.discount_day" placeholder="Days..">
                                      <HasError :form="discountPriceForm" field="discount_day" />
                                  </div>
                                  <div class="col-md-12 form-group">
                                      <p v-if="discountPriceForm.booking_day && discountPriceForm.discount_day">
                                          <strong>For {{ discountPriceForm.booking_day }} Days booking, System will charge for {{ discountPriceForm.discount_day }} days</strong>
                                      </p>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <Button class="btn btn-success" :form="discountPriceForm" >Add</Button>
                                      <button type="button" class="btn btn-danger" @click="showCreateForm=false;discountPriceForm.reset();">Cancel</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div id="list" v-if="!showCreateForm">

                        <div class="row" v-if="is_loading2">
                            <div class="col-md-12" v-for="n in 5" :key="n">
                                <skeleton width="100%" height="40px" />
                            </div>
                        </div>

                        <div class="table-responsive" v-if="!is_loading2">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Booking Day</th>
                                        <th>Discount Day</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(disc,i) in discounts" :key="i">
                                        <td>{{ i+1 }}</td>
                                        <td>{{ disc.booking_day }} Days</td>
                                        <td>{{ disc.discount_day }} Days</td>
                                        <td>
                                            <button class="btn btn-sm btn-danger" @click="deleteDiscount(disc.id,i)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
    data(){
        return{
            is_loading1 : true,
            is_loading2 : true,
            priceForm: new Form({
                per_kennel: '',
                additional_dog: '',
            }),
            discountPriceForm: new Form({
                discount_day: '',
                booking_day: '',
            }),
            showCreateForm: false,
            discounts: [],
        }
    },
    methods:{
        getPricing(){
            axios.get("/admin/api/get-pricing").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.priceForm.per_kennel = data.price_per_kennel;
                this.priceForm.additional_dog = data.price_for_additional_dog;
                this.is_loading1 = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        updatePrice(){
            this.priceForm.post("/admin/api/update-price").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        getDiscounts(){
            axios.get("/admin/api/get-discount-list")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.discounts = data;
                this.is_loading2 = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        addDiscount(){
            this.discountPriceForm.post("/admin/api/add-discount-price").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.discountPriceForm.reset();
                    this.discounts.push(data.data);
                    this.showCreateForm = false;
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        deleteDiscount(id,index){
            swal.fire({
                title: "Are you sure?",
                text: "Once deleted can't be restored",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res=>{
                if(res.isConfirmed){
                    axios.post("/admin/api/delete-discount",{
                        id: id,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            swal.fire("Success",data.msg,"success");
                            this.discounts.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            })
        }
    },
    created() {
        this.getPricing();
        this.getDiscounts();
    },
}
</script>

<style>

</style>