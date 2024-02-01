// PageTransitionWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation(); // Correct usage within a component

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransitionWrapper;
