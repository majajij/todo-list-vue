<template>
  <div>
    <div
      class="
        flex
        min-h-full
        items-center
        justify-center
        py-12
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="w-full max-w-md space-y-8">
        <div>
          <!-- <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> -->
          <h2
            class="
              mt-6
              text-center text-3xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Register
          </h2>
          <!-- <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >start your 14-day free trial</a
            >
          </p> -->
        </div>
        <!-- <input type="hidden" name="remember" value="true" /> -->
        <div class="rounded-md shadow-sm">
          <div class="mb-2">
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              v-model="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Full name ..."
            />
          </div>
          <!-- <div v-if="errors.name">
            {{ errors.name }}
          </div> -->
          <div class="mb-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Email address"
            />
          </div>
          <div class="mb-2">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Password"
            />
          </div>
          <div class="mb-2">
            <label for="confirm-password" class="sr-only"
              >Confirm Password</label
            >
            <input
              id="confirm-password"
              v-model="confirm_password"
              name="confirm-password"
              type="password"
              autocomplete="current-password"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div>
          <button
            class="
              group
              relative
              flex
              w-full
              justify-center
              rounded-md
              border border-transparent
              bg-indigo-600
              py-2
              px-4
              text-sm
              font-medium
              text-white
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
            @click="registerHandler"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

let email = ref("");
let password = ref("");
let confirm_password = ref("");
let name = ref("");

const errors = computed(() => {
  return {
    email: email.value === "" ? "Email field is required" : "",
    password: password.value === "" ? "Password field is required" : "",
    confirm_password:
      confirm_password.value === "" ? "Confirm password field is required" : "",
    name: name.value === "" ? "Name field is required" : "",
    pass_check:
      password.value != confirm_password.value
        ? "Password and confirm password should be the same"
        : "",
  };
});

const registerHandler = () => {
  const hasError = !Object.values(errors.value).every((e) => e === "");
  if (!hasError) {
    store
      .dispatch("register", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        alert(err.data.message);
        console.log(err.data.message);
      });
  } else {
    console.log(errors.value);
    //TODO add alert notifications toast
  }
};
</script>

<style lang="scss" scoped>
</style>