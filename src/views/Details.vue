<template>
  <div>
    <!-- <h1>Details</h1> -->
    <q-btn push color="blue" label="Go back" @click="goBack" />

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
    <q-btn push color="amber-13" label="Edit" @click="disable" />
    <q-btn
      push
      color="green-13"
      label="Update"
      @click="putEntry(entryId, telephone, email, address, city, postalCode)"
    />
    <q-btn push color="pink-13" label="Delete" @click="deleteEntry(id)" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { Entry } from "../services/entryService";
import { useRouter } from "vue-router";

const router = useRouter();

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

async function goBack() {
  await router.push(`/`);
}

async function getEntries(id: number): Promise<Entry> {
  return (await axios.get<Entry>(`/api/address-book/${id}`)).data;
}

async function putEntry(
  id: number,
  telephone: string,
  email: string,
  address: string,
  city: string,
  postalCode: string
) {
  const superHeroData = {
    id: id,
    telephone: telephone,
    email: email,
    address: address,
    city: city,
    postalCode: postalCode,
  };
  console.log(superHeroData);
  await axios.put("/api/address-book", superHeroData);
}

async function deleteEntry(id: number) {
  await axios.delete(`/api/address-book/${id}`);
  goBack();
}

async function loadEntry() {
  entry.value = await getEntries(prop.entryId);
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
