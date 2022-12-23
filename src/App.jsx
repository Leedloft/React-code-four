import React, {useEffect, useState} from 'react'
import Input from "./components/input";

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

const App = () => {
  // const [userDataList, setState] = useState(userList)

  // if (!userDataList.length) {
  //   return (
  //     <div>
  //       no data
  //     </div>
  //   )
  // }

  // const handleClickEditButton = () => console.log('test 1')

  // const handleDelete = (id) => {
  //   console.log(id, 'id')
  //   const copiedArr = [...userDataList]
  //   const filteredArr = copiedArr.filter(i => i.id !== id)
  //   console.log(copiedArr)
  //   setState(filteredArr)
  // }

  return (
    <div>
      <Input
        loginValue={'userName@gmail.com'}
        passValue={'12345'}
      /> 
       {/* {userDataList.map((item, idx) => (
        <div key={idx}>
          <UserItem
            item={item}
            onClickEditButton={handleClickEditButton}
            onDelete={() => handleDelete(item.id)}
          />
        </div>
      ))} */}
    </div>
  );
}

export default App;
