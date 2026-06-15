@echo off
cd /d "C:\Users\hashr\Videos\Jishnu\smile32-website-files"
python -m http.server 4173 --bind 127.0.0.1 --directory dist
