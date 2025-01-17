To-Do List Application

This is a simple and interactive To-Do List application built with HTML, CSS, and JavaScript. It allows users to manage daily tasks efficiently by adding, marking as done, and deleting tasks. The application uses local storage to save tasks, so they persist even after refreshing the page.

Features

Add Tasks:

Users can add tasks by typing in the input box and pressing the Add button or hitting Enter.

If the input field is empty, a SweetAlert warning prompts the user to enter a task.

Mark Tasks as Completed:

Click on a task to toggle its completion status. Completed tasks are visually indicated with a strike-through.

A SweetAlert success message confirms the update.

Delete Tasks:

Click the delete button (×) next to a task to remove it.

A SweetAlert success message confirms the deletion.

Local Storage:

Tasks are saved in the browser's local storage, ensuring they remain available even after refreshing the page.

Keyboard Accessibility:

Pressing Enter in the input field adds the task, enhancing accessibility and usability.

Technologies Used

HTML: Structure of the application.

CSS: Styling for the application.

JavaScript: Logic and interactivity.

SweetAlert2: For modern and interactive alerts.

How to Use

Clone or download the repository to your local machine.

Open the index.html file in any modern browser.

Start adding tasks in the input field.

Click on tasks to mark them as completed or use the delete button to remove them.

Refresh the page to see the saved tasks.

Installation

No additional setup is required. Simply include the following SweetAlert2 CDN link in the <head> of your index.html file:
```
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```
