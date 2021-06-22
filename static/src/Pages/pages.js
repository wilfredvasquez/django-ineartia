import IndexPage from "./Index.Vue";
import Login from "./Auth/Login.Vue";
import Register from "./Auth/Register.Vue";
import Notes from "./Notes/Index.Vue";
import Details from "./Notes//Details.Vue";
import Edit from "./Notes//Edit.Vue";
import Create from "./Notes//Create.Vue";

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