const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "Shakhawat15",
  id: 53015117,
  node_id: "MDQ6VXNlcjUzMDE1MTE3",
  avatar_url: "https://avatars.githubusercontent.com/u/53015117?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Shakhawat15",
  html_url: "https://github.com/Shakhawat15",
  followers_url: "https://api.github.com/users/Shakhawat15/followers",
  following_url:
    "https://api.github.com/users/Shakhawat15/following{/other_user}",
  gists_url: "https://api.github.com/users/Shakhawat15/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Shakhawat15/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Shakhawat15/subscriptions",
  organizations_url: "https://api.github.com/users/Shakhawat15/orgs",
  repos_url: "https://api.github.com/users/Shakhawat15/repos",
  events_url: "https://api.github.com/users/Shakhawat15/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Shakhawat15/received_events",
  type: "User",
  site_admin: false,
  name: "Md. Shakhawat Hossen",
  company: null,
  blog: "https://apex.oracle.com/pls/apex/f?p=109536",
  location: null,
  email: null,
  hireable: true,
  bio: "CSE Diploma Engineer\r\nOracle APEX Developer\r\nWeb developer",
  twitter_username: "shakhawat15_bd",
  public_repos: 82,
  public_gists: 0,
  followers: 2,
  following: 3,
  created_at: "2019-07-17T17:05:28Z",
  updated_at: "2024-02-09T00:29:00Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("shakhawatdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
