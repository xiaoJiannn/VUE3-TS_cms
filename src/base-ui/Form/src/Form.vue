<template>
  <div class="wjFrom">
    <slot name="header"></slot>
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="Layout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              class="form-item"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  style="width: 100%"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :modelValue="modelValue[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import Iform from "./types";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    formItem: {
      type: Array as PropType<Iform[]>,
      /* eslint-disable */
      default: () => [],
      /* eslint-disable */
    },
    Layout: {
      type: Object,
      default: () => {
        return {
          xl: 6, // >1920px 4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24,
        };
      },
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue });
    // watch(
    //   formData,
    //   (newVal) => {
    //     emit("update:modelValue", newVal);
    //   },
    //   {
    //     deep: true,
    //   }
    // );
    // return {
    //   formData,
    // };
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value });
    };
    return { handleValueChange };
  },
});
</script>
<style scoped>
.wjFrom {
  padding-top: 25px;
}
.form-item {
  padding: 5px 20px;
}
</style>
