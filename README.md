# Instagram Parse Puppeteer

## Overview

Instagram Parse Puppeteer is a Node.js project that allows you to parse data from Instagram accounts using Puppeteer, a powerful library for controlling headless Chrome or Chromium browsers. With this tool, you can fetch information such as followers, followings, and posts from the specified Instagram account and store it in your own database.

**Note:** Instagram's website structure and classes may change over time, which may affect the functionality of this tool. Be prepared to update the code if Instagram makes significant changes.

## Installation

To use this project, follow the steps below:

1. Clone the repository:

```
git clone https://github.com/bb2882/instagram_puppeteer_parser.git
```

2. Navigate to the project directory:

```
cd instagram-puppeteer-parser
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Run the script:

```
node index
```

2. The script will prompt you for the following information:

   - **Username:** Your Instagram username (required).
   - **Password:** Your Instagram account password (required).
   - **Account to Parse:** The Instagram account from which you want to parse data (required).
   - **Options:** You can choose to parse followers, followings, posts, or any combination of these (required).

3. Sit back and let the script do its magic. It will use Puppeteer to log in to the specified account, navigate to the account you want to parse, and extract the requested data.

4. The parsed data will be stored in your database. Please ensure you have set up a MongoDB database and provided the necessary credentials in the script before running it.

## Contributing

If you find any issues or have suggestions to improve this project, feel free to create an issue or submit a pull request on the GitHub repository.

## Disclaimer

This project is intended for educational and personal use only. The developer is not responsible for any misuse or violation of Instagram's terms of service. Use this tool responsibly and at your own risk.

Happy parsing!
