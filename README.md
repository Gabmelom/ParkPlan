# ParkPlan

## Running the project

### Method 1
Step 1: Download and install .NET Runtime 6.0 and ASP.NET Core Runtime 6.0 from https://dotnet.microsoft.com/en-us/download/dotnet/6.0

If you try to run ParkPlan.exe without the dependencies it should provide you with a download link specific to your OS

Step 2: Run ParkPlan.exe from the ParkPlan_exe.zip folder

Step 3: The command prompt should display the port used (by default it is localhost:5000 or 5001), navigate to the page within a browser of choice

### Method 2

Step 1: Download and install .NET SDK 6.0 which already includes ASP.NET Core Runtime 6.0 from https://dotnet.microsoft.com/en-us/download/dotnet/6.0. The SDK will allow us to compile the code and run it

Step 2: Open a command prompt and run the following commands on the folder with the ParkPlan_repo.zip file:
```
dotnet restore ParkPlan.sln <= Installs nuget dependencies
dotnet build ParkPlan.sln <= Compiles the code, generates the bin
dotnet run ParkPlan.csproj <= Runs the code
```

Step 3: The command prompt will display the port used (by default its localhost:5000 or 5001), navigate to the page within a browser of choice

### Method 3

Step 1: Download visual studio 2022 community free edition Install “ASP.Net and web development” from the Workloads tab when prompted or from Tools > Get Tools and Features
- Visual studio download: https://visualstudio.microsoft.com/downloads/
- Visual studio guide: https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net70#install-with-visual-studio

Step 2: Choose IIS Express or ParkPlan configurations and press the play button to run the code


![image](https://github.com/Gabmelom/ParkPlan/assets/60167780/5819b406-d150-4d03-9124-7f1ee99d4d99)

## Project structure

The "Pages" folder includes individual Razor files dedicated to specific web pages. Each file corresponds to its respective webpage, defining its unique content and layout.

The "Components" folder has Razor files designed for more complex UI elements or elements that are used multiple times on a page. These elements are utilized on the specific page associated with their respective folder.

The "Shared" folder hosts UI elements shared across multiple pages, such as the left-side menu. These elements are consistent throughout the application.

The "Data" folder contains C# files responsible for data storage and sharing data between various pages within the project.

The "wwwroot" folder stores a collection of images, serving as static assets across the entire project during runtime. Additionally, this folder contains the "parkingmap.js" file, which is used for generating the map and managing its interactions.

The "program.cs" file is used for initializing and the startup of the application.
