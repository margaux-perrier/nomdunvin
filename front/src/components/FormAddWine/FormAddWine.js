// import React
import React, { useContext, Fragment } from 'react'
// import AllWinesContext
import { AllWinesContext } from "../../Context/AllWinesContext";
// import scss
import './formAddWine.scss';


// import semantic UI Elements
import { Form, Input, Button, } from 'semantic-ui-react'




// FormAddWine component function
function FormAddWine() {

    const { wines } = useContext(AllWinesContext);
    console.log(wines)


    // * UniqAppellation * //
    const uniqAppellation = [...new Set(wines.map((wine) => wine.appellation))];

    // * UniqAvatar *//
    const uniqAvatar = [...new Set(wines.map((wine) => wine.avatar))];

    // * UniqColor *//
    const uniqColor = [...new Set(wines.map((wine) => wine.color))];
    // create object with color + Avatar (color fro label image)
    const colorAvatar = uniqColor.map((color, index) => { return { color: color, avatar: uniqAvatar[index] } })


    //* UniqWinemaker *//
    const uniqWinemaker = [...new Set(wines.map((wine) => wine.winemaker.name))];

    //* UniqRegion *//
    const uniqRegion = [...new Set(wines.map((wine) => wine.region.name))];

    //* UniqSize *//
    const uniqSize = [...new Set(wines.map((wine) => wine.size))];










    return (
        <Fragment>

            <div class="form-add-wine">
                <h1 className="form-title">Ajouter un vin</h1>
                <Form>

                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Nom du vin'
                        placeholder='Nom du vin'
                        
                    />

                    <div class="two fields">
                        <div class="field">
                            <label size="large">Appellation</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Sélectionnez l'Appellation</option>
                                {uniqAppellation.map((appellation) => (
                                    <option value={appellation}>{appellation}</option>
                                ))}
                            </select>
                        </div>
                        <div class="field">
                            <label>Color</label>
                            <select class="ui fluid search dropdown">
                                <option value="">Sélectionnez la couleur du vin</option>
                                {uniqColor.map((color) => (
                                    <option value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <label>Description du vin</label>
                        <textarea placeholder="Ce vin en quelques mots..." rows="2"></textarea>
                    </div>

                    <div class="two fields">
                        <div class="field">
                            <label size="large">Le vigneron</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Sélectionnez le vigneron</option>
                                {uniqWinemaker.map((winemaker) => (
                                    <option value={winemaker}>{winemaker}</option>
                                ))}
                            </select>
                        </div>
                        <div class="field">
                            <label>La région</label>
                            <select class="ui fluid search dropdown">
                                <option value="">Sélectionnez la région du vin</option>
                                {uniqRegion.map((region) => (
                                    <option value={region}>{region}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div class="three fields">
                        <div class="field">
                            <label size="large">Contenance</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Contenance</option>
                                {uniqSize.map((size) => (
                                    <option value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Millésime'
                            placeholder='Année du vin'
                            size="small"
                        />
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Alcool'
                            placeholder='Exemple : 13%.vol'
                            size="small"
                        />
                    </div>



                    <div class="field">
                        <label>Type de culture</label>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Bio</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Biodynamie</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">HVE</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="" class="hidden" />
                            <label className="tag">Nature</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Raisonnée</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Sans Sulfites</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Vegan</label>
                        </div>
                    </div>


                    <div class="field">
                        <label>Le Cépage</label>
                        
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Auxerrois</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Cabernet franc</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Cabernet Sauvignon</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="" class="hidden" />
                            <label className="tag">Carignan</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Chardonnay</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Chenin</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Cinsault</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Clairette</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Gamay</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Grenache</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Merlot</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Pinot Gris</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Riesling</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Roussanne</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Syrah</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Tannat</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden" />
                            <label className="tag">Viogner</label>
                        </div>
                    </div>



                    <div class="field">
                    <label>Ce vin accompagne : </label>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden" />
                        <label className="tag">l'apéro des copains</label>
                    </div>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden" />
                        <label className="tag">les instants veggies</label>
                    </div>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden" />
                        <label className="tag">le fromage</label>
                    </div>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="" class="hidden" />
                        <label className="tag">les carnivores</label>
                    </div>
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden" />
                        <label className="tag">les plaisirs sucrés</label>
                    </div>
                    <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden" />
                    <label className="tag">le retour de pêche</label>
                </div>
                    
                </div>





                    <div class="two fields">
                        <div class="field">
                            <label>Image pour un vin :</label>
                            <select class="ui fluid search dropdown">
                                {colorAvatar.map((avatar) => (
                                    <option label={avatar.color} value={avatar.avatar}>{avatar.avatar}</option>
                                ))}
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


// export default FormAddWine
export default FormAddWine










