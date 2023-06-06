<template>
  <button
    @click="$emit('onClick')"
    class="d-inline-flex button-tertiary btn btn-tertiary btn-background"
    :type="action"
  >
    <div class="btn-fields">
      <div class="btn-text">
        {{ text }}
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
      required: true,
      validator(value: string): boolean {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
    action: {
      type: String,
      default: "button",
      required: false,
      validator(value: string): boolean {
        return ["button", "reset", "submit"].includes(value);
      },
    },
  },
});
</script>

<style scoped lang="scss" src="./Button.scss"></style>
