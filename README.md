# gh-blog
Blogging made simple. No adware, no bloatware, and fully customizable. 

This repository serves as a template and will allow you to instantly start blogging with your github account.

Make sure you have a github page for your username and have created a repository with the name username.github.io

Clone this repo into username.github.io repository and checkout another branch to develop on.

## Steps to get started

- Head over to GitHub and create a new repository named username.github.io, where username is your username (or organization name) on GitHu (https://pages.github.com/)
```
$ git clone https://github.com/username/username.github.io
# Add this repositories source code to your repo
$ git checkout -b development
$ npm install
$ npm run deploy
# go to username.github.io to see your site
```

## Running the blog locally

```
npm install
npm run start
```

You can see the site at http://localhost:8000/

## How to deploy

Make sure your development branch is not master. The code to host your website will have to be pushed to the master branch. 

```
npm run deploy
```

## How to write content

- Add images to `src/images` when linking them in markdown files
- Create a new markdown file in `src/markdown-pages` for them to show up in the article listing
- Check out the initial post in `src/markdown-pages` for more information

## Files you will need to update to customize your site

I left some <> variables and other random strings as placeholders. 

- package.json
- gatsby-config.js


