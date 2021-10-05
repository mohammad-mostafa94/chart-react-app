import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const ReactSpring = () => {
    const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    
    onRest: () => set(!flip),
  })

    return (
        <>
            <animated.h1 style={props}>Bismillah Hirrah Manirrahim</animated.h1>
        </>
    );
};

export default ReactSpring;