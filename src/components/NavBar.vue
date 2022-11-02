<template>
  <div>
    <nav class="bg-slate-300 m-2 p-1 rounded-lg">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                rounded-md
                p-2
                text-gray-400
                hover:bg-gray-700 hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="
              flex flex-1
              items-center
              justify-center
              sm:items-stretch sm:justify-start
            "
          >
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto"
                src="../../public/to-do.png"
                alt="To Do"
              />
              <!-- <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> -->
              <!-- <span class="mdi mdi-format-title mdi-24px"></span> -->
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  v-for="menu in appMenu"
                  :key="menu.id"
                  class="
                    text-black-300
                    hover:bg-gray-700 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  aria-current="page"
                  @click="MenuClickHandler(menu.link)"
                  >{{ menu.name }}</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              sm:static sm:inset-auto sm:ml-6 sm:pr-0
            "
          >
            <button
              type="button"
              class="
                rounded-full
                bg-gray-500
                p-1
                text-white
                hover:bg-gray-800
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-gray-800
              "
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div @click="userMenuHandler" class="flex items-center">
                <button
                  id="user-menu-button"
                  type="button"
                  class="
                    flex
                    rounded-full
                    bg-gray-800
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-gray-800
                  "
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
                <div class="ml-2">{{ user.name }}</div>
              </div>
            </div>
          </div>
          <div>
            <span class="sm:ml-3">
              <button
                @click="logoutHandler"
                type="button"
                class="
                  inline-flex
                  items-center
                  rounded-md
                  border border-transparent
                  bg-red-700
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  hover:bg-red-800
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-700
                  focus:ring-offset-2
                "
              >
                <!-- Heroicon name: mini/check -->
                <i class="mdi mdi-logout mr-2" />
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div id="mobile-menu" class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="
              bg-gray-900
              text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Dashboard</a
          >

          <a
            href="#"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Team</a
          >

          <a
            href="#"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Projects</a
          >

          <a
            href="#"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Calendar</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

const store = useStore();

let user = store.getters.getUser;
let appMenu = ref(null);
const router = useRouter();
appMenu.value = [
  { id: "home", link: "home", name: "Home" },
  { id: "about", link: "about", name: "About" },
];

const userMenuHandler = () => {
  router.push("/profile");
};

const MenuClickHandler = (menu) => {
  router.push(menu);
};

const logoutHandler = () => {
  store
    .dispatch("logout")
    .then((res) => {
      // console.log("logout");
      router.push("/login").catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      notify({
        title: "Logout",
        type: "error",
        text: err.data.message,
      });
    });
};
</script>

<style lang="scss" scoped>
</style>