# Magic_8_Ball_API
[![Waffle.io - Columns and their card count](https://badge.waffle.io/mnhollandplum/magic_8_ball.svg?columns=all)](https://waffle.io/mnhollandplum/magic_8_ball)[![Build Status](https://travis-ci.org/tmaria17/calorie-counter-be.svg?branch=master)](https://travis-ci.org/tmaria17/calorie-counter-be)
[![Build Status](https://travis-ci.org/mnhollandplum/magic_8_ball_api.svg?branch=master)](https://travis-ci.org/mnhollandplum/magic_8_ball_api)
## Introduction
 This project is an express API. This API currently has a POST endpoint to create a new piece of advice, and a GET endpoint to retreive all advice in the database.
 
See it deployed here: https://pacific-hamlet-18372.herokuapp.com/ <br>
Checkout the frontend and submit advice here: https://mnhollandplum.github.io/magic_8_ball/
## How to Use

1. Clone this repository and rename the repository to anything you'd like in one command:

  ```shell
  git clone git@github.com:mnhollandplum/magic_8_ball_api
  ```
  Visit: http://localhost:3000/ to run the application
  
  ## Endpoints 
  
  * GET /api/v1/slips
  ``` 
 [
  {
    "id": 1,
    "advice": "Think before you speak. Read before you think.",
    "created_at": "2019-02-27T03:09:07.781Z",
    "updated_at": "2019-02-27T03:09:07.781Z"
  },
  {
    "id": 2,
    "advice": "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    "created_at": "2019-02-27T04:00:07.413Z",
    "updated_at": "2019-02-27T04:00:07.413Z"
  },
  {
    "id": 3,
    "advice": "Love is the only way",
    "created_at": "2019-02-27T04:12:41.545Z",
    "updated_at": "2019-02-27T04:12:41.545Z"
  },
  {
    "id": 4,
    "advice": "To handle yourself, use your head; to handle others, use your heart.",
    "created_at": "2019-02-27T05:49:56.214Z",
    "updated_at": "2019-02-27T05:49:56.214Z"
  },
  {
    "id": 5,
    "advice": "To handle yourself, use your head; to handle others, use your heart.",
    "created_at": "2019-02-27T05:51:00.623Z",
    "updated_at": "2019-02-27T05:51:00.623Z"
  },
  {
    "id": 6,
    "advice": "To handle yourself, use your head; to handle others, use your heart.",
    "created_at": "2019-02-27T05:51:01.739Z",
    "updated_at": "2019-02-27T05:51:01.739Z"
  }
]

  ```
  
  
  * POST /api/v1/slips

```
{ "slip": { "advice": "This is the best advice you've ever recieved"}
```

## Known Issues

## How to Contribute 
To contribute to this project please fork and submit a pull request.

## Core Contributers 

[Nikki Holland-Plum](https://github.com/mnhollandplum)


## Built With

* [JavaScript](https://www.javascript.com/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* Node.js
* Knex


