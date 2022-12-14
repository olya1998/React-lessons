function MyOwnComponent() {
    const user = {
        name: "Olya",
        age: 24,
        cities: "Kharkiv",
    };

    const {name, age, cities} = user;
    const handleClick = () => {
        console.log('clicked')
    }
    return (
      <div className="test">
        <span className="user">My name = {name}</span>
        <br />
        <button name="" onClick={handleClick} className="dummy">Click me</button>
        <br />
        <span className="age">{age}</span>
        <br />
        <span className="cities">{cities}</span>
        <br />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" />
  
      </div>
    )
  }

export default MyOwnComponent;