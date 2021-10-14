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
    const style = {
        margin:"auto"
    }
    return (
        <>
            <li >
                <div>
                    <Text text={props.content} style={style}/>
                    <Text text={props.status} style={style}/>
                    <Button text={"編集"} onclick={test} style={style}/>
                    <Button text={"削除"} onclick={test} style={style}/>
                </div>
            </li>
        </>
    )
}

export default Task