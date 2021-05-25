# Create Function 

Open Cloud Shell

Use context

Docker Login

fn init --runtime node live-cache

cd live-cache

fn list apps

use existing app to add function to or create a new app

deploy function to app 

fn -v deploy --app fun-app

after deployment is done, check existence of function

fn list f fun-app

invoke function:

fn invoke fun-app live-cache




### Resources
Katacoda course on Fn https://www.katacoda.com/lucasjellema/scenarios/functions-on-oci