import React from "react";
import { SafeAreaView, Text } from "react-native";
import Config from 'react-native-config';


const Products = () => {
    return (
        <SafeAreaView>
            <Text>Products{Config.API_URL}</Text>
        </SafeAreaView>
    )
}

export default Products;