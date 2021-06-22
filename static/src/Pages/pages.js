import IndexPage from "./Index.vue";
import Login from "./Auth/Login.vue";
import Register from "./Auth/Register.vue";
import Notes from "./Notes/Index.vue";
import Details from "./Notes//Details.vue";
import Edit from "./Notes//Edit.vue";
import Create from "./Notes//Create.vue";

const pages = {
    'Index': IndexPage,
    'Login': Login,
    'Register': Register,
    'Notes': Notes,
    'Details': Details,
    'Edit': Edit,
    'Create': Create
}

export default pages;