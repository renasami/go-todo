import React, {FC} from 'react';

type Props = {
    text: string
    onclick: any
    style?: object
}


const Button: FC<Props> = (props: Props) => {

    return (
        <>
           <button  style={props.style} onClick={props.onclick}>{props.text}</button>
        </>
    )

}

export default Button