import axios, {AxiosInstance} from "axios";

export const httpClient = (): AxiosInstance => {

    return axios.create({
            baseURL: 'http://localhost:3000',
            // baseURL: process.env.NEXT_PUBLIC_API_URL,
        });
}
