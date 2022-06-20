<template>
  <div class="row">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>Contact Information</h4>
              </div>
              <div class="card-body">
                  <form @submit.prevent="updateData">
                      <p class="text-muted"><b>Google Map Information</b></p>
                      <hr>
                      <div class="row">
                          <div class="col-md-6 mt-3">
                              <label for="">Map Latitude</label>
                              <input type="text" class="form-control" placeholder="Latitude" v-model="form.lat">
                          </div>
                          <div class="col-md-6 mt-3">
                              <label for="">Map Longitude</label>
                              <input type="text" class="form-control" placeholder="Longitude" v-model="form.lng">
                          </div>
                      </div>

                      <p class="text-muted mt-5"><b>Other Information</b></p>
                      <hr>
                      <div class="row">

                        <div class="col-md-4 form-group">
                            <label>Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                </div>
                                <input type="text" class="form-control phone-number" placeholder="Office Address" v-model="form.address">
                            </div>
                        </div>

                        <div class="col-md-4 form-group">
                            <label>Phone Number (US Format)</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-phone"></i>
                                </div>
                                </div>
                                <input type="text" class="form-control" placeholder="Phone Number" v-model="form.phone">
                            </div>
                        </div>

                        <div class="col-md-4 form-group">
                            <label>Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                </div>
                                <input type="email" class="form-control" placeholder="Email" v-model="form.email">
                            </div>
                        </div>

                      </div>

                      <p class="text-muted mt-5"><b>Social Information</b></p>
                      <hr>
                      <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Facebook</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Facebook" v-model="form.fb">
                                </div>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Instagram</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Instagram" v-model="form.insta">
                                </div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Twitter</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Twitter" v-model="form.twitter">
                                </div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Linkedin</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Linkedin" v-model="form.linkedin">
                                </div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Youtube</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Youtube" v-model="form.youtube">
                                </div>
                            </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 form-group">
                              <Button :form="form" class="btn btn-success">Update</Button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form: new Form({
                lat: "",
                lng: "",
                address: "",
                phone: "",
                email: "",
                fb: "",
                insta: "",
                twitter: "",
                linkedin: "",
                youtube: "",
            }),
        }
    },
    methods:{
        updateData(){
            this.form.post("/admin/api/update-contact-data")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Data updated",data.msg,"success")
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        getContact(){
            axios.get("/admin/api/get-contact-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.form.lat = data.lat;
                this.form.lng = data.lng;
                this.form.address = data.address;
                this.form.phone = data.mobile;
                this.form.email = data.email;
                this.form.fb = data.fb;
                this.form.insta = data.insta;
                this.form.twitter = data.twitter;
                this.form.linkedin = data.linkedin;
                this.form.youtube = data.yt;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
    },
    created() {
        this.getContact();
    },
}
</script>

<style>

</style>