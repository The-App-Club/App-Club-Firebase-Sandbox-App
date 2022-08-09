import {useState, useEffect} from 'react';
import {queryParamParser} from '../../plugins/queryParamParser';
import {useHistory} from 'react-router-dom';

const AuthTypeHandler = ({children}) => {
  const history = useHistory();

  const [actionState, setActionState] = useState({
    mode: '',
    actionCode: '',
    continueURL: '',
  });

  useEffect(() => {
    const mode = queryParamParser({name: 'mode'});
    const actionCode = queryParamParser({name: 'oobCode'});
    const continueURL = queryParamParser({name: 'continueUrl'});
    setActionState({
      mode,
      actionCode,
      continueURL,
    });
  }, []);

  const renderPageBasedOnAuthType = ({authType}) => {
    console.log('authType', authType);
    // https://github.com/ojisan-toybox/firebase-ipass-login/blob/master/src/pages/action.tsx#L79
    switch (authType) {
      case 'resetPassword':
        history.push('/change-password', {
          actionState,
        });
        return <></>;
      case 'signIn':
        history.push('/CowboyBebop-input');
        return <></>;
      // case 'verifyEmail':
      //   return null;
      default:
        return <div>{'maybe are you bot??'}</div>;
    }
  };

  return <>{renderPageBasedOnAuthType({authType: actionState.mode})}</>;
};

export {AuthTypeHandler};
