import React from "react";


import { Text, StyleSheet, View, Button } from "react-native";

const Nosotros = ({ navigation, route }) => { //Al destructurar navigation de los props tenemos acceso a los mismos
    

    const { clienteId, totalPagar } = route.params //Aca accedo al objeto que envié desde inicio, se le pueden pasar entre pantallas estados y funciones tambien
    

    const volver = () => {
        //navigation.navigate('Inicio')
        navigation.goBack()
        //navigation.push('Inicio')
    }
    
    return (

        <View style={styles.container}>
            <Text>ID:{clienteId} TOTAL: {totalPagar}</Text>
            <Button 
                title="Volver"
                onPress={ () => volver() }
            />
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Nosotros