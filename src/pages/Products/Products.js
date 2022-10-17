import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from 'react-native-config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';


const Products = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data: productData } = await axios.get(Config.API_URL);
            setData(productData);
            setLoading(false);
        } catch (err) {
            setError(err.message)
            setLoading(false);
            
        }
    };


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