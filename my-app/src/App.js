import "./App.scss";
import Section from "./NavBar/Section/Section.jsx";
import Aside from "./Aside/Aside";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AsideNews from "./Aside_News/Aside_News";
import Aside_Music from "./Aside_Music/Aside_Music";
import FriendsContainer from "./Aside_Friends/FriendsContainer";
import ProfileContainer from "./Aside_Profile/ProfileContainer";
import HeaderContainer from "./NavBar/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer></HeaderContainer>
        <Section></Section>
        <Switch>
          <Route path="/aside" render={() => <Aside></Aside>}></Route>
          <Route path="/profile/:userID" component={ProfileContainer}></Route>
          <Route path="/music" component={Aside_Music}></Route>
          <Route
            path="/friends"
            render={() => <FriendsContainer></FriendsContainer>}
          ></Route>
          <Route path="/" render={() => <AsideNews></AsideNews>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
