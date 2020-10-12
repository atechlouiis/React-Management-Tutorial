import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers=[{
  'id': 199500,
  'image':"https://placeimg.com/64/64/1",
'name': '홍길동',
'birthday': '961222',
'gender':"남자",
'job':"대학생"
},
{
  'id': 199501,
  'image':"https://placeimg.com/64/64/2",
'name': '김형준',
'birthday': '911003',
'gender':"남자",
'job':"직장인"
},
{
  'id': 199502,
  'image':"https://placeimg.com/64/64/3",
'name': '최용희',
'birthday': '930205',
'gender':"남자",
'job':"대학생"
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return(
            <Customer
            key={c.key}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })

      }
    </div>
  );
}

export default App;