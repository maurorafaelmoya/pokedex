import React, { forwardRef } from 'react'
import MyAppBar from './MyAppBar'


const PagePrincipal = forwardRef(( props, ref ) => (
    <div >
        <MyAppBar />
        <div style={{paddingTop:15, paddingLeft:10}}>
            {props.children}
        </div>
    </div>
))

export default PagePrincipal