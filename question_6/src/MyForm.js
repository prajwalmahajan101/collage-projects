import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,FormGroup,Label,Input,Button } from 'reactstrap';


export default function MyForm() {
  return (
    <div className="p-5 card MyForm" style={{margin:"5% 15%"}}>
    <Form>
  <FormGroup>
  <Label for="Name">
      Name
    </Label>
    <Input
      id="Name"
      name="name"
      placeholder="Name"
      type="Text"
    />
    <Label for="Email">
      Email
    </Label>
    <Input
      id="Email"
      name="email"
      placeholder="username@exapmle.com"
      type="email"
    />
     <Label for="Phone">
      Phone
    </Label>
    <Input
      id="Phone"
      name="phone"
      placeholder="9999999999"
      type="tel"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Day">
      Event Day
    </Label>
    <Input
      id="day"
      name="day"
      type="select"
    >
      <option>
        Event day 1
      </option>
      <option>
      Event day 2
      </option>
      <option>
      Event day 3
      </option>
      <option>
      Event day 4
      </option>
      <option>
      Event day 5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="Address">
      Address
    </Label>
    <Input
      id="Address"
      name="address"
      type="textarea"
    />
  </FormGroup>
  <FormGroup tag="fieldset" style={{textAlign:"Left"}}>
    <legend style={{fontSize:"1.5em"}}>
    First time to attend this conference?
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Yes
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        No
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check style={{textAlign:"Left"}}>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Are You Sure You will be Attending??  
    </Label>
  </FormGroup>
  <Button className='btn btn-success h1'size="lg" style={{marginTop:"10px"}} >
    Submit
  </Button>
</Form>
</div>
  )
}
