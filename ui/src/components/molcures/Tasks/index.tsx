import {FC} from "react";
import Button from "../../atoms/Button"
import Text from "../../atoms/Text"
type Props = {
    status: string
    content: string
}

const Task: FC<Props> = (props: Props) => {
    return (
        <>
            <li>
                <Text text={props.content}/>
                <Text text={props.status}/>
                <Button text={"編集"} onclick={()=>{console.log("fas")}}/>
                <Button text={"削除"} onclick={()=>{console.log("fas")}}/>
            </li>
        </>
    )
}

export default Task