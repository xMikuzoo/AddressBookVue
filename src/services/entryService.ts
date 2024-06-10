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

export function entryServices(): any {
  const router = useRouter();

  async function getEntries(): Promise<Entry[]> {
    return (await axios.get<Entry[]>("/api/address-book")).data;
  }

  async function getEntry(id: number): Promise<Entry> {
    return (await axios.get<Entry>(`/api/address-book/${id}`)).data;
  }

  async function addEntry(formData: any) {
    // console.log(formData);
    await axios.post("/api/address-book", formData);
  }
  async function updateEntry(formData: any) {
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
