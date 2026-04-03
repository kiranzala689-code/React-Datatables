import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div className="container mt-4">
      <div className="row">

      
        <div className="col-md-3 mb-3">
          <div className="list-group shadow">

            <Link
              to="electronics"
              className="list-group-item list-group-item-action"
            >
              Electronics
            </Link>

            <Link
              to="jwellery"
              className="list-group-item list-group-item-action"
            >
              Jewellery
            </Link>

          </div>
        </div>


        <div className="col-md-9">
          <div className="card shadow p-3">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product