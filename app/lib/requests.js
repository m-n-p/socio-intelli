import axios from "axios";

const instance = axios.create({
  baseURL: " https://mnpai.montaignelabs.com/mnpai",
});
const getRequest = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error in GET request: ${error}`);
    const axiosError = error;
    return (
      axiosError?.response?.data || { error: "An error occurred", status: 500 }
    );
  }
};

const postRequest = async (endpoint, data) => {
  try {
    console.log(data, "prev data");
    const response = await instance.post(endpoint, data, {
      withCredentials: true,
    });
    console.log(response, "final response");
    return response.data;
  } catch (error) {
    console.error(`Error in POST request: ${endpoint} ${error}`);
    const axiosError = error;
    return (
      axiosError?.response?.data || { error: "An error occurred", status: 500 }
    );
  }
};

const isError = (data) => {
  return data.error !== undefined && data.status !== undefined;
};

export { getRequest, postRequest, isError };
