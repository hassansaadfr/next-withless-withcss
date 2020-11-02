import React from 'react'
import '../style.less'

const MyApp = ({ Component, pageProps, err }) => {
  const modifiedPageProps = { ...pageProps, err }
  return <Component {...modifiedPageProps} />
}

export default MyApp
