import React from 'react';
import Post from "./components/post";
import ELON_IMAGE from "./assets/img/avatar.jpg";
import POST_IMAGE_1 from "./assets/img/1.jpg";
import POST_IMAGE_2 from "./assets/img/2.jpg";



const authors = [{
        name: 'Elon Mask',
        photo: ELON_IMAGE,
        nickname: '@elonmusk',
        content: '🇩🇪🖤Giga Berlin Mannschaft🖤🇩🇪 Vielen Dank für Ihre hervorragende Arbeit an Giga Berlin!!',
        image: POST_IMAGE_1,
        date: '4 sep'
    },
    {
        name: 'Elon Mask',
        photo: ELON_IMAGE,
        nickname: '@elonmusk',
        content: '',
        image: POST_IMAGE_2,
        date: '4 sep'
    }
]

function App() {
  return (
      <div>
          {authors.map(author => <Post{...author}/>)}
      </div>

  )
}

export default App;
