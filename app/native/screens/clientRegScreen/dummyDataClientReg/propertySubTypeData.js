const propertyTypes = ["Apartments","Plots","Villas","DDJAY Plots","Studio Apartments","Town House","SCO Plots","Shops","High Street Retails","Office Towers","Double Height Shops","Triple Height Shops", "Industrial Plot","Ware House","Nursery School","Primary School","Senior School","Nursing Home","Hospital","Religious Site"];
const values = ["apartments","plots","villas","DDJAYPlots","studioApartments","townHouse","SCOPlots","shops","highStreetRetails","officeTowers","doubleHeightShops","tripleHeightShops", "industrialPlot","wareHouse","nurserySchool","primarySchool","seniorSchool","nursingHome","hospital","religiousSite"]

let PropertySubTypeData = [];
for(let i=0;i<propertyTypes.length;i++){
    const property = {label : propertyTypes[i], value : values[i]};
    PropertySubTypeData.push(property);
}

export default PropertySubTypeData;