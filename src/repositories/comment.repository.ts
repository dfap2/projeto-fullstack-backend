import { AppDataSource } from "../data-source";
import { Comment } from "../entities";

export default AppDataSource.getTreeRepository(Comment);
