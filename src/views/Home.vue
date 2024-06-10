<script setup lang="ts">
import AddressBookTable from "../components/AddressBookTable.vue";
import Form from "../components/AddresBookForm.vue";
import { ref, onMounted } from "vue";
import { Entry, entryServices } from "../services/entryService";

const { getEntries } = entryServices();
const entriesData = ref<Entry[]>([]);
const add = ref<boolean>(false);

function showAdd() {
  if (!add.value) add.value = true;
  else add.value = false;
}

async function reload()
{
  entriesData.value = await getEntries();
}

onMounted(async () => {
  entriesData.value = await getEntries();
});
</script>

<template>
  <div class="column">
    <AddressBookTable :entriesData="entriesData" />
    <br>
    <q-btn push color="green" label="Dodaj" @click="showAdd" />
    <Form  @reload="reload" class="self-center" v-if="add"></Form>
  </div>
</template>

<style>
.self-center {
  overflow: auto; min-width: 400px; max-width: 400px;
}
</style>
