import React from 'react';
import './PersonInfo.css';

const personInfo = (props) => {
    return (
        <div className="PersonalInfo">
             <h3 className="Name" ><strong>{props.name}</strong></h3>
             <p className="Bio" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nummus in Croesi 
                 divitiis obscuratur, pars est tamen divitiarum. Dicimus aliquem hilare vivere; 
                 Tum mihi Piso: Quid ergo? Duo Reges: constructio interrete. </p>
        </div>
    );
};

export default personInfo;