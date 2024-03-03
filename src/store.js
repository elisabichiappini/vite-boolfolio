//creazione stato
import { reactive  } from "vue";

export const store = reactive ({
    // responseData: {},
    project: {},
    projects: {
        currentPage: 1, //null
        searchKey: null, // ''
    },
    baseUrl: 'http://127.0.0.1:8000',
    apiUrl: 
        {
            projects: '/api/projects',
            storageImage: '/storage',
            comments: '/api/comments'
        },
    loandig: true,
})

export default store;