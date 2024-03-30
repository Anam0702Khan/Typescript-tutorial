import { Component, ReactNode } from "react";

type CounterProps = {
    message : string
}

type CounterState = {
    count: number
}

export class Counter extends Component<CounterProps,CounterState> { // in the class compo this is how we pass the type into it
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count : prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
                
            </div>
        )
        
    }
}