<template>
  <v-card>
    <div class="bg-red-500">
      <el-table
      style="background-color:red"
      row-class-name="text-gray-900 bg-red-900"
      header-cell-class-name="text-gray-800 font-bold"
       
      :data="displayData"
      :default-sort="
        tableSort
          ? { prop: tableSortBy, order: tableSortOrder }
          : { prop: '', order: '' }
      "
      :height="tableHeight"
      :table-layout="tableLayout"
      highlight-current-row
      @row-click="onRowClick"
    >
      <el-table-column
        class="tw-cursor-pointer"
        v-for="column in columns"
        :key="column.label"
        :label="column.label"
        :prop="column.prop"
        :formatter="column.formatter"
        :min-width="column.minWidth"
        :sortable="column.sortable"
      >
        <template #default="scope">
          <div v-if="column.funcProp" v-html="column.funcProp(scope.row)"></div>
        </template>
      </el-table-column>
      <el-table-column width="300" align="right">
        <template #header>
          <div class="mt-0 tw-relative tw-rounded-md tw-shadow-sm">
            <div
              class="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center tw-pointer-events-none"
            >
              <!-- <SearchIcon class="tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-600 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="handleSearch"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.6 19 21 21 19 17.6l-2-2a8 8 0 1 0-1.4 1.4z"
                />
              </svg>
            </div>

            <input
              v-model="search"
              type="search"
              class="bg-gray-100 appearance-none border-0 border-gray-100 rounded w-full py-2 px-4 pr-10 text-gray-400 leading-tight focus:outline-none focus:bg-gray-100"
              :placeholder="`Search by ${searchBy !== '' ? searchBy : 'name'}`"
            />
          </div>
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >Edit</el-button
          >
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="my-1 float-right">
      <el-pagination
        background
        @size-change="changePerPage"
        @current-change="changeCurrentPage"
        @currentPage="currentPage"
        :page-size="perPage"
        :page-sizes="[20, 30, 40, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    tableLayout: {
      type: String,
      default: "auto",
      required: false,
    },
    tableSort: {
      type: Boolean,
      default: false,
      required: false,
    },
    tableSortBy: {
      type: String,
      default: "",
      required: false,
    },
    tableSortOrder: {
      type: String,
      default: "asc",
      required: false,
    },
    tableHeight: {
      type: String,
      default: "70vh",
      required: false,
    },
    searchBy: {
      type: Array,
      default: ["name"],
      required: false,
    },
  },
  data() {
    return {
      filtered: [],
      search: "",
      page: 1,
      currentPage: 1,
      perPage: 20,
      total: 0,
    };
  },
  computed: {
    displayData() {
      if (this.search == null) return this.data;
      this.filtered = this.data.filter(
        (data) =>
          !this.search ||
          this.searchBy.some((item) =>
            data[item]
              .toString()
              .toLowerCase()
              .includes(this.search.toLowerCase())
          )
      );

      this.total = this.filtered.length;

      return this.filtered.slice(
        this.perPage * this.currentPage - this.perPage,
        this.perPage * this.currentPage
      );
    },
  },
  methods: {
    onRowClick(row) {
      this.$emit("rowclick", row);
    },
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("delete", row);
    },
    changeCurrentPage(val) {
      this.currentPage = val;
    },

    changePerPage(val) {
      this.perPage = val;
    },

    classChecker({ row, column }) {
    if (column.property === 'rate') {
      const val = row[column.property];
      if (val > 0 ) {
        return 'greenClass'
      } else {
        return 'redClass'
      }
    }
  },
  },
};
</script>

<!-- <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton> -->

<!-- <style scoped>
.el-table {
  color: black;
}
.el-table thead {
  color: black;
}
</style> -->