import React, {FC} from 'react';
import {Figure} from "../../models/Figures/Figure";

export interface ILostProps{
    title:string;
    figures:Figure[];
}

const LostFigures:FC<ILostProps> = ({title,figures}) => {
    return (
        <div className='lost'>
            <h3>{title}</h3>
            {figures.map(figure =>
            <div key={figure.id}>
                {figure.name}
                {figure.logo &&
                    <img src={figure.logo} width={20} height={20} alt="figureLogo"/>
                }
            </div>
            )}
        </div>
    );
};

export default LostFigures;