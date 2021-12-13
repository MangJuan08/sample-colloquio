
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Comments from "./components/Comments";
import Home from "./components/Home";
import PageSinglePost from "./components/PageSinglePost";




function App() {
  return (
    <div className="container" style={{marginTop:'100px'}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/singlePost/:id" element = {<PageSinglePost/>}/>
        <Route path="/post/:id/comments" element = {<Comments/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
