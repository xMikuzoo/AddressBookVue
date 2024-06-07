<template>
  <q-table :rows="newEntries" :columns="columns" @row-click="onRowClick">
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model.number="entryId"
        placeholder="Search id"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<style>
.q-btn {
  margin: 5px;
  margin-left: 0;
}
</style>
<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted, computed, Ref } from "vue";
import { useRouter } from "vue-router";
import { Entry } from "../services/entryService";

const router = useRouter();
const columns = [
  {
    label: "ID",
    field: "id",
    name: "id",
  },
  {
    label: "Imię ",
    field: "firstName",
    name: "firstName",
  },
  {
    label: "Nazwisko",
    field: "lastName",
    name: "lastName",
  },
  {
    label: "Login",
    field: "login",
    name: "Llogin",
  },
  {
    label: "E-mail",
    field: "email",
    name: "email",
  },
  {
    label: "Telefon",
    field: "telephone",
    name: "telephone",
  },
  {
    label: "Adres",
    field: "address",
    name: "address",
  },
  {
    label: "Miasto",
    field: "city",
    name: "city",
  },
  {
    label: "Kod pocztowy",
    field: "postalCode",
    name: "postalCode",
  },
];

function onRowClick(e: Event, entry: Entry) {
  router.push(`./details/${entry.id}`);
  console.log(e);
}

const entryId = ref<number>();

const entries: Ref<Entry[]> = ref([]);
const newEntries = computed(() => {
  if (entryId.value) {
    return entries.value.filter((x) => x.id === entryId.value);
  }
  return entries.value;
});

async function getEntries() {
  const response = await axios.get("/api/address-book");
  entries.value = response.data;
}

onMounted(() => {
  getEntries();
});
</script>
