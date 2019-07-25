import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-ionicons";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

class Calendrier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      dateMore1: "",
      dateMore2: "",
      color: "#565656",
      size: 15,
      fontWeight: "normal",
      height: this.props.height,
      tabletMode: this.props.tabletMode,
      isDateTimePickerVisible: false
    };
  }

  changeColor = () => {
    this.setState({ color: "#C29064" });
    this.setState({ size: 17 });
    this.setState({ fontWeight: "bold" });
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({
      date: moment(date).format("DD"),
      dateMore1: moment(date)
        .add(1, "days")
        .format("DD"),
      dateMore2: moment(date)
        .add(2, "days")
        .format("DD")
    });
    this.hideDateTimePicker();
  };

  render() {
    const borderBottomWidth = this.state.tabletMode ? 0 : 0.5;
    const borderBottomColor = this.state.tabletMode ? "transparent" : "#565656";
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: this.state.height,
          borderBottomWidth: borderBottomWidth,
          borderBottomColor: borderBottomColor
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center" }}
          onPress={this.showDateTimePicker.bind(this)}
        >
          <Icon name="md-calendar" size={32} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center" }}
          onPress={this.changeColor.bind(this)}
        >
          <Text
            style={{
              fontSize: this.state.size,
              color: this.state.color,
              fontWeight: this.state.fontWeight
            }}
          >
            {this.state.date}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center" }}
          onPress={this.changeColor.bind(this)}
        >
          <Text
            style={{
              fontSize: this.state.size,
              color: this.state.color,
              fontWeight: this.state.fontWeight
            }}
          >
            {this.state.dateMore1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center" }}
          onPress={this.changeColor.bind(this)}
        >
          <Text
            style={{
              fontSize: this.state.size,
              color: this.state.color,
              fontWeight: this.state.fontWeight
            }}
          >
            {this.state.dateMore2}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date

    var dateMore1 = new Date().getDate() + 1;
    var dateMore2 = new Date().getDate() + 2;

    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      date,
      dateMore1,
      dateMore2
    });
  }

  /*componentDidUpdate(prevProps, prevState) {
        if (prevState.date !== this.state.date) {
            this.setState({
                dateMore1: this.state.date + 1,
                dateMore2: this.state.date + 2,
            })
        }
    }*/
}

export default Calendrier;
