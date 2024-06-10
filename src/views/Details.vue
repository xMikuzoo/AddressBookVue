<template>
  <div>
    <!-- <h1>Details</h1> -->

    <q-input hint="imię" outlined :disable="true" v-model="firstName" />
    <q-input hint="nazwisko" outlined :disable="true" v-model="lastName" />
    <q-input hint="login" outlined :disable="true" v-model="login" />
    <q-input hint="email" outlined :disable="isDisabled" v-model="email" />
    <q-input
      hint="telefon"
      outlined
      :disable="isDisabled"
      v-model="telephone"
    />
    <q-input hint="adres" outlined :disable="isDisabled" v-model="address" />
    <q-input hint="miasto" outlined :disable="isDisabled" v-model="city" />
    <q-input
      hint="kod pocztowy"
      outlined
      :disable="isDisabled"
      v-model="postalCode"
    />
    <q-btn push color="blue" label="Go back" @click="goBack" />
    <q-btn push color="amber-13" label="Edit" @click="disable" />
    <q-btn push color="green-13" label="Update" @click="onSubmit" />
    <q-btn push color="pink-13" label="Delete" @click="deleteEntry(id)" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Entry, entryServices } from "../services/entryService";

const { getEntry, deleteEntry, goBack, updateEntry } = entryServices();

const id = ref<number>(0);
const firstName = ref<string>("");
const lastName = ref<string>("");
const login = ref<string>("");
const email = ref<string>("");
const telephone = ref<string>("");
const address = ref<string>("");
const city = ref<string>("");
const postalCode = ref<string>("");

const isDisabled = ref<boolean>(true);
function disable() {
  if (isDisabled.value) isDisabled.value = false;
  else isDisabled.value = true;
}

const entry = ref<Entry>();

const prop = defineProps({
  entryId: {
    type: Number,
    required: true,
    default: 0,
  },
});

function onSubmit() {
  const formData = {
    id: id.value,
    telephone: telephone.value,
    email: email.value,
    address: address.value,
    city: city.value,
    postalCode: postalCode.value,
  };
  updateEntry(formData);
}

async function loadEntry() {
  entry.value = await getEntry(prop.entryId);
  if (entry.value) {
    id.value = entry.value.id;
    firstName.value = entry.value.firstName;
    lastName.value = entry.value.lastName;
    login.value = entry.value.login;
    email.value = entry.value.email;
    telephone.value = entry.value.telephone;
    address.value = entry.value.address;
    city.value = entry.value.city;
    postalCode.value = entry.value.postalCode;
  }
}
onMounted(async () => {
  loadEntry();
});
</script>
