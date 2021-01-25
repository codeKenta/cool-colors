/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'

import ColorGrid from '../ColorGrid'

const Page = () => {
  return (
    <div
      sx={{
        padding: '20px 15px',
        paddingTop: '50px',
        margin: '0 auto',
        '@media only screen and (min-width: 500px)': {
          padding: '20px',
          paddingTop: '50px',
        },
      }}
    >
      <ColorGrid />
    </div>
  )
}

export default Page
