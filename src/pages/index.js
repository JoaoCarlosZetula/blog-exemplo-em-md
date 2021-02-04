import React from 'react'
import {Link} from 'gatsby'
import Seo from '../components/Seo'

const Index = () => {
    return (
        <div>
            <Seo title='O blog - salt' description='aquela descrição'/>
            <h1>PowerSites</h1>
            <p>
                <Link to='/blog'>Blog</Link>                
            </p>
        </div>
    )
}

export default Index