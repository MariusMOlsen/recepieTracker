import React from 'react';

function createRecepie(){
    return (
        <div classname="createRecepie">

            <div class="formInfo">
                <label htmlFor="">Navn</label>
                <input type="text" name="" id=""/>
            </div>
            
            <div class="formInfo">
                <label htmlFor="">Beskrivelse</label>
                <input type="text"/>
            </div>

            <div class="formInfo">
                <label htmlFor="">Bilde</label>
                <input type="text"/>
            </div>

            
            <button class="formInfo">Opprett</button>

    </div>
      
    );
    
}

export default createRecepie;
        