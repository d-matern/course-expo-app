import { atom } from "jotai";
import { UserModel, UserResponseModel } from "./user.model";
import { authAtom } from "../../auth/model/auth.state";
import axios, { AxiosError } from "axios";
import { API } from "../api/api";

export interface UserState {
    profile: UserModel | null;
    isLoading: boolean;
    error: string | null;
}

export const profileAtom = atom<UserState>({
    profile: null,
    isLoading: false,
    error: null,
});

export const loadProfileAtom = atom(
    async (get) => {
        return get(profileAtom);
    },
    async (get, set) => {
        const { accessToken } = await get(authAtom);
        set(profileAtom, {
            isLoading: true,
            profile: null,
            error: null,
        });

        try {
            const { data } = await axios.get<UserResponseModel>(API.profile, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            set(profileAtom, {
                isLoading: false,
                profile: data.profile,
                error: null,
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                set(profileAtom, {
                    isLoading: false,
                    profile: null,
                    error: error.response?.data.message,
                });
            }
        }
    },
);
