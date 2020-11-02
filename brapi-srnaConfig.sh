sudo adduser brunocosta
sudo usermod -aG sudo,adm brunocosta
sudo su brunocosta
cd
mkdir .ssh
sudo cp /home/ubuntu/.ssh/authorized_keys ~/.ssh/authorized_keys
sudo chown brunocosta:brunocosta ~/.ssh/authorized_keys
sudo chmod 644 ~/.ssh/authorized_keys
sudo apt update
sudo apt upgrade

#git
mkdir git
cd git
git clone https://[wwwwwww].git



cd 
git clone https://github.com/StuntsPT/oh-my-zsh .oh-my-zsh
ln -s .oh-my-zsh/.zshrc .zshrc
cd .oh-my-zsh
git submodule update --init --recursive
sudo apt install zsh
sudo chsh brunocosta -s /usr/bin/zsh 

cd 
cd .git/[repo]/bin
systemctl link /home/brunocosta/.git/[repo]/bin/webServer.service


sudo snap install --edge --classic node
npm i
mkdir "${HOME}/.npm-packages"
vim ~/.zshrc
###.zshrc
NPM_PACKAGES="${HOME}/.npm-packages"
export PATH="$PATH:$NPM_PACKAGES/bin"
# Preserve MANPATH if you already defined it somewhere in your config.
# Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
export PATH=$PATH:/snap/bin
#######
npm i nodemon -global


sudo apt install mysql-server
sudo mysql_secure_installation
sudo mysql -u root -p
SET GLOBAL validate_password_policy=low
CREATE DATABASE [DB];
create USER 'brapi'@'localhost' IDENTIFIED BY ''; GRANT ALL PRIVILEGES ON `brapi_dan`.* TO 'brapi'@'localhost'; FLUSH PRIVILEGES;
create USER 'webapp'@'localhost' IDENTIFIED BY 'JC9v@a2aVJ60qHmX&zPKWdCqhbZFSvT*p'; GRANT ALL PRIVILEGES ON `sRNAPlantPortal`.* TO 'webapp'@'localhost'; FLUSH PRIVILEGES;

sudo mysql -u root -D ${db} -p <SQL/LATEST_dump.sql


sudo systemctl start webServer.service
sudo systemctl enable webServer.service


#