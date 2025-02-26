import { Helmet } from "react-helmet-async";
import DisableInspect from "./DisableInspect";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
  <>
  <Helmet>
        <title>Pixel Flow Creation – Wedding Photography & Videography</title>
        <meta
          name="description"
          content="Pixel Flow Creation captures your wedding day with stunning photography and cinematic videography. Let us turn your love story into timeless memories."
        />
        <meta property="og:title" content="Pixel Flow Creation – Wedding Photography & Videography" />
        <meta property="og:description" content="Capturing your love story with cinematic wedding photography & videography." />
        <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
  <DisableInspect></DisableInspect>
  <Header></Header>
  <Footer></Footer>

  </>
  );

}

export default App;
