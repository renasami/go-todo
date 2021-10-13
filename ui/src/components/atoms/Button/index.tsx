import React, {FC} from 'react';

type Props = {
    text: string
    onclick: Function
}

const Button: FC<Props> = (props: Props) => {

    return (
        <div>
           <a onClick={() => {alert("fas")}}>{props.text}</a>
        </div>
    )

}

export default Button