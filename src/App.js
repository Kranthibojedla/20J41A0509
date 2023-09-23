import './App.css';
import { useState } from 'react';
import BookingPage from './BookingPage';
const tainData = [
  {
    trainName:"Chennai Express",
    trainNumber:"2224",
    depatureTime:{
      Hours:21,
      Minutes:35,
      Seconds:0
    },
    seatsAvailable:{
      sleeper:3,
      Ac:1
    },
    price:{
      sleeper:2,
      Ac:5
    },
    dealyedBy:15
  },
  {
    trainName:"Hyderbad Express",
    trainNumber:"2341",
    depatureTime:{
      Hours:23,
      Minutes:55,
      Seconds:0
    },
    seatsAvailable:{
      sleeper:6,
      Ac:7
    },
    price:{
      sleeper:554,
      Ac:1854
    },
    dealyedBy:5
  },
{
  trainName:"Mubai Express",
  trainNumber:"2343",
  depatureTime:{
    Hours:24,
    Minutes:55,
    Seconds:10
  },
  seatsAvailable:{
    sleeper:6,
    Ac:7
  },
  price:{
    sleeper:554,
    Ac:1854
  },
  dealyedBy:5
  },
{
  trainName:"Rajasthan Express",
  trainNumber:"3333",
  depatureTime:{
    Hours:17,
    Minutes:35,
    Seconds:0
  },
  seatsAvailable:{
    sleeper:3,
    Ac:1
  },
  price:{
    sleeper:2,
    Ac:5
  },
  dealyedBy:15
},
{
  trainName:"Goa Express",
  trainNumber:"3344",
  depatureTime:{
    Hours:13,
    Minutes:55,
    Seconds:23
  },
  seatsAvailable:{
    sleeper:6,
    Ac:7
  },
  price:{
    sleeper:554,
    Ac:1854
  },
  dealyedBy:5
  },
{
trainName:"Kashmir Express",
trainNumber:"2341",
depatureTime:{
  Hours:24,
  Minutes:55,
  Seconds:0
},
seatsAvailable:{
  sleeper:6,
  Ac:7
},
price:{
  sleeper:554,
  Ac:1854
},
dealyedBy:5
  },
]

function App() {
  const [isClick , setIsClick] = useState(false);
  const [data,setData] = useState();
  const bookinPage = (index)=>{
    setData(tainData[index])
    setIsClick(!isClick);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-4xl font-bold p-4'>John De Railways</h1>

      {
        !isClick && <div className='flex justify-center flex-wrap p-10'>
        {
          tainData.map((items,index)=>(
            <div onClick={()=>{bookinPage(index)}} key={index} className=" md:m-5 mbg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="font-bold">Train Number:</span> {items.trainNumber}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Train Name:</span> {items.trainName}
                </div>
                <div>
                  <span className="font-bold">Time:</span> {`${items.depatureTime.Hours}:${items.depatureTime.Minutes}:${items.depatureTime.Seconds}`}
                </div>
              </div>
            </div>
          ))
        }
        </div>
      }

      {
        isClick && <BookingPage trainData = {data}/>
      }
    
    </div>
  );
}

export default App;
