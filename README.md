# E-Commerce-Back-End

## Description
This is a back end for an e-commerce site, which use Sequelize to interact with a MySQL database.

## Installation
N/A

## Usage

Open the terminal and navigate to the directory containing the Logo Generator files.
Type node index.js and press Enter to run the E-Commerce-Back-End.
Then you have to use Insomnia to do the routs tests as following:
First rout to test (api/categories)
** To test the GET route for retrieving a all the categories using Insomnia, follow these steps:
    1. Open Insomnia and create a new request.
    2. Set the request type to GET.
    3. Enter the URL: http://localhost:3001/api/categories.
    4. Click the "Send" button to send the GET request.
** To test the GET route for retrieving a specific category using Insomnia, follow these steps:
    1. Open Insomnia and create a new request.
    2. Set the request type to GET.
    3. Enter the URL: http://localhost:3001/api/categories/{category_id}.
       Replace {category_id} with the actual ID of the category you want to retrieve.
    4. Click the "Send" button to send the GET request.
** To test the POST route for creating new category using Insomnia, follow these steps:
    1. Open Insomnia and create a new request.
    2. Set the request type to POST.
    3. Enter the URL: http://localhost:3001/api/categories/.
    4. Enter the following body in the body section
       { "category_name":"{Enter the name you want for the category}"}
    5. Click the "Send" button to send the POST request.
** To test the PUT route for updating a category using Insomnia, follow these steps:
    1. Open Insomnia and create a new request.
    2. Set the request type to POST.
    3. Enter the URL: http://localhost:3001/api/categories/{category_id}.
       Replace {category_id} with the actual ID of the category you want to update.
    4. Enter the following body in the body section
       { "category_name":"{Enter the new name you want for the category}"}
    5. Click the "Send" button to send the PUT request.
** To test the DELETE route for deleting a category using Insomnia, follow these steps:
    1. Open Insomnia and create a new request.
    2. Set the request type to DELETE.
    3. Enter the URL: http://localhost:3001/api/categories/{category_id}.
       Replace {category_id} with the actual ID of the category you want to delete.
    4. Click the "Send" button to send the DELETE request.
And the testing for the other 2 routs "api/tags" and "api/products" will be exact same steps with updating the URL to match the rout's name.

## Assets
N/A

## Credits

N/A

## License
Licensed under the [MIT](https://github.com/ghiasnaser/E-Commerce-Back-End/blob/1bf3ed6f69fb2cc52bba4dde683e142adaccee39/LICENSE) license.

## Links
The Recorded video link on how to use it:  https://watch.screencastify.com/v/JXfthGf4gnsRy6lnMMxb
The repository link: https://github.com/ghiasnaser/E-Commerce-Back-End.git
