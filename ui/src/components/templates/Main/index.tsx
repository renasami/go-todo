import {FC} from "react";
import Tasks from "../../molcures/Tasks"
const Main:FC = ()=>{
    type TaskInfo = {
        status: string
        content: string
    }
    const test:TaskInfo[] = [
        {
            status: "途中",
            content: "Hello"
        },
        {
            status: "完了",
            content: "Hello02"
        }
    ]


    return (
        <>
            <div style={{width:"100%", float: "left"}}>
                <ul>
                    {test.map((item,index) => {
                        return <Tasks status={item.status} content={item.content} key={index}/>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Main