import React from "react";
import { Route, Switch } from "react-router-dom";
import VetList from "../Vets/VetList";
import OwnerList from "../Owners/OwnerList";
import PetList from "../Pets/PetList";
import Home from "../Home/Home";
import { BrowserRouter } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/vets" component={VetList} />
      <Route path="/owners" component={OwnerList} />
      <Route path="/pets" component={PetList} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
