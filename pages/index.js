
import Intro from '../components/Intro';
import About from '../components/About';
import PostsList from '../components/PostsList';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header/>
      {/* <div id="preloader">
        <div className="container">
          <div className="circular-spinner-1"></div>
          <div className="circular-spinner-2"></div>
        </div>
      </div> */}
      <Intro />
      <About />
      <PostsList />
      <Contact />
      <Footer />
      <script src="./js/app.js"></script>
    </>
  )
}
