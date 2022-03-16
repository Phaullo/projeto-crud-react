import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>{/* para nao precisar criar uma div envolvendo dois elementos */}
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p3 mt-3">
                {props.children}
                </div>
        </main>
    </React.Fragment>