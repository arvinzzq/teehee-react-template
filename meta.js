module.exports = {
  prompts: [
    {
      type: 'input',
      name: "description",
      message: "Project description",
      default: "A React.js project"
    },
    {
      type: 'input',
      name: "keywords",
      message: "Project keywords",
      default: "react"
    },
    {
      type: 'input',
      name: "author",
      message: "Author"
    },
    {
      type: 'input',
      name: "license",
      message: "License",
      default: "MIT"
    }
  ]
}
