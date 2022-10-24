import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
// import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
// import { RiSendPlane2Line } from "react-icons/ri"
// import { IoLogoVercel } from "react-icons/io5"
// import { BsCircleFill } from "react-icons/bs"
// import { FaSquareFull } from "react-icons/fa"
// import { StaticImage } from "gatsby-plugin-image"
// import ShareSocial from '../components/share' 
import { FaHandPointDown } from "react-icons/fa"
import { RiArrowRightSLine } from "react-icons/ri"
import ScrollAnimation from 'react-animate-on-scroll'
// import Genesis from '../pages/sales/in-the-city'
import NFTMenu from "../components/nft-menu"

import styled from 'styled-components'

const CustomBox = styled.div`

`

export const query2 = graphql`
  query {
    shopifyCollection(handle: { eq: "genesis" }) {
      products {
        ...ProductCard
      }
    }
  }
`

       // export default function nftPage({ data: { products } }) {
              export default function nft2Page({ data }) {

                return (
                  <>
                  
                  
                  
                  
                  
<CustomBox>
                  
   <Layout className="nft-page" style={{position:'relative'}}>
                  
                      
   <Seo
       title={`Follow Me Into The Night - the Twilightscapes Genesis Collection`}
       description={`Twilightscapes NFTs - NFT Art photography for collectors`}
       image={'https://twilightscapes.com/promo-follow-me-into-night.jpg'}
        />
                  

                  <div className="nft">
  <ProductListing products={data.shopifyCollection.products} />
</div>

<NFTMenu />

<section className="nft1" style={{paddingBottom:'1rem', overflow:'', margin:'0', background:''}}>
   
<div className="" style={{background:'', padding:'0 8vw 0 8vw', textAlign:'left'}}>


              

{/* <Link to="/nft/"
className=""
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}><h1 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)'}}>NFT Collectible Photography</h1></Link>
                            
                  
                  <h2 style={{textAlign:'center', margin:'0 12%'}}>
                  The Non Fungible Token or NFT, stores proof of identity and ownership of art on the blockchain where it's impossible to be forged, stolen or copied.
                  </h2>
                  
                  <h3 style={{textAlign:'center', fontSize:'100%', fontWeight:'bold', marginTop:'10px'}}>Twilightscapes offers Limited Edition rare NFTs.</h3> */}
                 
                  </div>
                  </section>
                  
                  
                  {/* <NFTMenu /> */}
                  
                  

                  
                
                  
                  <section className="nft1" style={{paddingTop:'0', overflow:'', margin:'0', background:''}}>

                  <div className="" style={{background:'', padding:'0 8vw 0 8vw', textAlign:'left'}}>
                  
                  


<h1 className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Follow Me Into The Night</h1>


<h2 style={{textAlign:'center', fontSize:'140%', marginTop:''}}>An introduction to Todd Lambert<br /> <span style={{fontSize:'66%'}}>The Genesis Series</span></h2>

<br /><br />

      










<h3>A collection of 14 unique images that illustrate the night as Todd Lambert sees it. Todd works almost exclusively at night as that is his medium of choice. Having lived on the the road and travelled throughout the 16 Western States, he has followed his own paths while creating new ones that he shows with his night photography.</h3>
<br />

<h4>Todd shoots on Canon, Sony and Nikon equipment but is a bit of a purist when it comes to his photography. The majority of Twilightscapes are single exposure and "as-shot" with very little editing and NO photoshop effects or filters.</h4>
<br />

<h5>All NFTs include maximum resolution, lossless compressed TIFF files with original source image and print rights included.</h5>
<br />

<blockquote style={{width:'60%', maxWidth:'80vw', margin:'50px auto', }}>Here I present some of my favorite gas stations that I've "worked in". <br />These images comprise an important part of my life. Just as I explored Route 66 over many years, I did the same with my photography style.
  <br /><br />
<div style={{textAlign:'right', marginRight:'20%'}}>– Todd Lambert</div></blockquote>




<p style={{textAlign:'center', fontWeight:'bold', fontSize:'120%'}}>ONLY 14 one-of-one pieces will be released in this Limited Edition  series.</p>

       
                      </div>
                         
 
                      </section>
                     
                  

                  
                  
                  
              
                  {/* <div className="nft"><ProductListing products={data.shopifyCollection.products} />
                  </div>
                    
<br /><br />

<a aria-label="Link to OpenSea" href="https://opensea.io/collection/followmeintothenight"
className="navbar-item button fire actionJackson"
style={{
  cursor:'pointer',
  width:'80%',
  maxWidth:'600px',
  margin:'0 auto',
  display:'flex',
  alignSelf:'center'
}}
rel="noreferrer" target="_blank"
>This Collection Available on OpenSea 
<span className="icon -right"><RiArrowRightSLine /></span></a>
<br /> */}
                  {/* <div className='NFTiframer-wrapper' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', maxHeight:'50vh', margin:'0 auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', background:'#fff', borderRadius:'12px' }}>

<iframe title="Twilightscapes on OpenSea" id="youtube2" className="blog-video1" width="100%" height="400" src="https://opensea.io/collection/followmeintothenight" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'50vh', borderRadius:'12px'  }} />
</div> */}


{/* <br /><br />
<NFTMenu /> */}

<br />
<p><a aria-label="Link to OpenSea" href="https://opensea.io/collection/followmeintothenight"
            className="navbar-item button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center'
            }}
            rel="noreferrer" target="_blank">
              This Collection Available on OpenSea 
<span className="icon -right"><RiArrowRightSLine /></span></a>
            </p>


<div className='' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', margin:'0 auto', }}>

<br />
{/* <hr /> */}
<br />
<h4>All Twilightscapes NFTs include maximum resolution, lossless compressed TIFF files from the original source RAW data and includes print rights.</h4>
<br />
<p>All Twilightscapes feature NFTNOW™ - get instant delivery of your NFT. No more waiting!</p>
<br /><br />
</div>
                  
                  {/* <br />
                  <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
                  <CommentBox />
                  </div>
                  <br /> */}
                  
                  
                  
                  <p style={{textAlign:'center', fontSize:'clamp(.8rem, 1.4rem, 2rem)', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Don't see the twilightscape you're looking for?</p>
                  
                  <ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
                  <FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
                  </ScrollAnimation>
                  
                  
                      </Layout>
                       </CustomBox>
                       </>
                  
                    )
                  }



    



