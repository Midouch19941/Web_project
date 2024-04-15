<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useReservationStore } from '../stores/reservation';

const authStore = useAuthStore()
const reservationStore = useReservationStore()



onMounted(async () => {
    await reservationStore.getReservation()

})


const data = ref({ customer_name: '', date: '', party_size: 0, time: '' })
const dialog = ref(false)
const submit = async () => {

    const datetimeObject = new Date(data.value.date);

    const year = datetimeObject.getFullYear();
    const month = String(datetimeObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const day = String(datetimeObject.getDate()).padStart(2, '0');
    const hours = String(datetimeObject.getHours()).padStart(2, '0');
    const minutes = String(datetimeObject.getMinutes()).padStart(2, '0');

    // Format the date and time strings
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}`;
    data.value.date = formattedDate;
    data.value.time = formattedTime;
    console.log(data.value)
    try {
        await reservationStore.addReservation(data.value)
        authStore.showSnack('Reservation created successfully');
        dialog.value = false
        await reservationStore.getReservation()
    }
    catch (e) {
        console.log(e);
    }
}


</script>

<template>

    <div style="background-color: rgb(254, 251, 246)">


        <v-container class="px-2 py-5">
            <v-row>
                <v-col class="d-flex items-center justify-space-between" cols="12">
                    <div>

                        <h2 class="pb-1 text-h4 font-weight-medium text-grey-darken-3">Reservations</h2>
                        <hr class="shortLine">
                    </div>
                    <v-btn @click="dialog = true" color="primary">Create Reservation
                        <v-dialog v-model="dialog" max-width="500">
                            <template v-slot:default="{ isActive }">
                                <v-card rounded="lg" width="500">
                                    <v-card-title class="d-flex justify-space-between align-center">
                                        <div class="text-h5 text-medium-emphasis ps-2">
                                            Create Reservation
                                        </div>

                                        <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                                    </v-card-title>

                                    <v-divider class="mb-4"></v-divider>
                                    <v-form fast-fail @submit.prevent @submit="submit">

                                        <v-card-text>
                                            <div class="text-medium-emphasis mb-4">
                                                Create your Reservation
                                            </div>


                                            <v-text-field variant="outlined" v-model="data.customer_name" type="text"
                                                :rules="[(e) => !!e || 'This field is required']"
                                                label="Name"></v-text-field>
                                            <v-text-field variant="outlined" v-model="data.party_size" type="number"
                                                :rules="[(e) => !!e || 'This field is required', (e) => e > 0 || 'Value must be greater than 0']"
                                                label="Party Size"></v-text-field>
                                            <v-text-field variant="outlined" v-model="data.date" type="datetime-local"
                                                :rules="[(e) => !!e || 'This field is required']"
                                                label="Party Size"></v-text-field>






                                        </v-card-text>

                                        <v-divider class="mt-2"></v-divider>

                                        <v-card-actions class="my-2 d-flex justify-end">
                                            <v-btn rounded="xl" text="Cancel"
                                                @click="isActive.value = false">Cancel</v-btn>

                                            <v-btn rounded="xl" color="primary" type="submit">Create</v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-btn>
                </v-col>
            </v-row>

            <div class="py-2">
                <v-table style="border: 1px solid gray;border-radius: 8px;">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Party Size
                            </th>
                            <th class="text-left">
                                Date
                            </th>
                            <th class="text-left">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, idx) in reservationStore.reservations" :key="idx">
                            <td>{{ item.customer_name }}</td>
                            <td>{{ item.party_size }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.time }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </v-container>


    </div>

</template>

<style scoped>
.myavatar {
    width: 350px;
    height: 350px;
    background-image: url("@/assets/avatar.png");
    background-size: cover;
}

.shortLine {
    width: 80px;
    border: 1px solid #444;
    margin-left: 0px;
}

.Card:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease-in-out;
}
</style>
