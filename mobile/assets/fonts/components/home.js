import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://ipinfo.io/222.127.36.61/geo`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <View style={styles.container}>
            {data && (
                <View style={styles.row}>
                    {renderItem("IP:", data.ip)}
                    {renderItem("City:", data.city)}
                    {renderItem("Region:", data.region)}
                    {renderItem("Country:", data.country)}
                    {renderItem("loc:", data.loc)}
                    {renderItem("Organization:", data.org)}
                    {renderItem("Postal:", data.postal)}
                    {renderItem("Timezone:", data.timezone)}
                </View>
            )}
        </View>
    );
}

const renderItem = (label, value) => (
    <View style={styles.column}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "center", // Center content horizontally
        flexWrap: "wrap", // Allow content to wrap to next line if needed
        marginBottom: 500 // Adjust margin as needed
    },
    column: {
        width: "45%", // Adjust width to accommodate content better
        marginBottom: 20
    },
    label: {
        fontWeight: "bold"
    },
    value: {
        marginTop: 5
    }
});
