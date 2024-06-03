//@ts-ignore
import axios from 'axios';

//@ts-ignore
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.baseUrl

    const { username, password } = await readBody(event)

    try {

        const response = await axios.post(`${baseURL}iam/login`, {
          username,
          password
        });

        return response.data

    } catch (error) {

      console.error('Error logging in:', error);

      throw createError({
          statusCode: error.response?.status || 500,
          statusMessage: error.message
    })
    }
});

