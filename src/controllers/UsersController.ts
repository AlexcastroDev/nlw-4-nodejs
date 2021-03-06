import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import { User } from './../Models/User'

class UserController {
    async create(request: Request, response: Response) {
        const {name, email} = request.body;
        const userRepository = getRepository(User);
        const hasUser = await userRepository.findOne({email})
        if(hasUser) {
            return response.status(400).json({
                error: "email already created"
            })
        }
        const user = userRepository.create({name, email})
        await userRepository.save(user);

        return response.json(user)
    }
}

export {UserController}