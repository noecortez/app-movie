import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		'Authorization': 'Bearer ' + import.meta.env.VITE_TOKEN
	}
});

export { axiosInstance };
