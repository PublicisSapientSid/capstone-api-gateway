export const SIGN_IN_USER = `
    mutation SignInUser($user: String!, $password: String!) {
        signInUser(authInput: { password: $password, username: $user }) {
            access_token
        }
    }
`;

export const GET_USER = `
    query FindSingleUser ($userID: String!) {
        findSingleUser(userID: $userID) {
            _id
            hotels {
                _id
                address
                amenities
                city
                country
                description
                email
                hasParking
                hasRestaurant
                hasSpa
                images
                latitude
                longitude
                name
                phone
                rating
            }
            email
            isAdmin
            password
            role
            service
            username
        }
    }

`;

export const GET_ALL_HOTELS = `
    query FindAllHotels {
        findAllHotels {
            _id
            address
            city
            country
            description
            email
            name
        }
    }
`;

export const GET_HOTEL = `
    query FindHotel($hotelID: String!) {
        findHotel(hotelID: $hotelID) {
            _id
            address
            amenities
            city
            country
            description
            email
            hasParking
            hasRestaurant
            hasSpa
            images
            latitude
            longitude
            name
            phone
            rating
            shortname
            totalRooms
            types {
                pricing
                roomType
            }
            owner {
                _id
                username
                email
            }
        }
    }

`;

export const GET_ALL_USERS = `
    query FindAllUsers {
        findAllUsers {
            _id
            email
            isAdmin
            password
            role
            service
            username
            hotels {
                _id
                address
                amenities
                city
                country
                description
                email
                hasParking
                hasRestaurant
                hasSpa
                images
                latitude
                longitude
                name
                phone
                rating
            }
        }
    }
`;
