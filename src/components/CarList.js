import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";

import CarDetail from "./CarDetail";

class CarList extends Component {
    constructor(){
        super();

        this.state = {CarList: []};
    }

    componentDidMount() {
        axios.get("https://givecars.herokuapp.com").then(response =>{
            this.setState({ CarList: response.data});
        });
    }

    renderList = () => {
        return this.state.CarList.map((brand) => {
            return <CarDetail key={ brand.model[0].name} brand = {brand} />
        });
    }


    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderList ()}
            </ScrollView>
        );
    }
}

export default CarList;
