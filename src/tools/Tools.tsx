import {API_ENDPOINT_URL, DEVELOPMENT_MODE} from "../configuration";

export function getUrl(path: string) {
    return DEVELOPMENT_MODE ? path : (API_ENDPOINT_URL + path);
}