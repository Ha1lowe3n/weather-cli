import axios from "axios";
import https from "https";
import { getValueByKey, TOKEN_DICTIONARY } from "./storage.service.js";

export const getWeather = async (city) => {
    const token = await getValueByKey(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error(
            "Не задан ключ API, задайте его через команду -t [API-KEY]"
        );
    }

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
            params: {
                q: city,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    console.log(data);
};
