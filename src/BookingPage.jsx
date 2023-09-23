import React from 'react'

const BookingPage = (trainInfo) => {
    console.log(trainInfo.trainData)
  return (
   <div className='h-[100vh]'>
    <div className="container mx-auto mt-10 p-5 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{trainInfo.trainData.trainName}</h1>
      <p>Train Number: {trainInfo.trainData.trainNumber}</p>
      <p>
        Departure Time: {trainInfo.trainData.depatureTime.Hours}:
        {trainInfo.trainData.depatureTime.Minutes}:
        {trainInfo.trainData.depatureTime.Seconds}
      </p>
      <div className="mt-4">
        <p>Available Seats:</p>
        <ul>
          <li>Sleeper: {trainInfo.trainData.seatsAvailable.sleeper}</li>
          <li>AC: {trainInfo.trainData.seatsAvailable.Ac}</li>
        </ul>
      </div>
      <div className="mt-4">
        <p>Price:</p>
        <ul>
          <li>Sleeper: ${trainInfo.trainData.price.sleeper}</li>
          <li>AC: ${trainInfo.trainData.price.Ac}</li>
        </ul>
      </div>
      <p>Delayed by: {trainInfo.trainData.dealyedBy} minutes</p>

      <a href='/'  style={{marginTop:"200px",background:"black",borderRadius:"10px",color:"white"}}>Back</a>
    </div>
    
   </div>
  )
}

export default BookingPage