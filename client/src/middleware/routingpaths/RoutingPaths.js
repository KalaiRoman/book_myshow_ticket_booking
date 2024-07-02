import { Auth, Home } from "../../pages/Pages";
export const RoutingPathAll=[
    {
id:1,
name:"Home",
path:"/",
element:<Home/>,
exactpath:"exact"
    },
    {
        id:2,
        name:"Login",
        path:"/login",
        element:<Auth/>,
        exactpath:""
            }
];

