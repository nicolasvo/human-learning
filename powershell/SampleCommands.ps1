| findstr -i foo
| out-host -paging like less
| Sort-Object -Property Length -Descending
Get-Process | Sort-Object -Property WS | Select-Object -Last 5

Get-Process or ps
Get-Alias or alias
New-Item or ni
Get-Content or cat
Remove-Item or rm
Get-Help like man

Get-Help cmdlet -Example
Get-Command cmdlet -Syntax

Where-Object {$_.object -eq 'foo'}

Get-ChildItem -Path $PWD -Include *.ps1 -File -Recurse -Name

(Get-CimInstance -Name Win32_BIOS -ComputerName .).Version

Get-Process | Where-Object -FilterScript {$_.Responding -eq $false} | Stop-Process

Get-Service
New-Service
Restart-Service
Resume-Service
Set-Service
Start-Service
Stop-Service
Suspend-Service

powershell -ExecutionPolicy ByPass -File

Get-Process | Select-Object -First 5 | Format-List -Property ProcessName, Handles
Get-Process | Select-Object -First 5 | Format-List -Property * # Wildcard shows detailed information

Get-ChildItem Env:
Get-ChildItem Env: | Where-Object -FilterScript {$_.Name -like "PRO*"} | Format-List -Property *

(Get-Item Env:ANSICON).Value


$Age = Read-Host "Enter your age" | Out-File age.txt
$env:COMPUTERNAME