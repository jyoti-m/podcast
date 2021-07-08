import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import PodcastRow from './components/PodcastRow'
import Episode from './components/Episode'

const App = () => {

    const podcasts = [
        {id:0, name:'podcast 1', image:'/images/person_1.jpg', categories:['sports', 'entertainment']},
        {id:1, name:'podcast 2', image:'/images/person_2.jpg', categories:['news', 'politics']},
        {id:2, name:'podcast 3', image:'/images/person_3.jpg', categories:['business', 'economy']},  
    ]
    const episodes = [
        {id:0, title:'track 1', image:'/images/img_1.jpg', trackurl:'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3'},
        {id:1, title:'track 2', image:'/images/img_2.jpg', trackurl:'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3'},
        {id:2, title:'track 3', image:'/images/img_3.jpg', trackurl:'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3'},
        {id:3, title:'track 4', image:'/images/img_4.jpg', trackurl:'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3'},
        {id:4, title:'track 5', image:'/images/img_5.jpg', trackurl:'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3'},
    ]
   return (
       
       <div className="site-wrap">
       <Header />
       <div className="site-section">
       <div className="container">
       <div className="row">
       <div className="col-lg-3">
       <div className="featured-user  mb-5 mb-lg-0">
       <ul className="list-unstyled">
       {podcasts.map(podcast => <PodcastRow key={podcast.id} {...podcast} />)}
       
       </ul>
       
       </div>
       </div>
       

       <div className="col-lg-9">
       {episodes.map(episode => <Episode key={Episode.id} {...episode}   />)}

       </div>


       </div>
       </div>
       </div>
       </div>
   )
}


ReactDOM.render(<App />, document.getElementById('root'))

