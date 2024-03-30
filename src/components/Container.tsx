type ContainerProps = {
    styles: React.CSSProperties  // in the css the type can be a string or a number that we dont know that y the react lib itself give it a type of React.css
}

export const Container = (props: ContainerProps) => {
    return (
        <>
         <div style={props.styles}>Anam Khan</div>
        </>
    )
}