import React from "react"

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().toLocaleString(),
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return <h1>
        Hello from Plural sight and React:
        {this.state.time}
    </h1>;
  }
}

export default index;
