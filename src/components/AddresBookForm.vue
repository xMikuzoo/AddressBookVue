<template>
  <div class="q-pa-md" style="max-width: 400px">
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
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          @click="showNotif"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import axios from "axios";
import { AddEntry } from '../services/entryService.ts'

// const $q = useQuasar();
// function showNotif() {
//   $q.notify({
//     message: errMsg.value,
//     color: "purple",
//     });
//     }
//   const errMsg = ref("");

const firstName = ref(null);
const lastName = ref(null);
const login = ref(null);
const telephone = ref(null);
const email = ref(null);
const address = ref(null);
const city = ref(null);
const postalCode = ref(null);



async function postEntry() {
  // console.log(formData);
  await axios.post("/api/address-book", formData);
}

function onSubmit() {
  postEntry();
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
</script>

<style>
input[type="text"] {
  padding: 5px;
}

button {
  margin-top: 20px;
}
.q-input {
  margin: 20px;
}
</style>
