import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { LoginRequestModel } from './auth-request.models';
import axios, { AxiosError } from 'axios';
import { LoginResponseModel } from './auth-response.models';
import { API } from '../api/api';

export interface AuthState {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
}

const INITIAL_STATE = {
    accessToken: null,
    isLoading: false,
    error: null
};
const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>(
    'auth',
    INITIAL_STATE,
    storage
);

export const loginAtom = atom(
    (get) => get(authAtom),
    async (_get, set, { email, password }: LoginRequestModel) => {
        set(authAtom, INITIAL_STATE);

        try {
            const { data } = await axios.post<LoginResponseModel>(API.login, {
                email,
                password
            });
            set(authAtom, {
                accessToken: data.accessToken,
                isLoading: false,
                error: null
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                set(authAtom, {
                    accessToken: null,
                    isLoading: false,
                    error: error.response?.data.message
                });
            }
        }
    }
);

export const logoutAtom = atom(
    null,
    (_get, set) => {
        set(authAtom, INITIAL_STATE);
    }
);