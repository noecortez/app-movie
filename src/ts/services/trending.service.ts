import { AxiosResponse } from "axios";
import { axiosInstance } from "../config";
import { Trending } from "../interfaces/trending.interface";

const getTrendingAll = async (): Promise<Trending> => {
	try {
		const response: AxiosResponse<Trending> = await axiosInstance.get(
			"/trending/all/day?language=es-SV"
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error("Error getting trending all");
	}
};

export { getTrendingAll };
