function mapToSimplified(inputList) {
    return inputList.map(item => {
        const simplifiedItem = {};
        for (const key in item) {
            if(key === 'title') {
                simplifiedItem[key] = item[key].value[0];
            } else{
                simplifiedItem[key] = item[key].value;
            }
        }
        return simplifiedItem;
    });
}



