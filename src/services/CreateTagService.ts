import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepositories"

class CreateTagService {

  async execute(name: string) {
    const tagRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Invalid name!")
    }

    const tagAlreadyExists = await tagRepository.findOne({name})

    if(tagAlreadyExists) {
      throw new Error("Tag Already exists!")
    }

    const tag = tagRepository.create({
      name
    })

    await tagRepository.save(tag);

    return tag;

  }

}

export { CreateTagService }