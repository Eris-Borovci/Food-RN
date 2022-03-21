import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dC4FwiyyKJ1udAj-6QewXo2T9CDbElzbFLoU9oHuJEy6i9ZbMB97lqPX9iCi4zdmvTJ0h42IKW7XI_O1gvhF5uJgQibWlQgxRrfHFLxiqTmNgiD1Y6if50DWzswLYXYx',
    }
});