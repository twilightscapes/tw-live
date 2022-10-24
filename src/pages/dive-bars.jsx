import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
 import { GatsbyImage } from 'gatsby-plugin-image'
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import GalleryMenu from "../components/galleryMenu"
// import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import TwilightLogo from "../../static/assets/TSidebarHover.svg"






const divePage = ({data}) => (
  
<Layout className="thanks-page">

<Seo
          title={`Hole In The Wall Dive Bars`}
          description={`Stick around for closing time at your favorite small bar or pub`}
          image={'https://twilightscapes.com/static/assets/divebars-promo.jpg'}
        />
  {/* <GalleryMenu /> */}
  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}>

  <TwilightLogo style={{
  maxWidth:'50vw', opacity:'.5',
  position:'absolute', zIndex:'-1', top:'1vh'}} />

  <div className="RArrow">
 <span></span>
</div>

<SimpleReactLightbox>
      <SRLWrapper options={options} className="">
      {/* <div className="masonry" style={{}}> */}
      <div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>


      <div style={{width:'1000px', height:'1000px'}}></div>
          
      {data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })}
    </div>
    </SRLWrapper></SimpleReactLightbox>
        </div>
         <GalleryMenu />


         <h1 className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Dive Bars <br /><span style={{fontSize:'50%'}}>Some of the seediest dive bars around</span></h1>
<br />

<p style={{textAlign:'center',}}>An all new series of digital art by Todd Lambert looks into the darkest corners to show another side of night life.</p>


<br />
 <ShareSocial />


<br /><br />
<GoBack />

         {/* <ShareSocial /> */}

         {/* <div className="spacer66" /> */}

  </Layout>
)

const options = {
  settings: {
    autoplaySpeed: 4000,
    boxShadow: '0px 0px 20px #000',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: true,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: '#FA02B7',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: false
  },
  thumbnails: {
    showThumbnails: false,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#000',
    fillColor: '#333',
    height: '3px',
    showProgressBar: true
  },
};
export default divePage

export const indexQuery = graphql`
query divePhotos {
  allFile(
    filter: {relativeDirectory: {eq: "DiveBars"}, relativePath: {}}
    sort: {order: ASC, fields: name}
  ) {
    edges {
      node {
        name
        id
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`
