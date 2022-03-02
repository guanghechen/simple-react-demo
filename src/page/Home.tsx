import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

export interface IHomePageProps {
  name: string
  gender: 'male' | 'female'
}

export const HomePage: React.FC<IHomePageProps> = props => {
  const classes = useStyles()
  return (
    <div css={classes.container}>
      <aside css={classes.sidebar}>Here is Side bar.</aside>
      <main css={classes.main}>
        <h1>Here is Main content.</h1>
        <h3>
          <Link to="/page/HelloWorld">Hello world!</Link>
        </h3>
        <pre>{JSON.stringify(props)}</pre>
      </main>
    </div>
  )
}

export const DefaultHomePage: React.FC = () => <HomePage name="Alice" gender="female" />
export default DefaultHomePage

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = () => ({
  container: css`
    display: flex;
    height: 100vh;
    min-width: 100vw;
  `,
  sidebar: css`
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    overflow: hidden auto;
    height: 100vh;
    border-right: 1px solid violet;

    & ::-webkit-scrollbar {
      width: 4px;
    }

    & ::-webkit-scrollbar-thumb {
      min-height: 12px;
      border: 6px solid transparent;
      background-clip: padding-box;
      background-color: rgb(200, 200, 200);
    }

    & ::-webkit-scrollbar-thumb:hover {
      background: rgb(138, 136, 134);
    }
  `,
  main: css`
    flex: 1 1 auto;
    min-height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background: #fff;
    h1 {
      color: #333;
      font-weight: normal;
    }
  `,
})
