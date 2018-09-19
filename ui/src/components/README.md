ProjectList is a list showing visible projects.
- projects: Array is an array of projects items with { id, text, completed } shape.
- onProjectClick(id: number) is a callback to invoke when a project is clicked.

Project is a single project item.
- text: string is the text to show.
- completed: boolean is whether the project should appear crossed out.
- onClick() is a callback to invoke when the project is clicked.

Link is a link with a callback.
- onClick() is a callback to invoke when the link is clicked.

Footer is where we let the user change currently visible projects.

App is the root component that renders everything else.
