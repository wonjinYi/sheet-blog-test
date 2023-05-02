// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	addDoc,
	deleteDoc,
	query,
	orderBy,
} from 'firebase/firestore';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD6Lvy4322wkJJs7ehqNgVWta0wH4dorSE',
	authDomain: 'editable-web-test.firebaseapp.com',
	projectId: 'editable-web-test',
	storageBucket: 'editable-web-test.appspot.com',
	messagingSenderId: '1071536890931',
	appId: '1:1071536890931:web:811e165904d5a70e602f46',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();

// firestore, storage
export async function getCollection(collectionName) {
	const collectionRef = collection(db, collectionName);
	const q = query(collectionRef, orderBy('order'));
	const querySnapshot = await getDocs(q);
	const docs = [];

	// get documents from a specific collection
	querySnapshot.forEach(doc => {
		// doc.data() is never undefined for query doc snapshots
		const data = doc.data();
		docs.push({
			...data,
			docid: doc.id,
			imgUrl: [],
		});
	});

	// convert image path to downloadURL
	// -- https://constructionsite.tistory.com/43
	let promises = [];
	for (let i = 0; i < docs.length; i++) {
		const doc = docs[i];
		if (!Object.keys(doc).includes('img')) break;
		else if (doc.img.length === 0) continue;

		promises = promises.concat(
			doc.img.map(async (path, index) => {
				doc.imgUrl[index] = await getDownloadURL(ref(storage, path));
			}),
		);
	}
	await Promise.all(promises);

	return docs;
}

export async function removeDoc(collectionName, docid) {
	try {
		const res = await deleteDoc(doc(db, collectionName, docid));
		console.log('removedoc ', res);
		alert('지웠습니다.', docid);
		return res;
	} catch (err) {
		alert(err.code, err.message);
		return null;
	}
}

export async function updateDoc(collectionName, docid, formdata) {
	try {
		const res = await setDoc(doc(db, collectionName, docid), formdata);
		console.log('updatedoc ', res);
		alert('반영했습니다.', docid);
		return res;
	} catch (err) {
		alert(err.code, err.message);
		return null;
	}
}

export async function createDoc(collectionName, formdata) {
	try {
		const res = await addDoc(collection(db, collectionName), formdata);
		console.log('createDoc ', res);
		alert('만들었습니다.');
		return res;
	} catch (err) {
		alert(err.code, err.message);
		return null;
	}
}

export async function getDocById(collectionName, docid) {
	try {
		const docRef = doc(db, collectionName, docid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
		} else {
			console.log('No such document!');
			throw new Error('no such document');
		}
	} catch (err) {
		alert(err.code, err.message);
		return null;
	}
}

export async function getDocByRef(collectionName, docRef) {
	try {
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			// console.log('Document data:', docSnap.data());
			return {
				...docSnap.data(),
				docid: docRef.id,
			};
		} else {
			console.log('No such document!');
			throw new Error('no such document');
		}
	} catch (err) {
		alert(err.code, err.message);
		return null;
	}
}

// auth
export async function signin(_user) {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			_user.id,
			_user.pw,
		);
		const user = userCredential.user;
		console.log('firebase', user);
		return user;
	} catch (err) {
		const errorCode = err.code;
		const errorMessage = err.message;
		alert(errorCode, errorMessage);
		return null;
	}
}

export async function signout() {
	try {
		const _auth = getAuth();
		const res = await signOut(_auth);
		console.log('logout', res);
		return true;
	} catch (err) {
		const errorCode = err.code;
		const errorMessage = err.message;
		alert(errorCode, errorMessage);
		return null;
	}
}

export function getCurrentUser() {
	const _auth = getAuth();
	const user = _auth.currentUser;
	if (user) {
		return user;
	} else {
		return null;
	}
}
