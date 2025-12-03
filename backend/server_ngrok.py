import subprocess
import time

ngrok_dir = r"C:\ngrok"

# Popen starts the process without blocking the rest of your Python code
process = subprocess.Popen(
    ["ngrok", "http", "8888"], 
    cwd=ngrok_dir, 
    shell=True
)

print(f"Ngrok started with PID: {process.pid}")

# Example: The script continues running while ngrok is open
try:
    while True:
        print("Python is doing other work while ngrok runs...")
        time.sleep(5) 
except KeyboardInterrupt:
    # Ensure ngrok closes when you kill the python script
    process.terminate()
    print("Ngrok closed.")