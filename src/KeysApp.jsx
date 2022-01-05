// import List from "./components/List/List";

import React from "react"
import { Fragment } from "react";
import { Component } from "react";
import { PureComponent } from "react";

class KeysApp extends Component {
   state = {
      names: ["Миша", "Даниил", "Марина"]
   }

   AddToTop = name => {
      this.setState(state => ({
         names: [name, ...state.names]
      }))
      // debugger
   }

   AddToBottom = name => {
      this.setState(state => ({
         names: [...state.names, name]
      }))
   }

   render() {
      // debugger
      return (
         <div className="wrapper">
            <Names names={this.state.names} />
            <Form AddToTop={this.AddToTop} AddToBottom={this.AddToBottom} />
         </div>
      )
   }
}

class Form extends PureComponent {
   getInput = el => {
      this.input = el
   }

   AddBottom = () => {
      this.props.AddToBottom(this.input.value)
      this.input.value = "";
   }

   AddTop = () => {
      this.props.AddToTop(this.input.value)
      this.input.value = "";
   }

   handleSubmit = e => {
      // Для предотвращения обновления браузера.
      // Событие обновляет браузер для отправки формы.
      e.preventDefault()
   }

   render() {
      return (
         // Например, кнопка отправки формы в React всегда будет запускать обновление браузера для отправки данных в серверную систему. Это плохо, потому что поведение, которое вы определили в функции события onSubmit, будет игнорироваться браузером. Попробуйте следующий пример:
         // Из-за поведения события DOM по умолчанию функция handleSubmit будет проигнорирована, и ваш журнал не будет записан на консоли.
         <form onSubmit={this.handleSubmit}>
            <input ref={this.getInput} type="text" />
            <button onClick={this.AddTop} >Add to TOP</button>
            <button onClick={this.AddBottom} >Add to BOTTOM</button>
         </form>
      )
   }
}

const Names = ({ names }) => (
   <ul>
      {names.map(name => (
         <Name name={name} />
      ))}
   </ul>
)

const Name = ({ name }) => (
   <li>{name}</li>
)

export default KeysApp