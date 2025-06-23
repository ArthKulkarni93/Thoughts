import { create } from "zustand";
import { persist, combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { userSignin, userSignup } from "../Api";


type User = {
  email: string;
  username: string;
  role: string;
};

type State = {
  user: User | null;
  token: string | null;
};

type Actions = {
  login: (email: string, password: string) => Promise<{success: boolean}>;
  signup: (email: string, password: string, username: string) => Promise<{success: boolean}>;
  logout: () => void;
};

export const useUserStore = create(
  persist(
    immer(
      combine<State, Actions>(
        {
          user: null,
          token: null,
        },
        (set) => ({
          login: async (email: string, password: string) => {
            try {
              const res = await axios.post(userSignin, {
                email,
                password,
              });

              if (res.data.success) {
                set((state) => ({
                  user: res.data.user,
                  token: res.data.token,
                }));
                return {success: true}
              } else {
                console.log(res.data.msg);
                return {success: false}
              }
            } catch (error) {
              console.log("problem, try again");
              return {success: false}
            }
          },
          signup: async(email, password, username) => {
            try {
              const res = await axios.post(userSignup, {email, password, username})

              if(res && res.data.success) {
                set((state) => ({
                  user: res.data.user,
                  token: res.data.token
                }));
                return {success: true}
              }
              else {
                console.log(res)
                // console.log(res.data.msg);
                return {success: false}
              }
            } catch (error) {
              console.log("problem in signup, try again")
              return {success: false}
            }
          },
          logout: () => {
            set(() => ({
              user: null,
              token: null,
            }));
          },
        })
      )
    ),
    {
      name: "auth-store",
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);
