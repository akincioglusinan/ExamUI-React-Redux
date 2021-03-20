# Create English Exam Project User Interface

## Description

It offers creating English exams based on published articles of wired.com.

The site is live on https://createxam.netlify.com.

With this website;

  - You can create your own exams based on wired.com articles easily.
  - You can test your english level by your exams.
  - You can show and delete exams who you added.
  - Also you can test yourself by other creators's exams.

In the main page when you click the titles of the articles, it expands to show content and question form of the articles. 

You can read the website contents and take exams without authenticating. 

If you want to create an exam about articles you have to register and be logged in website. 

Thus it allows create exam or delete exams which you created.

## Design

It uses as state management Redux library. 

In order to dispatching functions to Redux I used Redux Thunk middleware.

As interface design is used React Bootstrap and Bootstrap 4.6v.

For requesting from Api is used Axios library.

The Web Api is designed by .Net Core which its source codes and detail descriptions are following link https://github.com/akincioglusinan/Exam-.NetCore-WebApi-MVC.









