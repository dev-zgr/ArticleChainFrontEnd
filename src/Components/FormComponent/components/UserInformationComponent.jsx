import {DropdownComponent as SelectComponent} from "./DropdownComponent";
import {academicTitles} from "../utilies/dataFolder";
import {InputComponent} from "./InputComponent";
import {emailChecker, generalChecker, selectBoxChecker, zipCodeChecker} from "../utilies/constarints";

export const UserInformationComponent = ({header,index,entries,  handleUserAccountChange, onLostBlur, handleDeselectChange, handleSelectChange}) => {
    const authorTitleValid = selectBoxChecker(entries[index], "title", "Title");
    const authorNameValid = generalChecker(entries[index], "author_name", "Author Name");
    const intuitionValid = generalChecker(entries[index], "institution", "Intuition");
    const departmentValid = generalChecker(entries[index], "department", "Department");
    const countryValid = generalChecker(entries[index], "country", "Country");
    const stateValid = generalChecker(entries[index], "state", "State");
    const emailValid = emailChecker(entries[index], "author_email", "Email");
    const zipCodeValid = zipCodeChecker(entries[index], "zipCode", "Zip Code");
    return (
        <div className="input-section">
            <h2>
                {header}
            </h2>

            <div className="input-group">
                <SelectComponent
                    label="Author Title"
                    id="Author Title"
                    options={academicTitles}
                    field={"title"}
                    index={index}
                    value={entries[index].title.value}
                    onSelect={handleSelectChange}
                    onDeselect={handleDeselectChange}
                    limit={1}
                    error={authorTitleValid}
                    required
                />
                <InputComponent
                    label={'Author Name'}
                    placeholder={"Author Name"}
                    id="Author"
                    type="text"
                    name="Author"
                    value={entries[index].author_name.value}
                    onBlur={() => onLostBlur(index,'author_name')}
                    onChange={(event) => handleUserAccountChange(index,"author_name", event)}
                    error={authorNameValid}
                />

            </div>

            <div className="input-group">
                <InputComponent
                    label={'Author Email'}
                    placeholder={"Authors Email"}
                    id="Author Email"
                    type="text"
                    name="Author Email"
                    value={entries[index].author_email.value}
                    onBlur={() => onLostBlur(index,'author_email')}
                    onChange={(event) => handleUserAccountChange(index,"author_email", event)}
                    error={emailValid}
                />

                <InputComponent
                    label={'Institution'}
                    placeholder={"Authors Institution"}
                    id="Institution"
                    type="text"
                    name="Institution"
                    value={entries[index].institution.value}
                    onBlur={() => onLostBlur(index,'institution')}
                    onChange={(event) => handleUserAccountChange(index,"institution", event)}
                    error={intuitionValid}
                />
            </div>
            <div className={"input-group"}>
                <InputComponent
                    label={'Department'}
                    placeholder={"Authors Department"}
                    id="Department"
                    type="text"
                    name="Department"
                    value={entries[index].department.value}
                    onBlur={() => onLostBlur(index,'department')}
                    onChange={(event) => handleUserAccountChange(index,"department", event)}
                    error={departmentValid}
                />
            </div>

            <hr/>
            <h3>Address</h3>
            <div className="input-group">
                <InputComponent
                    label={'Country'}
                    placeholder={"Authors Country"}
                    id="Country"
                    type="text"
                    name="Country"
                    value={entries[index].country.value}
                    onBlur={() => onLostBlur(index,'country')}
                    onChange={(event) => handleUserAccountChange(index,"country", event)}
                    error={countryValid}
                />

                <InputComponent
                    label={'State, City, Province'}
                    placeholder={"Authors State"}
                    id="State"
                    type="text"
                    name="State"
                    value={entries[index].state.value}
                    onBlur={() => onLostBlur(index,'state')}
                    onChange={(event) => handleUserAccountChange(index,"state", event)}
                    error={stateValid}
                />


            </div>


            <div className="input-group">


                <InputComponent
                    label={'Zip Code'}
                    placeholder={"Authors Zip Code"}
                    id="Zip Code"
                    type="Zip Code"
                    name="Zip Code"
                    value={entries[index].zipCode.value}
                    onBlur={() => onLostBlur(index,'zipCode')}
                    onChange={(event) => handleUserAccountChange(index,"zipCode", event)}
                    error={zipCodeValid}
                />
            </div>


        </div>
    )
}