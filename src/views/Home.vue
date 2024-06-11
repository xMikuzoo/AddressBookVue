<script setup lang="ts">
import AddressBookTable from "../components/AddressBookTable.vue";
// import Form from "../components/AddresBookForm.vue";
import { ref, onMounted } from "vue";
import { Entry, entryServices } from "../services/entryService";
// import { useQuasar } from "quasar";

const { getEntries } = entryServices();
const entriesData = ref<Entry[]>([]);
// const add = ref<boolean>(false);

// function showAdd() {
//   if (!add.value) add.value = true;
//   else add.value = false;
// }

async function reload() {
  entriesData.value = await getEntries();
}

onMounted(async () => {
  entriesData.value = await getEntries();
});

</script>

<template >
  <div class="column">
    <AddressBookTable  @reload="reload" :entriesData="entriesData" />
  </div>
</template>

<style>

</style>
