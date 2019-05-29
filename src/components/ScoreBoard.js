import React from "react";
import axios from "axios";
import compare from "./compare";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sqlData: [],
      name: "",
      score: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updateDB();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    alert("A Score was added");
    let self = this;
    axios
      .get(
        `http://localhost:4000/addscore/${this.state.name}/${this.props.score}`
      )
      .then(function(response) {
        self.updateDB();
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
  }

  updateDB() {
    let self = this;
    axios
      .get("http://localhost:4000/scores")
      .then(function(response) {
        self.setState({
          sqlData: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let list = this.state.sqlData.sort(compare);
    let lowScore = -1;
    if (list.length !== 0) {
      lowScore = list["9"].score;
      console.log(`The Low Score is : ${lowScore}`);
    }

    let form = (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Add your name to the score!:
          <input
            name={"name"}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <input
          type="submit"
          value="Submit"
          onClick={() => {
            this.updateDB();
          }}
        />
      </form>
    );

    return (
      <>
        <table>
          <tbody>
            {this.state.sqlData.length !== 0 &&
              list.map((object, i) => {
                if (i < 10) {
                  return (
                    <tr>
                      <td>{object.name}</td>
                      <td>{object.score}</td>
                    </tr>
                  );
                }
                return null;
              })}
          </tbody>
        </table>
        Your Score is : {this.props.score}
        {lowScore !== -1 && this.props.score > lowScore && form}
      </>
    );
  }
}

export default App;
