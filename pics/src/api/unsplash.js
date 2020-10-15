import axios from 'axios'

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: `Client-ID NCOYwbvxs_HrYSjK95BNoMPS5EyxbMyRsACAXWmO6DY`
    }
})