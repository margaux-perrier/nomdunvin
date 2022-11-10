// import React
import React, { useContext, Fragment } from 'react'
// import AllWinesContext
import { AllWinesContext } from "../../Context/AllWinesContext";

import UseAdminReducer, {getActionSetValue} from "../../reducers/UseAdminReducer";

// import scss
import './formAddWine.scss';


// import semantic UI Elements
import { Form, Input, Button, } from 'semantic-ui-react'

// FormAddWine component function
function FormAddWine() {

    const { adminState, adminDispatch } = UseAdminReducer();

    const { wines, culture, region  } = useContext(AllWinesContext);

    
      


    const handleTextFieldChange = (e) => {
        adminDispatch(getActionSetValue(e.target.name, e.target.value));
      }
    
      const handleCheckBoxChange = (e) => {
        console.log('checkbox change =======', e.target.name, e.target.checked)
        
     
        adminDispatch(getActionSetValue(e.target.name, e.target.checked));
        console.log(e.target.checked)
    
      }
  
    


    // * UniqAppellation * //
    const uniqAppellation = [...new Set(wines.map((wine) => wine.appellation))];
    
    // * UniqAvatar *//
    const uniqAvatar = [...new Set(wines.map((wine) => wine.avatar))];

    // * UniqColor *//
    const uniqColor = [...new Set(wines.map((wine) => wine.color))];
    // create object with color + Avatar (color fro label image)
    const colorAvatar = uniqColor.map((color, index) => { return { color: color, avatar: uniqAvatar[index] } })

    //* UniqSize *//
    const uniqSize = [...new Set(wines.map((wine) => wine.size))];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
    }


    return (
        <Fragment>

            <div class="form-add-wine">
                <h1 className="form-title">Ajouter un vin</h1>
                <Form onSubmit={handleFormSubmit}>

                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Nom du vin'
                        placeholder='Nom du vin'
                        name='name'
                        value={adminState.name}
                        onChange={handleTextFieldChange}

                    />
                    
                    <div class="two fields">
                        <div class="field">
                            <label size="large">Appellation</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Sélectionnez l'Appellation</option>
                            
                            </select>
                        </div>
                        <div class="field">
                            <label>Couleur</label>
                            <select class="ui fluid search dropdown">
                                <option value="">Sélectionnez la couleur du vin</option>
                                
                                    <option value="">""</option>
                              
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <label>Description du vin</label>
                        <textarea 
                        name="description"
                        value={adminState.description}
                        onChange={handleTextFieldChange}
                        placeholder="Ce vin en quelques mots..." rows="2"></textarea>
                    </div>

                    <div class="two fields">
                        <div class="field">
                            <label size="large">Le vigneron</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option>Sélectionnez le vigneron</option>
                           
                                    <option value="">fswfdgwdf</option>
                        
                            
                            </select>
                        </div>
                        <div class="field">
                            <label>La région</label>
                            <select class="ui fluid search dropdown">
                                <option value="">Sélectionnez la région du vin</option>
                                  
                                    <option value={""}>{"region"}</option>
                             
                           
                            </select>
                        </div>
                    </div>


                    <div class="three fields">
                        <div class="field">
                            <label size="large">Contenance</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Contenance</option>
                                
                                    <option value={"size"}>{"size"}</option>
                           
                            </select>
                        </div>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Millésime'
                            placeholder='Année du vin'
                            size="small"
                            name="vintage"
                            value={adminState.vintage}
                            onChange={handleTextFieldChange}
                        />
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Alcool'
                            placeholder='Exemple : 13%.vol'
                            size="small"
                            name="alcool"
                            value={adminState.alcool}
                            onChange={handleTextFieldChange}
                        />
                    </div>



                    <div class="field">
                        <label>Type de culture</label>
                    {/*Object.keys(adminState.cultures).map((key) => (*/
                    culture.map((item) => (
                        <div key={item.id} class="ui checkbox">
                            <input 
                            type="checkbox" 
                            name={item.name} 
                            value={item.id}
                            checked={adminState.cultures.item}
                            onChange={handleCheckBoxChange} />

                        <label>{item.name}</label>
                        </div>                        
                    ))}


                    </div>


                    <div class="field">
                        <label>Le Cépage</label>
                       
                        <div class="ui checkbox">
                            <input value="{grapevariety.id} "type="checkbox" tabindex="" class="hidden" />
                            <label className="tag">""</label>
                        </div>
                       
                    </div>


                    <div class="field">
                    <label>Ce vin accompagne : </label>
                       
                    <div class="ui checkbox">
                        <input value="{dish.id} "type="checkbox" tabindex="0" class="hidden" />
                        <label className="tag">""</label>
                    </div>
                    
                </div>



                    <div class="two fields">
                        <div class="field">
                            <label>Image pour un vin :</label>
                            <select class="ui fluid search dropdown">
                              
                                    <option label="" value="{avatar.avatar}">""</option>
                             
                            </select>
                        </div>
                    </div>

                    <div class="six wide field">
                   
                    <Form.Input label="Prix" placeholder='Ex : 13.50' width={15} />
                    </div>


                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Ajouter ce vin'
                    />

                </Form>
            </div>
        </Fragment>
    )
    
}

export default FormAddWine;














