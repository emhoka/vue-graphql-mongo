<template>
  <div class="flex flex-col bg-indigo-500 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 animate__animated animate__fadeInUp">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Reset Password
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <FormInput placeholder="Enter your email" name="email" id="email" type="email" title="Your Email"
                      required="true" />
                  <FormInput placeholder="••••••••" name="password" id="password" type="password" title="New Password"
                      required="true" />
                      <FormInput placeholder="••••••••" name="resetpassword" id="resetpassword" type="password" title="Confirm Password"
                      required="true" />
                  <ButtonComponent type="submit" buttonText="Update" />
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     <a href="#"
                          class="font-medium text-indigo-500 hover:underline dark:text-blue-500"><router-link to="/signin" class="nav-link">Back to login page</router-link></a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</template>
  
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormInput from "@/components/FormInput.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
@Component({
  components: {
      FormInput,
      ButtonComponent
  }
})
export default class ResetPassword extends Vue {

}

</script>