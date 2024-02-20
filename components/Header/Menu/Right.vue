<template>
  <div class="mx-1 pt-1">
    <div class="flex justify-end">
      <span class="mx-1 italic">Manager</span>
      <div class="text-center">
        <div style="display: flex; align-items: center" class="mx-2">
          <el-dropdown>
            <el-avatar src="ozula.jpg" style="height: 30px; width: 30px" />
            <template #dropdown>
              <el-dropdown-menu>
                <a href="#">Log out</a>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-switch
          v-model="isDark"
          class="pt-5"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
      </div>
    </div>

    <div class="flex pt-0">
      <!-- <div class="grow">hello 1</div>

      <div class="grow">hello 2</div>

      <div class="grow">hello 2</div> -->

      <!-- <div class="mx-auto">
        <el-switch
          v-model="isDark"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref, watch, onMounted } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
</style>
