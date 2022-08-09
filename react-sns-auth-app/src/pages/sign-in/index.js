import React from 'react';
import {css} from '@emotion/css';
import {SiFacebook, SiGithub, SiGoogle, SiTwitter} from 'react-icons/si';
import {Button} from 'react-bootstrap';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from 'firebase/auth';
import {auth} from '../../firebase';

const Login = () => {
  const loginWithProvider = (providerName) => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider(),
      github: new GithubAuthProvider(),
      facebook: new FacebookAuthProvider(),
    };

    return signInWithPopup(auth, provider[providerName]);
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
      `}
    >
      <Button
        onClick={(e) => {
          loginWithProvider('google');
        }}
      >
        <SiGoogle />
        <span
          className={css`
            margin-left: 5px;
          `}
        >
          {'Google でログイン'}
        </span>
      </Button>
      <Button
        onClick={(e) => {
          loginWithProvider('twitter');
        }}
      >
        <SiTwitter />
        <span
          className={css`
            margin-left: 5px;
          `}
        >
          {'Twitter でログイン'}
        </span>
      </Button>
      <Button
        onClick={(e) => {
          loginWithProvider('github');
        }}
      >
        <SiGithub />
        <span
          className={css`
            margin-left: 5px;
          `}
        >
          {'GitHub でログイン'}
        </span>
      </Button>
      <Button
        onClick={(e) => {
          loginWithProvider('facebook');
        }}
      >
        <SiFacebook />
        <span
          className={css`
            margin-left: 5px;
          `}
        >
          {'Facebook でログイン'}
        </span>
      </Button>
    </div>
  );
};

export {Login};
