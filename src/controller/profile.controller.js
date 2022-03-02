import Validator from 'validatorjs';

export const getProfiles = (req, res) => {
    // example output
    res.json({
        data: [
            {
                userId: 5,
                hobbies: ['football', 'reading'],
                pets: [
                    {
                        name: 'Fluffy',
                        kind: 'Dog',
                        age: 3,
                    }
                ],
                favorites: {
                    food: 'Pizza',
                    movie: "Matrix 1",
                    series: "Dr. Who"
                },
            },
        ]
    });
}

export const addProfile = (req, res) => {
    // validate input
    // Here you have to check the data
    const data = req.body;

    // <-- Validation here

    if (isValdidData) {
        res.json({
            message: "Success"
        });
    } else {
        res.status(406).json({
            message: "Invalid Input",
            errors: [], // <- insert errors here
        })
    }
}