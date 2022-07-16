import User from '../models/User'

class UserService {
    async getAllUsers(req, res) {
        try {
            const getUser = await User.find();
            return getUser;

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }

    }

    async getUser(userData) {
        try {
            const { id } = userData;
            const user = await User.findById(id);

            if (!user) {
                return { message: 'User not found.' }
            }

            return user;
        } catch (err) {
            console.error(err);
            return { error: "Invalid ID value." }
        }
    }


    async updateUser(userId, userData) {
        try {
            const { id } = userId;
            const { name, email, password } = userData;
            console.log(id, name, email, password);
            const user = await User.findById(id);

            if (!user) {
                return { message: 'User not found.' }
            }

            await user.updateOne({ name, email, password });

            return { message: 'User updated.' }

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }
    }


    async deleteUser(userData) {
        try {
            const { id } = userData;
            const user = await User.findById(id);

            if (!user) {
                return { message: 'User not found.' }
            }

            await user.deleteOne();
            return { message: 'User deleted.' }

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." }
        }
    }

    async createUser(userData) {
        try {
            const { name, email, password } = userData;
            const user = await User.findOne({ email });

            if (user) {
                return { message: `User ${email} already exists.` };
            }
            const newUser = await User.create({
                name,
                email,
                password
            });

            return newUser

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." }
        }

    }

}

export default new UserService();