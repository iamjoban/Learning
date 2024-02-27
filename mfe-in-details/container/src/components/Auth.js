import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathName }) => {
    const { pathname } = history.location;
    if (pathname != nextPathName) {
      history.push(nextPathName);
    }
  };

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate,
        onSignIn,
        initialPath: history.location.pathname,
      });

      console.log(onParentNavigate);
      if (onParentNavigate) {
        history.listen(onParentNavigate);
      }
    }
  }, []);

  return <div ref={ref} />;
};
