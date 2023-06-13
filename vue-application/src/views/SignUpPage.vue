<template>
    <div class="flex bg-indigo-500 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <FormInput placeholder="Enter your first name" name="firstname" id="firstname" type="text" title="First Name"
                        required="true" />
                        <FormInput placeholder="Enter your last name" name="lastname" id="lastname" type="text" title="Last Name"
                        required="true" />
                    <FormInput placeholder="Enter your email" name="email" id="email" type="email" title="Your Email"
                        required="true" />
                    <FormInput placeholder="••••••••" name="password" id="password" type="password" title="Password"
                        required="true" />
                    <FormInput placeholder="••••••••" name="confirm-password" id="confirm-password" type="password"
                        title="Confirm Password" required="true" />
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <CheckBoxComponent id="terms" type="checkbox" required="true" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                    class="font-medium text-indigo-500 hover:underline dark:text-blue-500" href="#"><router-link to="/userprofile" class="nav-link">Terms and
                                    Conditions</router-link></a></label>
                        </div>
                    </div>
                    <ButtonComponent type="submit" buttonText="Create an account"  />
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#"
                            class="font-medium text-indigo-500 hover:underline dark:text-blue-500"><router-link to="/signin" class="nav-link">Login here</router-link></a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormInput from "@/components/FormInput.vue";
import CheckBoxComponent from "@/components/CheckBoxComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
@Component({
    components: {
        FormInput,
        CheckBoxComponent,
        ButtonComponent
    }
})
export default class SignUpPage extends Vue {
showNotificationModal= false;


}

</script>