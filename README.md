
# Notice Board Project

This project is a simple Notice Board eepsite aplication that allows users to post messages on a public board using i2p. Messages are stored on the server, and all clients can see the same set of messages.

## Setup

### Prerequisites

- Node.js and npm installed on your server.

### Installation

1. **Clone the repository @ /var/www/ :**

   ```bash
   cd /var/www/
   git clone https://github.com/rgligora/i2p-notice-board.git

2. **Navigate to the project directory:**
    ```bash
   cd i2p-notice-board

3. **Install Node.js dependencies:**
   ```bash
   cd node
   npm install

4. **Start the Node.js server:**
   ```bash
   node server.js

5. **Create a symbolic link to this configuration file in the sites-enabled directory:**
   New terminal tab
   ```bash
   cd i2p-notice-board
   sudo ln -s /var/www/i2p-notice-board/nginx/notice-board.conf /etc/nginx/sites-enabled

6. **Restart Nginx to apply the changes:**
   ```bash
   sudo service nginx restart


