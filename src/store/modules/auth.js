import { createUserWithEmailAndPassword } from "@firebase/auth";
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
      context.commit("setUser", res.user);
    },
  },
};
