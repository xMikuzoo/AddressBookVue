<template >
  <q-table class=""
    :rows="prop.entriesData"
    :columns="columns"
    @row-click="onRowClick"
    :filter="filter"
    :rows-per-page-options="[10 - 20 - 50]"
  >
    <template v-slot:top-right>
      <q-input
        outlined
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
        class="q-ma-sm"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn push color="green" label="Dodaj" @click="dialog = true" />
      <q-dialog v-model="dialog" >
        <q-card class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="firstName"
              label="imię *"
              hint="imię"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />

            <q-input
              filled
              v-model="lastName"
              label="nazwisko *"
              hint="nazwisko"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />

            <q-input
              filled
              v-model="login"
              label="login *"
              hint="login"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />

            <q-input
              filled
              v-model="telephone"
              label="telefon *"
              hint="telefon"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />
            <q-input
              filled
              v-model="email"
              label="e-mail *"
              hint="e-mail"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />
            <q-input
              filled
              v-model="address"
              label="adres *"
              hint="adres"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />
            <q-input
              filled
              v-model="city"
              label="miasto *"
              hint="miasto"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />
            <q-input
              filled
              v-model="postalCode"
              label="kod pocztowy *"
              hint="kod pocztowy"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Proszę podać dane']"
            />

            <div>
              <q-btn v-close-popup label="Submit" type="submit" color="primary" />
              <!-- @click="showNotif" -->
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
              <q-btn v-close-popup label="Close" color="primary" />
            </div>
          </q-form>
        </q-card>
      </q-dialog>
    </template>
    <!--  -->
    <template v-slot:body-cell-delete="sdf">
      <q-td auto-width>
        <q-btn
          push
          color="red"
          label="Usuń"
          @click.stop="deleteEn(sdf.row.id)"
        />
      </q-td>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Entry } from "../services/entryService";
import { entryServices } from "../services/entryService";

const { deleteEntry, addEntry } = entryServices();

const dialog = ref(false);
const firstName = ref(null);
const lastName = ref(null);
const login = ref(null);
const telephone = ref(null);
const email = ref(null);
const address = ref(null);
const city = ref(null);
const postalCode = ref(null);

async function deleteEn(id: number) {
  await deleteEntry(id);
  emit("reload");
}

const emit = defineEmits<{
  (e: "reload"): void;
}>();

async function onSubmit() {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    login: login.value,
    telephone: telephone.value,
    email: email.value,
    address: address.value,
    city: city.value,
    postalCode: postalCode.value,
  };
  await addEntry(formData);
  emit("reload");
}

function onReset() {
  (firstName.value = null),
    (lastName.value = null),
    (login.value = null),
    (telephone.value = null),
    (email.value = null),
    (address.value = null),
    (city.value = null),
    (postalCode.value = null);
}

const router = useRouter();
const filter = ref<string>("");

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
    name: "Login",
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
  {
    name: "delete",
    label: "",
    field: "delete",
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
