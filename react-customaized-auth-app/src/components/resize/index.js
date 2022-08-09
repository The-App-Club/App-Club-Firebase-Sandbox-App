import {useLayoutEffect, useState, useCallback} from 'react';

function CaptureResize({captureRef, children}) {
  // https://stackoverflow.com/questions/58483197/measure-react-dom-node-on-resize-with-hooks
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  const updateSize = useCallback(() => {
    setSize(captureRef.current.getBoundingClientRect());
  }, [captureRef]);

  useLayoutEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      updateSize();
    };
  }, [updateSize]);
  const [size, setSize] = useState({});
  return children(size);
}

export {CaptureResize};
