import React from 'react';

interface MouseEvents {
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export default function useHover(): [boolean, MouseEvents] {
  const [hovering, setHovering] = React.useState(false);

  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  return [hovering, {
    onMouseOut,
    onMouseOver
  }];
}