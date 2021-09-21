echo "Pulling from git:"

git stash
git pull 

echo "Building the App:"

npm run build

echo "Starting UI Server at Port 80:"

serve -l 80 -s build