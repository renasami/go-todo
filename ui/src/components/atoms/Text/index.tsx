import React, {FC} from 'react';

type Props = {
    text: string;
}

const Text: FC<Props> = (props: Props) => {

    return (
        <>
           <p>{props.text}</p>
        </>
    )

}

export default Text