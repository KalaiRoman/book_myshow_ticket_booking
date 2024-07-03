import { Auth, Home, TicketSection } from "../../pages/Pages";
export const RoutingPathAll=[
    {
        id:1,
        name:"Home",
        path:"/",
        element:<Home/>,
        exactpath:""
            },
    {
id:2,
name:"Ticket",
path:"/ticket/:name",
element:<TicketSection/>,
exactpath:""
    },
    {
        id:3,
        name:"Login",
        path:"/login",
        element:<Auth/>,
        exactpath:""
            }
];

