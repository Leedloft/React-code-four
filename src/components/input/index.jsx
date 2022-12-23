import React from "react";
import styles from './style.module.css'


const DATA = [
  {
    id: 1,
    title: 'some title post 1',
    body: 'as das da ds'
  }
]

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      postList: DATA
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    const copiedArr = [...this.state.postList]
    copiedArr.push({
      id: Math.random(),
      body: '',
      title: this.state.postTitle
    })
    this.setState({postList: copiedArr})
    this.setState({postTitle: ''})
  }

  handleDelete = (id) => {
    console.log(id, 'id')
    const copiedArr = [...this.state.postList]
    const filteredArr = copiedArr.filter(i => i.id !== id)
    console.log(copiedArr)
    this.setState({postList: filteredArr})
  }

  handleChangeInput = e => {
    this.setState({
      postTitle: e.target.value
    })
  }
 
  render() {
    console.log(this.state, 'state input component')
    return (
     <div  className={styles.container}>
      <div  className={styles.input_add}>
       <form onSubmit={this.handleSubmitForm}>
         <input
         className={styles.input_value}
           value={this.state.postTitle}
           type="text"
           placeholder='enter title'
           onChange={this.handleChangeInput}
         />
         <button className={styles.button_add} type='submit'>add</button>
       </form>
       </div>
       {this.state.postList.map((item) => {
         return (
           <div className={styles.added_text} key={item.id}>
             {item.title}
             <button className={styles.delete_button} onClick = {()=> this.handleDelete (item.id)}>Delete</button>
           </div>
         )
       })}
     </div>
    )
  }
}