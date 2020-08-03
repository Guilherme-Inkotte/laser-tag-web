import React, { useState, useEffect } from 'react'

export default function Toggle({ render, initial }) {

  useEffect(() => {
    if (initial) setOn(true)
  }, [initial])

  const [on, setOn] = useState(false);
  const handleToggle = () => setOn(!on);
  return (
    <>
      {render({ on, toggle: handleToggle })}
    </>
  )
}
