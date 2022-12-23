// import React, {Component} from 'react'
// import Input from "./input";
// import UserItem from "./user-item";

// const userList = [
//   {
//     id: 1,
//     img: 'https://picsum.photos/seed/picsum/50/50',
//     userName: 'User 1',
//     goToLink: 'some test title'
//   },
//   {
//     id: 2,
//     img: 'https://picsum.photos/seed/picsum/50/50',
//     userName: 'User 2',
//     goToLink: 'some test title 2'
//   },
//   {
//     id: 3,
//     img: 'https://picsum.photos/seed/picsum/50/50',
//     userName: 'User 3',
//     goToLink: 'some test title 2'
//   },
//   {
//     id: 4,
//     img: 'https://picsum.photos/seed/picsum/50/50',
//     userName: 'User 4',
//     goToLink: 'some test title 2'
//   }
// ]

// export default class AppClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userDataList: userList }
//   }

//  render() {
//   console.log(this.state, 'state')
//    if (!this.state.userDataList.length) {
//      return (
//        <div>
//          no data
//        </div>
//      )
//    }

//    const handleClickEditButton = () => console.log('test 1')

//    const handleDelete = (id) => {
//      console.log(id, 'id')
//      const filteredArr = this.state.userDataList.filter(i => i.id !== id)
//      console.log(filteredArr)
//      this.setState({ userDataList: filteredArr })
//    }

//    console.log(this.state.userDataList, 'in render method')

//    return (
//      <div>
//        <Input
//          loginValue={'userName@gmail.com'}
//          passValue={'12345'}
//        />
//        {this.state.userDataList.map((item, idx) => (
//          <div key={idx}>
//            <UserItem
//              item={item}
//              onClickEditButton={handleClickEditButton}
//              onDelete={() => handleDelete(item.id)}
//            />
//          </div>
//        ))}
//      </div>
//    );
//  }
// }