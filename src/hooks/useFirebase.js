import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firbase/firebase.init";
import { getIdToken, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// initialize firebase call just once
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    // user state observer by firebase

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                setUser(user)
                // ... get id token for user

                getIdToken(user)
                    .then(idToken => {

                        setToken(idToken)
                    })

            } else {
                // User is signed out
                // ...
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth])


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to database after confirm from firebase auth
                saveUser(email, name, "POST")
                // send update name to firebase
                // observer couldnot send this data to firebase because it will work when log out amd log in action start
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace("/");
            })
            .catch((error) => {


                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const destination = location?.state?.from || "/";
                history.replace(destination);
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setAuthError("");
                saveUser(user.email, user.displayName, "PUT")
                const destination = location?.state?.from || "/";
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        admin,
        token,
        registerUser,
        signInWithGoogle,
        logout,
        loginUser

    }
}

export default useFirebase;