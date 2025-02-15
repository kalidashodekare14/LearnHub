import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import auth from '../firebaseConfig'
import { useEffect } from 'react'

export const authProvider = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const userRagistrationSystem = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLoginSystem = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        user
    }

    return (
        <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
    )
}

export default AuthProvider