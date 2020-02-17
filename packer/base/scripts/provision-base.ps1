#Write-Host "Enabling RDP, reset SysprepStatus and show file extensions"

#netsh advfirewall firewall add rule name="Remote Desktop on 3389" dir=in localport=3389 protocol=TCP action=allow
#reg add 'HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server' /v fDenyTSConnections /t REG_DWORD /d 0 /f
# Set-ItemProperty -Path 'HKLM:\SYSTEM\Setup\Status\SysprepStatus'  -Name  'GeneralizationState' -Value 7
# Set-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Name 'HideFileExt' -Value 0
# Set-ItemProperty -path "HKLM:\SOFTWARE\Microsoft\Internet Explorer\UnattendBackup\ActiveSetup\DisableFirstRunWizard" -Name DisableFirstRunWizard -Value 1

DISM /Online /NoRestart /Enable-Feature /all /FeatureName:NetFx3ServerFeatures /Source:D:\sources\sxs
DISM /Online /NoRestart /Enable-Feature /all /FeatureName:NetFx3 /Source:D:\sources\sxs
Install-WindowsFeature NET-Framework-45-Features
Install-WindowsFeature NET-Framework-45-Core
Install-WindowsFeature NET-Framework-45-ASPNET
# Install-WindowsFeature NET-Framework-Core
# Install-WindowsFeature NET-Framework-Features
