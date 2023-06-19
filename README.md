# DTANextJS
DTA Website created with NextJs as Frontend and Wagtail Headless CMS as Backend

## Getting Started
This project consist of the backened and frontend.

# To Run the Frontend

```bash
cd frontend
# then run
npm install 
```
Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# To Run the Backend
First make sure your  environment is setup.

To check whether you have an appropriate version of Python 3:
```bash
python --version

# On Windows (cmd.exe, with the Python Launcher for Windows):

py --version
```
Now go ahead and setup a virtual enviroment for thhe project if you haven't done so. It is recommended to use a virtual environment, which isolates installed dependencies from other projects. 

venv is used in this project, which is packaged with Python 3.


On Windows (cmd.exe):
```bash
py -m venv env
env\Scripts\activate.bat
# or:
env\Scripts\activate
```
On GNU/Linux or MacOS (bash):
```bash
py -m venv env
source env/bin/activate
```
After setting up the environment, go on to install dependencies

```bash
cd digitaltimes
pip install -r requirements.txt
```

Then run migrations
```bash
python manage.py migrate
```

Finally run the development server
```bash
python manage.py runserver
```

You should now be able to access the admin dashboard on http://127.0.0.1:8000/admin but depending on your setup, this could be http://localhost:8000/admin

You can find more information in the ['getting started Wagtail CMS docs'](https://docs.wagtail.org/en/stable/getting_started/index.html).