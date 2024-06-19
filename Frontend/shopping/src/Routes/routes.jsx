import { createBrowserRouter } from "react-router-dom";
import ShopPage from "../Pages/ShopPage.jsx";
import ProductCategoryPage from "../Pages/ProductCategoryPage.jsx";
import ProductPage from "../Pages/ProductPage.jsx"
import ShopCartPage from "../Pages/ShopCartPage.jsx"
import LoginSignupPage from "../Pages/LoginSignupPage.jsx";
import App from '../App'
import kids_banner_image from '../Components/Assets/Kids_Image_Banner.png'
import mens_banner_image from '../Components/Assets/Mens_Image_Banner.png'
import womens_banner_image from '../Components/Assets/Womens_Image_Banner.png'
import RegisterPage from "../Pages/RegisterPage.jsx";
import UserProfile from "../Pages/UserProfile.jsx";

export const router = createBrowserRouter([

    // Register and Login
    {
        path: '/login',
        element: <LoginSignupPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ShopPage category="shop" />
            },
            {
                path: '/kids',
                element: <ProductCategoryPage banner={kids_banner_image} category="kids" />
            },
            {
                path: '/mens',
                element: <ProductCategoryPage banner={mens_banner_image} category="men" />
            },
            {
                path: '/womens',
                element: <ProductCategoryPage banner={womens_banner_image} category="women" />
            },
            {
                path: '/product/:id',
                element: <ProductPage />
            },
            {
                path: '/cart',
                element: <ShopCartPage />
            },
            {
                path : '/profile',
                element : <UserProfile/>
            }

        ]
    },
])

console.log(router)