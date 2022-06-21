import Banner from '@components/ui/Banner';
import Portfolio from '@components/Portfolio';
import Contact from '@components/ui/Contact';
import MainLayout from '@layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <div id="main">
        <Banner title="Title" description="description" link="#" />
        <Portfolio />
        <Contact />
      </div>
    </MainLayout>
  );
}

export default App;
