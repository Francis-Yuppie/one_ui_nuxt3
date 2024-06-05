//@ts-ignore
import axios from 'axios';

//@ts-ignore
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.baseUrl

    const { username, password } = await readBody(event)

    if (!username || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing Required fields'
        })
    }
    try {

        const response = await axios.post(`${baseURL}iam/login`, {
          username,
          password
        });

        return response.data

    } catch (error) {

      console.error('Error logging in:', error);

      throw createError({
          //@ts-ignore
          statusCode: error.response?.status || 500,
          //@ts-ignore
          statusMessage: error.message
    })
    }
});

