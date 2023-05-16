import React from "react";

import { Text, StyleSheet, View, Button } from "react-native";

const Inicio = ({ navigation }) => { //Al destructurar navigation de los props tenemos acceso a los mismos


    const informacion = {
        clienteId: 200,
        totalPagar: 500
    }



    const visitarNosotros = () => {
        navigation.navigate('Nosotros', informacion) //se pueden pasar objetos con elmetodo navigate, despues se sacan en la view
    }

    return (

        <View style={styles.container}>
            <Text>Inicio</Text>
            <Button
                title="Ir a nosotros"
                color='#F4511E'
                onPress={() => visitarNosotros()}
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

export default Inicio