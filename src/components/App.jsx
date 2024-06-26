import { GlobalStyle } from "styles/GlobalStyle";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { About } from "./About/About";
import { Electricity } from "./Electricity/Electricity";
import { Cases } from "./Cases/Cases";
import { Faq } from "./Faq/Faq";
import { ContactUs } from "./ContactUs/ContactUs";
import { Footer } from "./Footer/Footer";


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header /> 
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};
