import { log } from "console"
import { Name } from "./Person.types"

 type Personlist = {
    name: Name [] // name is the property here that is a array of objects that has  2 properties
 }

export const PersonList = (props:Personlist) => {
    return (
        <>
        {props.name.map((name) => (        
            <>
            {
            console.log(name)
            }
             
            <h1 key={name.first}>{name.first} is the 1</h1>
            <h1>{name.last} is the last </h1>
            </>
        ))}
        </>
    )
}