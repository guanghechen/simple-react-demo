import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HelloWorldPage: React.FC = () => {
  const classes = useStyles()
  return (
    <div css={classes.container}>
      <h3>Hello, world</h3>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  )
}

export default HelloWorldPage

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = () => ({
  container: css`
    height: 100vh;
    width: 100vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
})
