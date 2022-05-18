import { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Header from './Components/Meals/Header/Header';
import Hero from './Components/Meals/Hero/Hero';
import Menu from './Components/Meals/Menu/Menu';
import Modal from './UI/Modal/Modal';
import OrderSummary from './Components/Meals/OrderSummary/OrderSummary';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      count: 0,

      menuArr: [
        {
          id: 1,
          meal: "Sushi",
          desc: "Finest fish and veggies",
          price: 22.99,
          count: 0
        },
        {
          id: 2,
          meal: "Schnitzel",
          desc: "A german speciality",
          price: 16.33,
          count: 0
        },
        {
          id: 3,
          meal: "Barbecue Burger",
          desc: "American, raw, meaty",
          price: 12.78,
          count: 0
      
        },
        {
          id: 4,
          meal: "Green Bowl",
          desc: "Healthy...and green...",
          price: 18.45,
          count: 0
        }
      ],

      newMenuArr: [],
      purchasing: false,
    }

  }

  purchasingHandler = () => {
   this.setState({purchasing: true});
  }

  purchasingCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseOrderHandler = () => {
    alert('Thank you for your purchase!');
  }

  addSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let formId = e.target.id;
    let value = e.target[0].value;
    let newArr = [];
    let arr = [];

    this.state.menuArr.map(item => {
      return newArr.push(item)
    })

    newArr.map(item => {
      if(+formId === item.id) {
        item.count = value
        arr.push(item)
      }
    })

    this.setState({newMenuArr: [...this.state.newMenuArr, ...arr]})
    this.setState({menuArr: [...newArr]})
    // console.log(this.state.newMenuArr);

  }


  render() {
    let counter = 0
    this.state.menuArr.map(item => {
      return counter += +item.count
    })
    // console.log(this.state.menuArr);
    return (
      <div className="App">
        <Layout>
          <Header 
            modalBtnFunc = {this.purchasingHandler}
            counter = {counter}
          />
          <Hero />
          <div className='menuBoxses'>
            {this.state.menuArr.map((meal, i) => {
              // console.log(meal);
                return  <Menu 
                  key={i} 
                  meal = {meal.meal} 
                  desc = {meal.desc} 
                  price = {meal.price}
                  id = {meal.id}
                  addSubmitFunc = {this.addSubmit}
                />
            })}
          </div>
          <Modal show = {this.state.purchasing} modalClose = {this.purchasingCancelHandler}>
             <OrderSummary 
                ingredents = {this.state.menuArr}
                purchaseOrder = {this.purchaseOrderHandler}
                purchaseCansel = {this.purchasingCancelHandler}
                newMenu = {this.state.newMenuArr}
             />
          </Modal>
        </Layout>
      </div>
    )
  }
}

export default App;
