import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import Content from './Content';
import Footer from './Footer'


function App() {
  return (
    <div className="App">
    <Header />
    <AddTask />
    <main>
      <Content />
    </main>
    <Footer />
      
    </div>
  );
}

export default App;
