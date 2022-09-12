import { FetchGroceryData } from "./components/FetchGroceryData";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/fetch-grocery-data',
        element: <FetchGroceryData />
    }
];

export default AppRoutes;
