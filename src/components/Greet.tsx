type greetType = {
    name: string
}

export const Greet = (props:greetType) => {
    return (
        <>
        <h1>hello this is {props.name}</h1>
        </>
    )
}