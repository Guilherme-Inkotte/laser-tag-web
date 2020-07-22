import React, { useState } from 'react'

export default function Toggle({ render }) {
  const [on, setOn] = useState(false);
  const handleToggle = () => setOn(!on);
  return (
    <>
      {render({ on, toggle: handleToggle })}
    </>
  )
}
