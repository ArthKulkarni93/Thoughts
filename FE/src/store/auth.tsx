import { create } from "zustand";
import { persist, combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { userSignin } from "../Api";

const BASE_URL = "http://localhost:4001/api/v1";

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
  login: (email: string, password: string) => Promise<void>;
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
              } else {
                console.log(res.data.msg);
              }
            } catch (error) {
              console.log("problem, try again");
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
