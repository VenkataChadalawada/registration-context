import React, { Component } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
              <NavBar />
              <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;

/*
To consume context in components there are 2 ways
1) for classbased in the end
MyClass.contextType = MyContext;
or
before render method
static contextType = MyContext;


*/