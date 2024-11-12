import axios from "axios";
import { toast } from "react-toastify";
import logger from './logService.js'


// this is some generic interceptor that works on the entire app and is responsible for informing the user about some errors
axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log(error);
        logger.log(error);
        toast.error("An unexpected error occurrred.");
    }

    return Promise.reject(error);
});

// by exporting these methods from here, we can use httpService in all the app, and later on we can change httpClient to be
// one different from Axios...and we will need to modify just in this place
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
