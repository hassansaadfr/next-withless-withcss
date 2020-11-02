import { Button } from 'antd'
import React, { Fragment } from 'react'
import style from '../styles.module.css'
const Index = () => {
  return (
    <Fragment>
      <Button type='primary'>Button with custom less theme</Button>
      <p className={style.hello}>Css modules here</p>
    </Fragment>
  )
}

export default Index
