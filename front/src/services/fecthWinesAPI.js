import axios from "axios";

// Request Api for catch All Wines :

export async function fetchAllWines() {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
}

// Request Api for catch One Wine :

export async function fetchOneWine(id) {
    const response = await axios.get(`http://localhost:5000/wine/${id}`);
    console.log(typeof(response.data.winemaker.name)); 
    return response.data;
}








