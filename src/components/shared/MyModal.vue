<template>
  <div>
    <div
      v-show="show"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="
            flex
            min-h-full
            items-end
            justify-center
            p-4
            text-center
            sm:items-center sm:p-0
          "
        >
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="
              relative
              transform
              overflow-hidden
              rounded-lg
              bg-white
              text-left
              shadow-xl
              transition-all
              sm:my-8 sm:w-full sm:max-w-lg
            "
          >
            <div class="font-bold p-3 text-center bg-gray-200">
              {{ title }}
            </div>
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <slot name="m-body"> </slot>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  @click="cancelFormHandler"
                  class="
                    mr-2
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-gray-500
                    py-2
                    px-4
                    text-sm
                    font-medium
                    text-white
                    shadow-sm
                    hover:bg-red-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                >
                  Cancel
                </button>
                <button
                  @click="submitFormHandler"
                  class="
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-indigo-600
                    py-2
                    px-4
                    text-sm
                    font-medium
                    text-white
                    shadow-sm
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";

const props = defineProps({ title: String, show: Boolean });

// console.log(props.show);

// const showModal = computed(() => props.show);

const emit = defineEmits(["action"]);

// const showSidebar = ref(true);
// const { breakpoints } = useBreakpoint();
// watch(breakpoints, (val) => {
//   showSidebar.value = !(val.is === "xs" || val.is === "sm");
//   emit("showsidebar", showSidebar.value);
// });
const submitFormHandler = () => {
  // console.log("submit form: " + task.value);
  emit("action", "save");
};

const cancelFormHandler = () => {
  // console.log("submit form: " + task.value);
  emit("action", "cancel");
};
</script>

<style lang="scss" scoped>
</style>