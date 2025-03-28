# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
============================================================================================================================================



-- Sign Up AWS
-- Launch instance
-- Create a instance using EC2 and it will genetrate a Pem file and this Pem file will be used to run and launch the awsEC2 Instance 
-- pem file stores our secreat keys
-- install node version in aws and its version will be same as the local
-- git clone https://github.com/TrapFish/devTinder.git -- Front End
-- FrontEnd - 
            1. npm install --> depencies installed
			2. npm run build
			3. sudo apt update
			4. sudo apt install nginx
			5. sudo systemctl start nginx
			6. sudo systemctl enable nginx
			7. code copy from dist(build files) to /var/www/html/
			   -- in devTinder folder in AWS run /var/www/html/
			   -- to copy the code from dist folder in the devTinder to the /var/www/html -- Command is --- "sudo scp -r dist/* /var/www/html"
			8. Enable port 80 of your web server
   
   -- Backend 
       1. npm install --> depencies installed
			
			   
 "scripts": {
    "start": "node src/app.js", //===> Production
    "dev": "nodemon src/app.js"//development mode //===> Development
  }

      2. allowed ec2 instance public IP on mongodb server
      3. installed PM2 -- npm install pm2 -g
      4. pm2 start npm -- start
      5. pm2 logs 
      6. to clear the logs === pm2 flush npm
      7. pm2 stop npm 
      8. pm2 delete npm 
         === pm2 list , pm2 flush <process name>, pm2 stop <process name> , pm2 delete <process name>
      9. pm2 start npm --name "DevBackEnd" --start   ==> here we are giving our own process name 
      10. config nginx - /etc/nginx/sites-available/default --- "sudo nano /etc/nginx/sites-available/default"
      11. restart nginx -- sudo systemctl restart nginx   
  

  Modify the base url in frontend projct
      
      FrontEnd :+1: http://13.51.13.44/
      BackEnd  : 👍: http://13.51.13.44:3000/

	open the instance and run the command


   nginx config::

   server_name 13.51.13.44;
    location /api/ {
            proxy_pass http://127.0.0.1:3000/; # Notice the trailing slash
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
	 
	 Verify Public IP Address:

         EC2 Instances, by default, will lose their public IP address when they are stopped and restarted.
         Double-check that you are using the correct public IP address of your EC2 instance. The IP address displayed in the AWS EC2 console is the one you need to use.
         If you need a static public IP address, you should assign an Elastic IP address to your instance.
		 
	 Nginx Status:

       SSH into your EC2 instance.
       Run "sudo systemctl status nginx" to ensure Nginx is running. If it's not, start it with "sudo systemctl start nginx".
       If it is running, try to restart it. "sudo systemctl restart nginx"
	   
	 Nginx Logs:

      Check the Nginx error logs for any errors: sudo tail -f /var/log/nginx/error.log
      Check the Nginx access logs to see if requests are coming in: sudo tail -f /var/log/nginx/access.log
	  
	File Permissions:

      Navigate to your dist directory: cd /var/www/html
      List the files and their permissions: ls -l
      Ensure the www-data user has read permissions for all files. If not, run: sudo chown -R www-data:www-data *
	  
    Nginx Configuration:

      Check your Nginx configuration: sudo nano /etc/nginx/sites-available/default
      Verify that the root directive points to your dist directory (/var/www/html).
      Test the Nginx configuration: sudo nginx -t
      If you made any changes to the config file, reload nginx. sudo systemctl reload nginx
    
	Browser Cache:

      Clear your browser's cache and cookies.
      Try opening the website in incognito mode.
      Firewall on the Ubuntu Instance:

   Check if there is a firewall running on the ubuntu instance itself.
      sudo ufw status
       If it is enabled, make sure port 80 is allowed.
       sudo ufw allow 80
	   
   Network Issues:

      Try accessing the website from a different network (e.g., using a mobile hotspot).
      Try to access the ip address from another computer.
      Elastic IP (Recommended):

   To avoid your public IP changing, allocate an Elastic IP address in the AWS console and associate it with your EC2 instance. This provides a static public IP.
   Key Points:

      The most common issue is that the EC2 instance's public IP address has changed.
      Nginx must be running and configured correctly.
      File permissions are crucial.
      Firewalls on the instance itself can block traffic.
      By systematically going through these steps, you should be able to identify the root cause of the issue and get your application running again.