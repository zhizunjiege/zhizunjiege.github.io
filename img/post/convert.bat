@echo off
for %%i in (*.png) do start E:\ffmpeg\bin\ffmpeg -i "%%i" "%%~dpni.webp"
REM for %%i in (*.jpeg) do start E:\ffmpeg\bin\ffmpeg -i "%%i" "%%~dpni.webp"