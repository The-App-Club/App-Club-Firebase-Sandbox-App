import {useContext, useState, useEffect, createContext} from 'react';
import {auth} from '../firebase';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signUp({email, password}) {
    // https://firebase.google.com/docs/auth/web/manage-users#create_a_user
    return await auth.createUserWithEmailAndPassword(email, password);
  }

  // https://firebase.google.com/docs/auth/web/password-auth?hl=ja#sign_in_a_user_with_an_email_address_and_password
  async function signIn({email, password}) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function verifyEmail({email}) {
    // メールリンク機能で実装
    // https://firebase.google.com/docs/auth/web/email-link-auth#enable_email_link_sign-in_for_your_firebase_project
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: `http://localhost:3000/sign-up`,
      handleCodeInApp: false,
    };
    return await auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  // https://firebase.google.com/docs/auth/web/manage-users?hl=ja#send_a_password_reset_email
  // The continue URL provided in the request is invalid. (auth/invalid-continue-uri).
  // https://stackoverflow.com/questions/55296314/firebase-redirect-to-webpage-after-successful-password-change
  async function resetPassword({email}) {
    // MEMO メールのバリデーションを行わないとダメかも >>> 5分後ぐらいにくる結構ラグあるかも
    // https://firebase.google.com/docs/auth/web/passing-state-in-email-actions
    // https://firebase.google.com/docs/auth/custom-email-handler
    const actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: `http://localhost:3000/forgot-password`,
      handleCodeInApp: false,
    };
    return await auth.sendPasswordResetEmail(email, actionCodeSettings);
  }

  async function signOut() {
    // https://firebase.google.com/docs/auth/web/password-auth?hl=ja
    return await auth.signOut();
  }

  useEffect(() => {
    // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signOut,
    resetPassword,
    signIn,
    verifyEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider, AuthContext};
