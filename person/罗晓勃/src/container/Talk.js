import React, { Component } from 'react'
import {NavBar} from 'antd-mobile'
export default class Talk extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{
                    backgroundColor:'#099ff5',
                    color:'white',
                    height:'60px',

                }}
                // rightContent={[
                //     <Link to='/s'>
                //         <img src="img/icon-test.png" style={{width:'25%',marginLeft:'70px'}}/>
                //     </Link>
                // ]}
                // leftContent={[
                //     <Link to='/notice'>
                //         <img src="img/icon_notice.png" style={{width:'25%',marginLeft:'10px'}}/>
                //     </Link>
                // ]}
                >社区</NavBar>
            </div>
        )
    }
}
