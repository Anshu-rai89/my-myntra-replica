import React from 'react';
import { useSelector } from 'react-redux';
import MyWishlist from './MyWishlist';
import styles from "./styles.module.css"
import { Navigate } from 'react-router';

const WishlistMainPage = () => {

    const userAuth = useSelector(state=>state.loginred.userAuth)

    // return userAuth ? (
        return (
        <div className={styles.navMargin} >
            <MyWishlist/>
            
        </div>
    ) 
    // : (
    //     <Navigate to="/login" />
    // )
};

export default WishlistMainPage;