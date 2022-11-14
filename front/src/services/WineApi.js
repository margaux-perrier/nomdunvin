import axios from "axios";
import apiInstance from "./instance";


//* Request Api for catch All Wines : * //

export async function fetchAllWines() {
    try {
        const [wine] = await Promise.all ([
        axios.get('http://localhost:5000'),
        ]);
        const dataWines = [wine];
        return dataWines; 

} catch (error) {
    console.error(error);
}
}

export async function filterWines() {
    try {
        const [culture, region, winemaker, style, grapevariety, dish] = await Promise.all ([

        axios.get('http://localhost:5000/culture'),
        axios.get('http://localhost:5000/region'),
        axios.get('http://localhost:5000/winemaker'),
        axios.get('http://localhost:5000/style'),
        axios.get('http://localhost:5000/grapevariety'),
        axios.get('http://localhost:5000/dish')
       
        ]);

        const dataArray = [culture, region, winemaker, style, grapevariety, dish];
        return dataArray; 

} catch (error) {
    console.error(error);
}
}

//* Request Api for catch One Wine : *//

export async function fetchOneWine(id) {
    const response = await axios.get(`http://localhost:5000/wine/${id}`);
    return response.data;
}


//* Request for delete one wine : *//
// /admin/wine/:id
export async function deleteOneWine(id) {
    const response = await apiInstance.delete(`/admin/wine/${id}`);
    return response.data;
}

//* Request for add wine : *//
// /admin/wine
export async function addWine(wine) {
    const response = await apiInstance.post(`/admin/wine`, wine);
    return response.data;
}

// * Request for add Tag culture on wine : *//

export async function addTagCultureWine(id, cultureIdList ) {
    const response = await apiInstance.post(`/admin/wine/${id}/culture`, {cultureIdList : cultureIdList} );
    return response.data;
}

// * Request for add Tag dish on wine : *//

export async function addTagDishWine(id, dishIdList ) {
    const response = await apiInstance.post(`/admin/wine/${id}/dish`, {dishIdList : dishIdList} );
    return response.data;
}

// * Request for add Tag grapevariety on wine : *//

export async function addTagGrapevarietyWine(id, grapevarietyIdList ) {
    const response = await apiInstance.post(`/admin/wine/${id}/grapevariety`, {grapeVarietyIdList : grapevarietyIdList} );
    return response.data;
}









