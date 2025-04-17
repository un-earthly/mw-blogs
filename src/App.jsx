import BlogHero from "./components/BlogHero";
import AllBlogs from "./components/AllBlogs";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <div className=" bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
        <div className="container m-auto">
          <BlogHero />
          <AllBlogs />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
