import React from 'react'
import {Row,Col,Dropdown} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Customedatepicker from './datepicker';
const Filter = () => {

const menu = [{id:1,title:"Date Of Regiration"},
{id:2,title:"Vendor score"},
{id:3,title:"Rating"},
{id:4,title:"Status"}
]

  return (
    <div className='filter'>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="filter" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul class="dropdown-menu" aria-labelledby="filter">
    {
        menu.map((item)=>{
            return(
                <li><a class="dropdown-item" href="#" key={item.id}>{item.title}</a></li>
            )
        })
    }
  </ul>

  <Customedatepicker 
  defaultDate={new Date()}
disableFutureDates={true}
disablePastDates={false}
hideLeftSidebar={false}
leftSibebarContent={<div>custom content</div>}
changeButtonName="chooseDate"

/>
</div>
  )
}

export default Filter