import React, {FC} from 'react'
import { Card } from './Card'


interface NamesData {
    data:{
      name: "string"
}
}

export const CardContainer: FC<NamesData> = (props) => {

    return (
        <div>
            <Card {props.data.name}/>
        </div>
    )
}
