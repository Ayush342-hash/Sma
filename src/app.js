import React from 'react';
import Navbar from './components/navbar';
import PostBox from './components/postbox';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <aside className="main-content">
        
          <PostBox/>
      
          <div className="main-content-body">
        </div>
        
</aside>
<Sidebar/>
    </div>
  );
}

export default App;