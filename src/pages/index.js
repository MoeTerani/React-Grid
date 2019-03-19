import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/video/">Watch the video</Link>
        <div className="Logos">
          <img
            src={require('../images/logo-html.png')}
            alt="html Logo"
            width="50"
          />
          <img
            src={require('../images/logo-css.png')}
            alt="css Logo"
            width="50"
          />
          <img
            src={require('../images/logo-sass.png')}
            alt="sass Logo"
            width="50"
          />
          <img
            src={require('../images/logo-javascript.png')}
            alt="javascript Logo"
            width="50"
          />
          <img
            src={require('../images/logo-react.png')}
            alt="react Logo"
            width="50"
          />
          <img
            src={require('../images/logo-sketch.png')}
            alt="sketch Logo"
            width="50"
          />
          <img
            src={require('../images/logo-figma.png')}
            alt="figma Logo"
            width="50"
          />
          <img
            src={require('../images/logo-framer.png')}
            alt="framer Logo"
            width="50"
          />
          <img
            src={require('../images/logo-xd.png')}
            alt="xd Logo"
            width="50"
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses and more coming</h2>
      <div className="CardGroup">
        <Card
          title="React for beginners 1"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for beginners 2"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="React for beginners 3"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="React for beginners 4"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
        />
        <Card
          title="React for beginners 5"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="React for beginners 6"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Beginners"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
