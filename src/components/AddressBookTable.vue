<template>
  <q-table :rows="prop.entriesData" :columns="columns" @row-click="onRowClick" :filter="filter" :rows-per-page-options="[10,20,50,100]">
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
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
import { ref} from "vue";
import { useRouter } from "vue-router";
import { Entry } from "../services/entryService";

const router = useRouter();
const filter = ref<string>("")

const prop = defineProps<{
  entriesData: Entry[];
}>();

const columns = [
  {
    name: "id",
    label: "ID",
    field: "id",
    // align:'left'
  },
  {
    name: "firstName",
    label: "Imię ",
    field: "firstName",
    // align:'left'
  },
  {
    label: "Nazwisko",
    field: "lastName",
    name: "lastName",
    // align:'left'
  },
  {
    name: "Llogin",
    label: "Login",
    field: "login",
    // align:'left'
  },
  {
    name: "email",
    label: "E-mail",
    field: "email",
    // align:'left'
  },
  {
    name: "telephone",
    label: "Telefon",
    field: "telephone",
    // align:'left'
  },
  {
    name: "address",
    label: "Adres",
    field: "address",
    // align:'left'
  },
  {
    name: "city",
    label: "Miasto",
    field: "city",
    // align:'left'
  },
  {
    name: "postalCode",
    label: "Kod pocztowy",
    field: "postalCode",
    // align:'left'
  },
];

function onRowClick(e: Event, entry: Entry) {
  router.push(`./details/${entry.id}`);
  console.log(e);
}

// const entryId = ref<number>();
// const newEntries = computed(() => {
//   if (entryId.value) {
//     return entries.value.filter((x) => x.id === entryId.value);
//   }
//   return entries.value;
// });
</script>
