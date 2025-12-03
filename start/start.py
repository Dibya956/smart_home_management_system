import subprocess
import os


current_script_dir = os.path.dirname(os.path.abspath(__file__))


target_dir = os.path.join(current_script_dir, "frontend")

print(f"Starting 'npm run dev' in: {target_dir}")

try:
    # 3. Run the command. 
    # cwd=target_dir tells it to run INSIDE the frontend folder.
    # shell=True is required for npm commands on Windows.
    subprocess.run("npm run dev", cwd=target_dir, shell=True)
except KeyboardInterrupt:
    print("\nProcess stopped by user.")