import axios from 'axios';

export const cafesService = {
    fetchCafes: () => (axios.get('http://127.0.0.1:8000/api/cafes/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }
})),
}