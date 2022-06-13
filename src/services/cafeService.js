import axios from 'axios';

export const cafeService = {
    getCafe: (cafeId = 1) => {
        return axios.get(`http://127.0.0.1:8000/api/cafes/${cafeId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })},
}