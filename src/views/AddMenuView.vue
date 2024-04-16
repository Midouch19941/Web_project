<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useMenuStore } from "../stores/menu";

const authStore = useAuthStore();
const menuStore = useMenuStore();

onMounted(async () => {
  await menuStore.getMenus();
});

const data = ref({ name: "", description: "" });
const dialog = ref(false);
const submit = async () => {
  console.log(data.value);
  try {
    await menuStore.addMenu(data.value);
    authStore.showSnack("menu created successfully");
    dialog.value = false;
    await menuStore.getMenus();
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div style="background-color: rgb(254, 251, 246)">
    <v-container class="px-2 py-5">
      <v-row>
        <!-- Menu Dialog -->
        <v-col class="d-flex items-center justify-space-between" cols="12">
          <div>
            <h2 class="pb-1 text-h4 font-weight-medium text-grey-darken-3">
              Menu
            </h2>
            <hr class="shortLine" />
          </div>
          <div>
            <v-btn @click="dialog = true" color="primary" class="mr-2"
              >Create new Menu
              <v-dialog v-model="dialog" max-width="500">
                <template v-slot:default="{ isActive }">
                  <v-card rounded="lg" width="500">
                    <v-card-title
                      class="d-flex justify-space-between align-center"
                    >
                      <div class="text-h5 text-medium-emphasis ps-2">
                        Create new Menu
                      </div>
                      <v-btn
                        icon="mdi-close"
                        variant="text"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-title>
                    <v-divider class="mb-4"></v-divider>
                    <v-form fast-fail @submit.prevent @submit="submit">
                      <v-card-text>
                        <div class="text-medium-emphasis mb-4">
                          Create a new menu
                        </div>
                        <v-text-field
                          variant="outlined"
                          v-model="data.name"
                          type="text"
                          :rules="[(e) => !!e || 'This field is required']"
                          label="Name"
                        ></v-text-field>
                        <v-textarea
                          variant="outlined"
                          v-model="data.description"
                          :rules="[(e) => !!e || 'This field is required']"
                          label="Description"
                        ></v-textarea>
                      </v-card-text>
                      <v-divider class="mt-2"></v-divider>
                      <v-card-actions class="my-2 d-flex justify-end">
                        <v-btn
                          rounded="xl"
                          text="Cancel"
                          @click="isActive.value = false"
                          >Cancel</v-btn
                        >
                        <v-btn rounded="xl" color="primary" type="submit"
                          >Create</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </template>
              </v-dialog>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <div class="py-2">
        <v-table style="border: 1px solid gray; border-radius: 8px">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in menuStore.Menus" :key="idx">
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
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
