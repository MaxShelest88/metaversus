import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="graditent-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="graditent-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="graditent-04 z-0" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
