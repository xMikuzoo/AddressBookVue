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
        <q-btn label="Submit" type="submit" color="primary" />
        <!-- @click="showNotif" -->
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

<script lang="ts" setup>
import { ref } from "vue";
import { entryServices } from "../services/entryService";

const { addEntry } = entryServices();

const firstName = ref(null);
const lastName = ref(null);
const login = ref(null);
const telephone = ref(null);
const email = ref(null);
const address = ref(null);
const city = ref(null);
const postalCode = ref(null);

const emit = defineEmits<{
    (e: "reload"):void
}>()

function onSubmit() {
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
  addEntry(formData);
  emit('reload');
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
