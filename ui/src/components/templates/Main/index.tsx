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
    const style =  {
        display: "flex",
        margin: "20px",
    }


    return (
        <>
            <div style={{width:"100%"}}>
                <ul style={{listStyle:"none"}}>
                    {test.map((item,index) => {
                        return <Tasks status={item.status} style={style} content={item.content} key={index}/>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Main