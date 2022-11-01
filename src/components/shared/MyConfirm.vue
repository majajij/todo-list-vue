<template>
  <div>
    <div
      v-show="show_confirm"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

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
              <slot name="m-body" />
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
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
                  @click="onCancel"
                >
                  No
                </button>
                <button
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
                  @click="onOk"
                >
                  Yes
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
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

let show_confirm = computed(() => store.state.show_confirm);

const emit = defineEmits(["action"]);

const onOk = () => {
  // emit("action", true);
  console.log("OK");
};

const onCancel = () => {
  store.commit("SHOW_CONFIRM", false);
};
</script>

<style lang="scss" scoped>
</style>