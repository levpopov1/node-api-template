import { DataSource } from "apollo-datasource";
import { Person } from "../model/Person";

class PeopleAPI extends DataSource {
  constructor() {
    super();
  }

  async getPeople() {
    return await Person.find();
  }

  async getPersonById(id: string) {
    return await Person.findById(id);
  }
}

export default PeopleAPI;
