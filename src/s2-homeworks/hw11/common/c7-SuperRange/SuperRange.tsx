import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: "#00CC22",
                width: '200px',
                /*margin: '20px 0 20px 0',*/
                left: '10px',
                top: '50%',




            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
