DROP USER 'test'@'localhost';
CREATE USER 'test'@'localhost' IDENTIFIED BY 'tesT1234$';
GRANT ALL PRIVILEGES ON `brapi_dan`.* TO 'test'@'localhost';

FLUSH PRIVILEGES;


