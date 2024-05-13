import React from 'react'

const Dashboard = () => {
  return (
    <div className="container pt-3">
      <h2 className='text-light'>DashBoard</h2>
      <div className="row">
        <div className="col-lg-6">
          <img width='100%' src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className="col-lg-6">
          <div className="text-light pt-5">
            <p>"Books are a uniquely portable magic." - Stephen King</p>
            <p>"A room without books is like a body without a soul".</p>
            <p>"A book is a dream that you hold in your hand".</p>
            <p>"The more that you read, the more things you will know. The more that you learn, the more places you'll go". - Dr. Seuss</p>
            <p>"Books are the mirrors of the soul." - Virginia Woolf</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard