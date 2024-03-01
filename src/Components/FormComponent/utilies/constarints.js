//returns true if the value is blank
const isBlankChecker = (entries,prop) => entries[prop].value.trim().length === 0;

//returns true if the value is edited
const isEditedChecker = (entries,prop) => entries[prop].isEdited

//returns true if the value is greater than specified limit
const isLargerThanChecker = (entries,prop,limit) => entries[prop].value.length > limit;

//returns true if the values isn't an email
const emailValidator = (entries,prop) => entries[prop].value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;

//returns true if the values isn't a  valid 5 digit number
const zipCodeValidator = (entries,prop) => entries[prop].value.match(/^[0-9]{5}$/) === null;
const isRequired = (entries,prop) => entries[prop].value.length === 0;


function selectBoxChecker(entries,prop, propName){
    if(isEditedChecker(entries,prop) && isRequired(entries,prop)) {
        return `${propName} must be selected`
    }
    return undefined;
}
function generalChecker(entries,prop, propName){
    if(isEditedChecker(entries,prop) && isBlankChecker(entries,prop)) {
        return `${propName} Can't be blank`
    }else if(isEditedChecker(entries,prop) && isLargerThanChecker(entries,prop,100)){
        return `${propName} Can\'t be larger than 100 characters`
    }
    return undefined;
}

function zipCodeChecker(entries,prop, propName){
    if(isEditedChecker(entries,prop) && isBlankChecker(entries,prop)) {
        return `${propName} Can't be blank`
    }else if(isEditedChecker(entries,prop) && zipCodeValidator(entries,prop)){
        return `${propName} must be valid 5 digit number`
    }
    return undefined;

}

function emailChecker(entries,prop, propName){
    if(isEditedChecker(entries,prop) && isBlankChecker(entries,prop)) {
        return `${propName} Can't be blank`
    }else if(isEditedChecker(entries,prop) && emailValidator(entries,prop)){
        return `${propName} must be valid email`
    }else if(isEditedChecker(entries,prop) && isLargerThanChecker(entries,prop,100)){
        return `${propName} Can\'t be larger than 100 characters`
    }
    return undefined;
}

function blobChecker(entries, prop, propName,limit){
    if(isEditedChecker(entries,prop) && isBlankChecker(entries,prop)) {
        return `${propName} Can't be blank`
    }else if(isEditedChecker(entries,prop) && isLargerThanChecker(entries,prop,limit)){
        return `${propName} Can\'t be larger than ${limit} characters`
    }
}
export {generalChecker,zipCodeChecker,emailChecker, selectBoxChecker,blobChecker};

