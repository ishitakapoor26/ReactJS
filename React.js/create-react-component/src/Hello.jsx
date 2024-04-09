function Hello(){

  // let myName= 'Ishita';
  let fullName = ()=>{
    return 'Ishita Kapoor';
  }

  return <h3>
    {/* Hello {myName}, this is the future speaking! */} 
    {/* --Dynamic Component */}
    Hello {fullName()}, this is the future speaking!
  </h3>
}

export default Hello;