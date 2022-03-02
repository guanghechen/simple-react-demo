import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteContext } from '@/core/context/route'

/**
 * Home page
 * @param props
 * @returns
 */
export const _404Page: React.FC = () => {
  const {
    state: { routes: links },
  } = useRouteContext()
  const classes = useStyles()

  return (
    <div css={classes.container}>
      <div css={classes.header}>
        <h1>404 -- Page Not found!!</h1>
      </div>
      <div css={classes.main}>
        <ul css={classes.list}>
          {links.map(({ pathname, title }) => (
            <li key={pathname} css={classes.listItem}>
              <Link to={pathname}>{title ?? pathname}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default _404Page

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = () => ({
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-style: italic;
    color: hsl(0deg, 80%, 60%);

    h1 {
      font-size: 32px
    }
  `,
  header: css`

  `,
  main: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  list: css`
    list-style: none;
    display: block;
  `,
  listItem: css`
    display: block
  `,
})
