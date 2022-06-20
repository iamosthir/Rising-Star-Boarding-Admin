<template>
  <div class="row">
      <div class="col-12">

          <div class="card">
            <div class="card-header d-flex justify-content-end">
                <router-link :to="{name: 'admin-email'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
            </div>
            <div class="card-body">
                <h3 class="text-muted text-center">Edit Email Configuration</h3>
                <form @submit.prevent="submitForm">
                    <div class="row justify-content-center mt-5">
                        <div class="col-md-7 mt-4">
                            <p class="mb-4 text-muted"><strong>HOST INFO</strong></p>
                            <label for="">HOST NAME</label>
                            <input type="text" class="form-control" placeholder="example.com" v-model="form.host">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">PORT NUMBER</label>
                            <input type="number" class="form-control" placeholder="e.g: 465" v-model="form.port">
                        </div>
            
                        <div class="col-md-7 mt-4">
                            <label for="">MAIL DRIVER (SMTP Recommended)</label>
                            <select class="form-control" v-model="form.driver">
                                <option value="smtp">SMTP</option>
                                <option value="mailgun">MAIL GUN</option>
                                <option value="sendmail">SEND MAIL</option>
                                <option value="postmark">POST MARK</option>
                            </select>
                        </div>

                        <div class="col-md-7 mt-4">
                            <label for="">ENCRYPTION TYPE (SSL Recommended | Use 'TLS' for GMAIL)</label>
                            <select class="form-control" v-model="form.encryption">
                                <option value="ssl">SSL</option>
                                <option value="tls">TLS</option>
                            </select>
                        </div>

                        <div class="col-md-7 mt-4">
                            <p class="mb-4 text-muted"><strong>USER CREDENTIALS</strong></p>
                            <label for="">USER EMAIL</label>
                            <input type="email" class="form-control" placeholder="youruser@name.com" v-model="form.user">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">CHANGE USER PASSWORD</label>
                            <input type="password" autocomplete="off" class="form-control" placeholder="Type your password" v-model="form.pass">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">SENDER EMAIL (Optional)</label>
                            <input type="email" class="form-control" placeholder="youruser@name.com" v-model="form.sender_email">
                        </div>
                        <div class="col-md-7 mt-4">
                            <label for="">SENDER NAME (Optional)</label>
                            <input type="text" class="form-control" placeholder="youruser@name.com" v-model="form.sender_name">
                        </div>
                        <div class="col-md-7 mt-4 mb-4 text-center">
                            <Button :form="form" class="btn btn-primary w-100"> UPDATE</Button>
                        </div>
                        <div class="col-md-7 mt-4 mb-4">
                            <AlertErrors :form="form" message="Something went wrong" />
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
                id: this.$route.params.id,
                host: '',
                port: '',
                driver: 'smtp',
                encryption: 'ssl',
                user: '',
                pass: '',
                sender_name: '',
                sender_email: '',
                defaultMail: true,
            }),
        }
    },
    methods: {
        getMail(){
            axios.get("/admin/api/get-email-data?id="+this.$route.params.id).then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    this.form.host = data.data.host;
                    this.form.port = data.data.port;
                    this.form.driver = data.data.driver;
                    this.form.encryption = data.data.encryption;
                    this.form.user = data.data.user_name;
                    this.form.sender_name = data.data.sender_name;
                    this.form.sender_email = data.data.sender_email;
                    this.form.defaultMail = data.data.default_email;
                }
                else{
                    this.$router.push({
                        name: "admin-email"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                        name: "admin-email"
                    });
            })
        },
        submitForm(){
            this.form.post("/admin/api/update-email").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Email Account updated",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
    },
    created() {
        this.getMail();
    },
}
</script>

<style>

</style>