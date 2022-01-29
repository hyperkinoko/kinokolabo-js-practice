#!/bin/sh

files="assets/movies/*"
for file in $files; do
  tmp=${file##*/}
  echo $tmp
  fileName=${tmp%.*}
  echo $fileName
  ffmpeg -i "assets/movies/$fileName.mov" -r 10 "assets/movgif/$fileName.gif"
done
