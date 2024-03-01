//This function is used to simply the objects for HTTP request
function mapToSimplifiedObject(rawObject) {
    const newObject = {};
    const newAddressObject = {}
    Object.keys(rawObject).forEach((key) =>{
        if(key === 'title') {
            newObject[key] =rawObject[key].value[0].value
        }else if(['country', 'state', 'zipCode'].includes(key)){
            newAddressObject[key] = rawObject[key].value;
        }else{
            newObject[key] = rawObject[key].value
        }
    });
    newObject["address"] = newAddressObject
    return newObject;
}


function mapToSimplifiedList(rawList){
    return rawList.map((element) => {
        return mapToSimplifiedObject(element);
    })
}
export {mapToSimplifiedObject,mapToSimplifiedList}


