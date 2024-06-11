
import axios from "axios";
import { useRouter } from "vue-router";
export interface Entry {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  telephone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface AddEntry {
  addEntry: Entry
}

export function entryServices(): any {
  const router = useRouter();

  async function getEntries(): Promise<Entry[]> {
    return (await axios.get<Entry[]>("/api/address-book")).data;
  }

  async function getEntry(id: number): Promise<Entry> {
    return (await axios.get<Entry>(`/api/address-book/${id}`)).data;
  }

  async function addEntry(formData: Entry) {
    // console.log(formData);
    // const addEntry = {
    //   addEntry: formData
    // } as AddEntry
    await axios.post("/api/address-book", formData).catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
      }
    });
  }
  async function updateEntry(formData: Entry) {
    //console.log(formData);
    await axios.put("/api/address-book", formData);
  }

  async function deleteEntry(id: number) {
    await axios.delete(`/api/address-book/${id}`);
    goBack();
  }

  async function goBack() {
    await router.push(`/`);
  }

  return { getEntries, getEntry, addEntry, deleteEntry, goBack, updateEntry };
}
