import {FC} from "react"
import Button from "../../atoms/Button"
import Text from "../../atoms/Text"
type Props = {

}

const InputUnit: FC<Props> = (props: Props) => {
    const onclick = () => {
        console.log("fas")
    }

    return (
        <div style={{ margin: "auto"}}>
            <input type="text"/> 
            <p>状態
            <select name="status">
                <option value="未実行">未実行</option>
                <option value="実行中">実行中</option>
                <option value="終了">終了</option>
            </select>
            </p>
            <Button text="送信"onclick={onclick}/>
        </div>
    )
}

export default InputUnit