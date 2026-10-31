@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
    echo No se encontro Node.js. Instalalo para iniciar el servidor local.
    pause
    exit /b 1
)

start "Rivera Cranes Local" cmd /k "cd /d ""%~dp0"" && node tools\dev-server.js"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4177"
