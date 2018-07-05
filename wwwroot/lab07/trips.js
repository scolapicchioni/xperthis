import TripsRepository from "./tripsrepository.js";
import ViewModel from "./viewmodel.js";

const repo = new TripsRepository()
const vm = new ViewModel(repo)
