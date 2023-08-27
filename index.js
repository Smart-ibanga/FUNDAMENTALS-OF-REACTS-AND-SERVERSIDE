// const rootElement = document.getElementById('app');



// const myElement = document.createElement('h1');
// myElement.className = "orange";
// myElement.innerText = 'Hello from Pluralsight'



// const myReactElement = React.createElement('h1', 
// {className: 'orange'}, 
// "Hello From Pluralsight and React");

// rootElement.appendChild(myElement);


// const Hello= function(props) {
//  return React.createElement( "h1", {
//     className:"orange"
//  } , "Hello from Plural sight and React" + " "+ props.time )
// }

class Hello extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                time: new Date().toLocaleString()
            }
    }

    tick() {
        this.setState( ()=> {
            return ( {
                time: new Date().toLocaleString()
            });
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.tick(), 1000)
    }


    render() {
         return React.createElement( "h1", {
      className: "orange",
    }, "Hello from Plural sight and React" + " " + this.state.time );
  };
};


 ReactDOM.render(

     React.createElement( Hello, { time: new Date().toLocaleDateString()}, null),
     document.getElementById('app')
     
     );