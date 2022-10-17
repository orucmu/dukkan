import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from 'react-native-config';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";


const Products = () => {
    const {error, loading, data} = useFetch(Config.API_URL)
    
    const renderProduct = ({ item }) => <ProductCard product={item}/>

    if(loading){
        return <Loading />
    }

    if(error){
       return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Products;