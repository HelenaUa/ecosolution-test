import { GlobalStyle } from "styles/GlobalStyle";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Electricity } from "./Electricity/Electricity";
import { Cases } from "./Cases/Cases";
import { Faq } from "./Faq/Faq";
import { ContactUs } from "./ContactUs/ContactUs";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <div>
      <GlobalStyle />
      <Header /> 
      <Main />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};
