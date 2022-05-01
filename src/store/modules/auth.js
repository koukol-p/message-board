import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "@firebase/auth";
import { addDoc, doc, setDoc } from "@firebase/firestore";
import { projectAuth, projectFirestore } from "../../firebase/config";
export const auth = {
  state: () => {
    return {
      user: null,
      authReady: false,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("USER", state.user);
    },
    setAuthReady(state, payload) {
      state.authReady = payload;
    },
  },
  actions: {
    async createUser(context, { displayName, id }) {
      await setDoc(doc(projectFirestore, "users", id), {
        displayName,
      });
    },
    async signup(context, { email, password, displayName }) {
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      await updateProfile(res.user, { displayName });
      await context.dispatch("createUser", { displayName, id: res.user.uid });

      context.commit("setUser", res.user);
    },

    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      context.commit("setUser", res.user);
    },
    async logout(context) {
      await signOut(projectAuth);
      context.commit("setUser", null);
    },
  },
};
