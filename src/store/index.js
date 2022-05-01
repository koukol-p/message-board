import { onAuthStateChanged } from "@firebase/auth";
import { createStore } from "vuex";
import { projectAuth } from "../firebase/config";
import { auth } from "./modules/auth";

const store = createStore({
  modules: { auth: auth },
});

const unsubscribe = onAuthStateChanged(projectAuth, (user) => {
  store.commit("setAuthReady", true);
  store.commit("setUser", user);
  console.log(user);
});
unsubscribe();

export default store;
