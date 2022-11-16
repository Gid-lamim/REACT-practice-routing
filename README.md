# REACT  Routing

---

In this repository, I'm practicing with ReactJs routing. 

@[Maximilian Schwarzmüller ](https://github.com/maxschwarzmueller)

One important feature of React is that it can render diferent elements into a single page. 
You can choose to hide elements, show other elements, you name it... You can use only one page, one path. 

But sometimes it's desirable to have different paths. Specially with a bigger website with many functionalities, things can get a little complicated. For instance, If you have a webpage to sell products, and you have a path for each product, 
you can send a link to somebody, and you know the link will take to a certain product. On the other hand, if everything loads onto one single page, if you send the link, it will load the main page, not the product.

---
## Working with Links

Working with links is a bit tricky though. If we use standard links <a...> we will reload the page, and we will lose any state that we had. For example, if the user has a cart with items loaded as a state, that will make the cart lose its content. 

### Link vs NavLink

Link         |  NavLink
:-------------------------:|:-------------------------:
![](./src/Pictures/Link.png)  |  ![](./src/Pictures/NavLink.png)

Unlike Link, NavLink allows us to see what page we're actually on. That can be quite usefull sometimes.

What it does is: it has a prop that allows us to set a css class to the button whenever the page is active.

    <NavLink activeClassName="activePage" to="/welcome">Welcome</NavLink>


