<script setup lang="ts">
import { useAuthStore } from "~/stores/userAuth";
import Swal from "sweetalert2";


const authStore = useAuthStore()

const isLoading = ref(false);
const username = ref("");
const email = ref("");
const password = ref("");
const loginRemember = ref(false)


type VARIANT = "LOGIN" | "REGISTER";

const variant = ref<VARIANT>("LOGIN");

const toggleVariant = () => {
  if (variant.value === "REGISTER") {
    variant.value = "LOGIN";
  } else {
    variant.value = "REGISTER";
  }
};

const onSubmit = async () => {
  if (variant.value === "LOGIN") {
    try {
      isLoading.value = true;

      await $fetch("/api/auth/", {
        method: "POST",
        body: {
          username: username.value,
          password: password.value,
        },
      })
      .then((response) => {

          //@ts-ignore
          console.log(response);

          //@ts-ignore
           authStore.setToken(response.dataPayload.data.token, response.dataPayload.data.username);
           useRouter().push("/backend/");
      })
      .catch((err) => {
          console.error(err)
      });

    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  } else {

    //Register the user
    try {
      isLoading.value = true;
      console.log('REGISTER')
 
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }
  
};


</script>

<template>
   <div class="text-center">
      <p class="mb-2">
          <!-- <i class="fa fa-2x fa-circle-notch text-primary"></i> -->
          <IconsCircle class="text-primary fs-1" />
      </p>
          <h1 class="h4 mb-1">{{ variant === "LOGIN" ? "Sign In" : "Register" }}</h1>
          <p class="fw-medium text-muted mb-3">
                  <!--any text-->
          </p>
    </div>
  <form @submit.prevent="onSubmit">
       <div class="py-3">
           <div class="mb-4">
              <Input
                    :disabled="isLoading"
                    type="email"
                    required
                    class="form-control form-control-lg form-control-alt"
                    id="username"
                    name="username"
                    placeholder="email@gmail.com"
                    v-model="email"
                    v-if="variant === 'REGISTER'"
              />
            </div>
           <div class="mb-4">
              <Input
                    :disabled="isLoading"
                    type="text"
                    required
                    class="form-control form-control-lg form-control-alt"
                    id="username"
                    name="username"
                    placeholder="Username"
                    v-model="username"
              />
        </div>
        <div class="mb-4">
            <Input
              :disabled="isLoading"
              type="password"
              required
              class="form-control form-control-lg form-control-alt"
              id="password"
              name="password"
              placeholder="password"
              v-model="password"
      />  
                    <!-- errors div -->
        </div>
        <div class="mb-4">
          <div class="d-md-flex align-items-md-center justify-content-md-between">
            <div class="form-check">
               <!-- <Input
                  type="checkbox"
                  :value="loginRemember"
                  id="loginRemember"
                  name="loginRemember"
                  class="form-check-input h-2"
                  v-model="loginRemember"
                /> -->
                 <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="login-remember"
                    name="login-remember"
                    v-model="loginRemember"
                 />
               <label class="form-check-label" :for="loginRemember">
                   Remember Me
                </label>
             </div>
             <div class="py-2">
                  <NuxtLink
                      to="/auth/Reminder2View"
                      class="fs-sm fw-medium"
                       v-if="variant === 'LOGIN'"
                      >Forgot Password?</NuxtLink
                        >
            </div>
          </div>
          <div class="d-md-flex align-items-md-center justify-content-md-between">
             <div class="py-2 text-primary cursor-pointer">
                    <div @click="toggleVariant">
            {{
              variant === "LOGIN"
                ? "Dont have an Account ?"
                : "Already have an account ?"
            }}
          </div>
            </div>
          </div>
         </div>
      </div>

         <div class="row justify-content-center">
              <div class="col-lg-6 col-xxl-5">
              <Button :disabled="isLoading" type="submit" class="btn w-100 btn-alt-primary">
                   <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                   {{ variant === "LOGIN" ? "Sign In" : "Register" }}
              </Button>
              </div>
        </div>
         
  </form>
</template>

<style>
  
</style>