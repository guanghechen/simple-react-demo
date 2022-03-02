import { css } from '@emotion/react'
import React from 'react'
import type { FallbackProps } from 'react-error-boundary'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback: React.FC<FallbackProps> = props => {
  const { error, resetErrorBoundary } = props
  const classes = useStyles()
  return (
    <div css={classes.container} role="alert">
      <h2 css={classes.title}>Something went wrong</h2>
      <pre css={classes.content}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export const CustomErrorBoundary: React.FC = props => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = () => {
  return React.useMemo(
    () => ({
      container: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `,
      title: css`
        color: red;
        text-transform: uppercase;
        ::before {
          content: '!!! ';
        }
      `,
      content: css`
        padding: 0 2rem;
        font-size: 18px;
        white-space: pre-wrap;
      `,
    }),
    [],
  )
}
