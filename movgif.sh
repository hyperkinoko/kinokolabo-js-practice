#!/bin/sh

mkdir "assets/movies/tmp"
ffmpeg -i "assets/movies/$1.mov" -an -r 10 assets/movies/tmp/%04d.png && convert assets/movies/tmp/*.png -resize 50% assets/movies/tmp/output_%04d.png && convert assets/movies/tmp/output_*.png "assets/movgif/$1.gif" && rm -fr assets/movies/tmp
