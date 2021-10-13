import {FC} from "react";
import Button from "../../atoms/Button"
import Text from "../../atoms/Text"
type Props = {
    status: string
    content: string
}

const test = () => {
    console.log(Math.random() * 100)
}

const Task: FC<Props> = (props: Props) => {
    return (
        <>
            <li>
                <Text text={props.content}/>
                <Text text={props.status}/>
                <Button text={"編集"} onclick={test}/>
                <Button text={"削除"} onclick={test}/>
            </li>
        </>
    )
}

export default Task