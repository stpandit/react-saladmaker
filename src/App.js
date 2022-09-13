// import React from 'react';
// import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import SaladMaker from './Components/SaladMaker/SaladMaker';

function App() {
  return (
    <>
      <Navigation />
      <SaladMaker />
    </>
  );
}

export default App;
