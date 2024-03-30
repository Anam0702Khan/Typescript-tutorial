import { useState } from "react";


type AuthUser = {
    name: string,
    email: string
}
export const LoggedIn = () => {

    const [loggedIn,setLoggedIn] = useState<AuthUser | null>(null)

    // const [user,setUser ] = useState<AuthUser>({} as AuthUser)  
    // when we know already that the authuser is gonna be something rather than null then we dont have to include the ? operator in the chaining
    const handleLoggedIn = () => {
        setLoggedIn({
            name : "an",
            email: "a@khan.com"
        })
    }
    const handleLoggedOut = () => {
        setLoggedIn(null)
    }

    return (
        <>
          <button onClick={handleLoggedIn}>Login</button>
          <button onClick={handleLoggedOut}>Logout</button>
           <div>User is {loggedIn?.name}</div>
           <div>User is {loggedIn?.email}</div>
        </>
    )
}