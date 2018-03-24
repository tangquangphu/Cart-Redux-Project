import React, { Component } from 'react';
import Header from './components/Header';
//ProductsContainer là nơi để hứng các giá trị từ store và truyền đến Products
import ProductsContainer from './containers/ProductsContainer';
//MessageContainer là nơi để hứng các giá trị từ store và truyền đến Message
import MessageContainer from './containers/MessageContainer';
//CartContainer là nơi để hứng các giá trị từ store và truyền đến Cart
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';


class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        
                        <ProductsContainer></ProductsContainer>
                        
                        <MessageContainer></MessageContainer>
                        
                        <CartContainer></CartContainer>
                    </div>
                </main>
                
                <Footer></Footer>
    
            </div>
        );
    }
}

export default App;
