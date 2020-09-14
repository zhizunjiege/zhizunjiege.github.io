@echo off
for %%i in (*.webp) do start E:\ffmpeg\bin\ffmpeg -i "%%i" "%%~dpni.png"
REM for %%i in (*.jpeg) do start E:\ffmpeg\bin\ffmpeg -i "%%i" "%%~dpni.webp"