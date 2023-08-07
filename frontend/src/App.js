import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './Pages/Home';
import BlogDetails from './Pages/BlogDetails';
import CreateBlogPage from './Pages/CreatedBlog';
import ProfilePage from './Pages/ProfilePage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/blogs/:id" component={BlogDetails} />
          <PrivateRoute path="/create" component={CreateBlogPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
