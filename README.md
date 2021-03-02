# **React Portfolio**

This project is a react based portfolio that showcases the progress that I've made during my time in the Full Stack bootcamp. This portfolio contains different components, navigation with react router and is deployed with GitHub Pages.

<br><br>

![resume](https://user-images.githubusercontent.com/52800632/109608061-1b0b8400-7ade-11eb-9239-cdf5661152fc.gif)





# **Installation**

Run this command to create your react based application.

```html

npx create-react-app <appname>

```

# **Built With**

<ul>
    <li> React - JS library for building interactive user inferfaces
    <li> Bulma - CSS framework
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> HTML - The standard markup language for web pages 
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
Here is a snippit of the use of React Router that is used to render my three different pages.

```js
 
  
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path={["/", "landing", "/react-portfolio"]}>
            <Landing />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}



```
Here is a snippit of my Header Component that takes in Bulma classes
```js
function Header() {
  return (
    <section class="hero is-fullheight is-dark" id="content1">
      <div class="hero-head"></div>

      {/* // <!-- Hero content: will be in the middle --> */}

      <div className="hero-body" id="content1">
        <div className="container has-text-centered ">
          <div className="column is-one-third" id="intro">
            <h2 className="subtitle has-text-black">Online Portfolio</h2>
            <h1 className="title has-text-black">RON-ARJAY CALUAG</h1>
            <h2 className="has-text-black"> Full Stack Web Developer</h2>

            <Link to="/aboutme " target="_blank" class="button mt-4">
              About Me{" "}
            </Link>

            <br />
            <Link to="/projects" target="_blank" class="button mt-4">
              Projects{" "}
            </Link>

            <a href={resume} target="_blank" class="button mt-4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



```
# **Deployed Link**

https://arjaycaluag.github.io/React-Portfolio/
# **Authors**

Ron-Arjay Caluag<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)<br>
[Github](https://github.com/ArjayCaluag)


The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
