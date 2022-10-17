import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from 'react-native-config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";


const Products = () => {
    const {error, loading, data} = useFetch(Config.API_URL)
    
    const renderProduct = ({ item }) => <ProductCard product={item}/>

    if(loading){
        return <ActivityIndicator size="large" />
    }

    if(error){
       return <Text>{error}</Text>
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Products;