<script setup lang="ts">
import AddressBookTable from "../components/AddressBookTable.vue";
import Form from "../components/AddresBookForm.vue";
import { ref } from "vue";

const add = ref<boolean>(false);
function showAdd() {
  if (!add.value) add.value = true;
  else add.value = false;
}
// import Form from "../components/SuperHeroesForm.vue";



</script>

<template>
  <div class="">
    <AddressBookTable/>
    <q-btn push color="green" label="Dodaj" @click="showAdd" />
    <Form v-if="add"></Form>
    </div>
</template>
