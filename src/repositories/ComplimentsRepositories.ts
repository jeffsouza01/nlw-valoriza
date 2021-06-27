import { Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";


class ComplimentsRepositories extends Repository<Compliment> {}


export { ComplimentsRepositories }