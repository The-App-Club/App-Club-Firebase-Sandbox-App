import {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from 'firebase/auth';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp({email, password}) {
    // ok
    // https://firebase.google.com/docs/auth/web/password-auth?hl=ja#create_a_password-based_account
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login({email, password}) {
    // ok
    // https://firebase.google.com/docs/auth/web/password-auth?hl=ja#sign_in_a_user_with_an_email_address_and_password
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function verifyEmail({email}) {
    // メールリンク機能で実装
    // https://firebase.google.com/docs/auth/web/email-link-auth
    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
      handleCodeInApp: true,
    };
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  function resetPassword({email}) {
    // https://blog.ojisan.io/firebase-auth-ipass-login/
    // https://zenn.dev/peg/articles/a7a7b79600211d
    // https://github.com/ojisan-toybox/firebase-ipass-login
    return sendPasswordResetEmail(auth, email);
  }

  async function changePassword({mode, actionCode, continueURL, password}) {
    // https://firebase.google.com/docs/auth/custom-email-handler#create_the_email_action_handler_page
    const email = await verifyPasswordResetCode(auth, actionCode);
    await confirmPasswordReset(auth, actionCode, password);
    await signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    // https://firebase.google.com/docs/auth/web/manage-users?hl=ja#get_the_currently_signed-in_user/
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('uid', uid);
        setCurrentUser(user);
        setLoading(false);
      } else {
        // User is signed out
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
    verifyEmail,
    resetPassword,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider};
