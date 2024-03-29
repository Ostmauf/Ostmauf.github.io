import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const colRef = collection(db, "books");

const q = query(colRef, orderBy("createdAt"));

//real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books);
})

//Adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addDoc(colRef, {
        title: addBookForm.title.value,
        auhor: addBookForm.author.value,
        createdAt: serverTimestamp(),
    })
    .then(() => {
        addBookForm.reset();
    })
});

//Deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef = doc(db, "books", deleteBookForm.id.value);
    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset();
        })
});

//get single document
const docRef = doc(db, "books", "xQuSUcaK03AWzdRo6l0e")

getDoc(docRef)
    .then((doc => {
        console.log(doc.data(), doc.id);
    }))

const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
});

//updating a document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef = doc(db, "books", updateForm.id.value);
    updateDoc(docRef, {
        title: "updated title"
    })
        .then(() => {
            updateForm.reset();
        })
})

//Signing users up
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // console.log("User created:", cred.user);
            signupForm.reset();
        })
        .catch((err) => {
            console.log(err.message);
        });
});

//logging in and out
const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", (e) => {
    signOut(auth)
    .then(() => {
        // console.log("The user signed out")
    })
        .catch((err) => {
            console.log(err.message)
        })
})

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // console.log("User logged in:", cred.user);
        })
            .catch((err) => {
                console.log(err.message);
            })
})

const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log("user status changed: ", user);
});

const unsubButton = document.querySelector(".unsub");
unsubButton.addEventListener("click", () => {
    console.log("unsubscribing");
    unsubCol()
    unsubDoc()
    unsubAuth()
})