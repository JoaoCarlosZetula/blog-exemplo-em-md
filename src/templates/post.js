import React from 'react'
import {graphql, Link} from 'gatsby'
import Seo from '../components/Seo'
import Img from 'gatsby-image'
import { Disqus } from 'gatsby-plugin-disqus'

const Post = ({data}) => {
    return (
        <div>
            <Seo title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description}/>
            {(data.markdownRemark.frontmatter.banner && 
                <Img fluid={data.markdownRemark.frontmatter.banner.childImageSharp.fluid}/>
            )}
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p><Link to='/blog'>Voltar para o blog</Link></p>
            <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}} />

            <Disqus config={{ 
                url: '',
                identifier: data.markdownRemark.frontmatter.path, 
                title: data.markdownRemark.frontmatter.title
            }}/>
        </div>
    )
}

export const pageQuery = graphql`
    query($id: String!){
        markdownRemark(frontmatter: {path: {eq: $id}}) {
            frontmatter {
                path
                title
                description
                banner{
                  childImageSharp{
                      fluid{
                          ...GatsbyImageSharpFluid
                    }
                }
              }
            }
        html
        }
    }
`

export default Post