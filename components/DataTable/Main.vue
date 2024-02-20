<template>
  <div class="my-0">
    <DataTableDynamic
      :data="data"
      :columns="columns"
      table-layout="fixed"
      table-height="80vh"
      @edit="handleEdit"
      @delete="handleDelete"
      @rowclick="handleEdit"
      :search-active="true"
      :table-sort="true"
      :table-sort-by="'name'"
      :table-sort-order="'asc'"
      :search-by="['name', 'email']"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    for (let i = 1; i <= 100; i++) {
      this.data.push({
        name: `Person ${i}`,
        product: `Product${(i % 5) + 1}`,
        mobile: `1234567${i.toString().padStart(2, "0")}`,
        email: `person${i}@example.com`,
        type: i % 2 === 0 ? "TypeA" : "TypeB",
        count: i,
      });
    }
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          prop: "name",
          sortable: true,
        },
        {
          label: "Type",
          prop: "type",
          sortable: true,
        },
        {
          label: "Product",
          prop: "product",
          sortable: true,
        },
        {
          label: "Contact Number",
          prop: "mobile",
          sortable: true,
        },
        {
          label: "Email",
          prop: "email",
          sortable: true,
        },
      ],

      data: [
        // { name: "John Doe", email: "john.doe@example.com" },
        // { name: "Alice Smith", email: "alice.smith@example.com" },
        // { name: "Bob Johnson", email: "bob.johnson@example.com" },
        // { name: "Eva Brown", email: "eva.brown@example.com" },
        // // Add more rows as needed
        // { name: "Michael Johnson", email: "michael.johnson@example.com" },
        // { name: "Sara Davis", email: "sara.davis@example.com" },
        // { name: "Daniel White", email: "daniel.white@example.com" },
        // { name: "Emily Wilson", email: "emily.wilson@example.com" },
        // { name: "Ryan Martinez", email: "ryan.martinez@example.com" },
        // { name: "Emma Lee", email: "emma.lee@example.com" },
        // { name: "David Young", email: "david.young@example.com" },
        // { name: "Olivia Lewis", email: "olivia.lewis@example.com" },
        // { name: "Matthew Harris", email: "matthew.harris@example.com" },
        // { name: "Ava Clark", email: "ava.clark@example.com" },
        // { name: "Jacob Scott", email: "jacob.scott@example.com" },
        // { name: "Sophia Robinson", email: "sophia.robinson@example.com" },
        // { name: "Liam Walker", email: "liam.walker@example.com" },
        // { name: "Chloe Perez", email: "chloe.perez@example.com" },
        // { name: "Mason Mitchell", email: "mason.mitchell@example.com" },
        // { name: "Amelia Nelson", email: "amelia.nelson@example.com" },
        // { name: "Benjamin Baker", email: "benjamin.baker@example.com" },
        // { name: "Harper Green", email: "harper.green@example.com" },
        // { name: "Ethan Carter", email: "ethan.carter@example.com" },
        // { name: "Ella Adams", email: "ella.adams@example.com" },
        // { name: "Alexander Hill", email: "alexander.hill@example.com" },
        // { name: "Grace King", email: "grace.king@example.com" },
        // { name: "James Evans", email: "james.evans@example.com" },
        // { name: "Avery Allen", email: "avery.allen@example.com" },
        // { name: "Aiden Nelson", email: "aiden.nelson@example.com" },
        // { name: "Luna Hughes", email: "luna.hughes@example.com" },
        // { name: "Lucas Turner", email: "lucas.turner@example.com" },
        // { name: "Zoe Hill", email: "zoe.hill@example.com" },
        // { name: "Madison Reed", email: "madison.reed@example.com" },
        // { name: "Liam Murphy", email: "liam.murphy@example.com" },
        // { name: "Lily Simmons", email: "lily.simmons@example.com" },
        // { name: "Noah Foster", email: "noah.foster@example.com" },
        // { name: "Mia Butler", email: "mia.butler@example.com" },
        // { name: "Oliver Wright", email: "oliver.wright@example.com" },
        // { name: "Ava Collins", email: "ava.collins@example.com" },
        // { name: "Lucas Campbell", email: "lucas.campbell@example.com" },
        // { name: "Ella Hamilton", email: "ella.hamilton@example.com" },
        // { name: "Henry Russell", email: "henry.russell@example.com" },
        // { name: "Sophie Turner", email: "sophie.turner@example.com" },
        // { name: "Jackson Ward", email: "jackson.ward@example.com" },
        // { name: "Aria Cole", email: "aria.cole@example.com" },
        // { name: "Logan Morgan", email: "logan.morgan@example.com" },
      ],
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row.id);
    },
  },
};
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
