//creazione stato
import { reactive  } from "vue";

export const store = reactive ({
    projects : [],
    baseUrl: 'http://127.0.0.1:8000',
    apiUrl: 
        {
            projects: '/api/projects'
        },
    loandig: true,
})