import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "@firebase/auth";
import { projectAuth } from "../../firebase/config";
export const auth = {
  state: () => {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("USER", state.user);
    },
  },
  actions: {
    async signup(context, { email, password, displayName }) {
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      await updateProfile(res.user, { displayName });

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
      await signOut();
      context.commit("setUser", null);
    },
  },
};
