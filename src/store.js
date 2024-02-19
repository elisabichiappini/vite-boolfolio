//creazione stato
import { reactive  } from "vue";

export const store = reactive ({
    responseData: {},
    project: {},
    projects: {
        searchKey: '',
    },
    baseUrl: 'http://127.0.0.1:8000',
    apiUrl: 
        {
            projects: '/api/projects'
        },
    storageImage: '/storage/',
    loandig: true,
})