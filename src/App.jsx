import Hero from './components/Hero';
import FluffySprites from './components/FluffySprites';
import StarsAndSparkles from './components/StarsAndSparkles';
import { Messages, Reasons } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#F8F5FF] via-[#FFF7FB] to-[#F2FBFF] text-slate-800">
      <div className="relative">
        <Hero />
        <FluffySprites />
        <StarsAndSparkles />
      </div>

      <Messages />
      <Reasons />

      <footer className="relative z-10 mx-auto max-w-5xl px-6 pb-10 pt-6 text-center text-sm text-slate-500">
        Made with love • Ghibli-soft lighting • Digital pastel web aesthetic
      </footer>
    </div>
  );
}

export default App;
