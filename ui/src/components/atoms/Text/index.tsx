import React, {FC} from 'react';

type Props = {
    text: string;
    style?:object
}

const Text: FC<Props> = (props: Props) => {

    return (
        <>
           <p style={props.style}>{props.text}</p>
        </>
    )

}

export default Text