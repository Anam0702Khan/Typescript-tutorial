 import { PersonProps } from "./Person.types"

export const Person = (props:PersonProps) => {
   return (
    <>
    <h1>my first name is {props.name.first} and last is {props.name.last}</h1>
    </>
   )
}