import React from 'react';
import './App.css';
import {Route}  from "react-router-dom";
import About from "./Route/About/About";
import Contact from "./Route/Contact/Contact";
import Home from "./Route/Home/Home";
import Blog from "./Components/Contentful/Blog/Blog"
import BlogSingle from "./Components/Contentful/Blog/useBlogSingle";
import Sports from "./Components/Contentful/SportPost/Sports";
import SingleSport from "./Components/Contentful/SportPost/SingleSport";
import SinglePolitics from "./Components/Contentful/Politics/SinglePolitics";
import Politics from "./Components/Contentful/Politics/Politics";
import EntPost from "./Components/Contentful/EntPosts/EntPost";
import SingleEntPost from "./Components/Contentful/EntPosts/SingleEntPost";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import Post from "./Components/Contentful/Posts";
import SinglePost from "./Components/Contentful/SinglePost";
import Footer from './Components/Footer/Footer';


function App() {
  return (
   <React.Fragment>
      
   
     <Header />
     <Logo   />
     <NavBar />
    {/*
        
     
       
    */}
     

      
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact-us" exact component={Contact}  />
      <Route path="/post" exact component={Post}  />
      <Route path="/post/:id" component={SinglePost}  />
      <Route path="/blog" exact component={Blog} />
      <Route path="/sports" exact component={Sports} />
      <Route path="/entertainment" exact component={EntPost} />
      <Route path="/politics" exact component={Politics} />
    


      <Footer />
     
   </React.Fragment>
  );
}

export default App;
