import React, {FC} from 'react';

type Props = {
    text: string
    onclick: Function
    style?: object
}


const Button: FC<Props> = (props: Props) => {

    return (
        <>
           <a  style={props.style} onClick={() => {alert("fas")}}>{props.text}</a>
        </>
    )

}

export default Button