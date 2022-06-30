import Banner from '@components/ui/Banner';
import Portfolio from '@components/Portfolio';
import Contact from '@components/Contact';
import MainLayout from '@layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <div id="main">
        <Banner
          title="Welcome to Gamez"
          description="This is a simple site with mini games on the web"
          link="#"
        />
        <Portfolio />
        <Contact />
      </div>
    </MainLayout>
  );
}

export default App;
